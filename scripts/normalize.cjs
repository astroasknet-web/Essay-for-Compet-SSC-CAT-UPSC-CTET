/* Reads source/original/test-NN.json (never edits them) and writes data/essays.json plus data/audit.json.
   Run: node scripts/normalize.cjs */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const words = (s) => (s.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;
const topics = [...fs.readFileSync(path.join(root, "source/original/topics-and-prompt.txt"), "utf8").matchAll(/^## (\d+)\. (.+)$/gm)].map((m) => ({ n: +m[1], title: m[2].trim() }));
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const out = [], audit = [];
const note = (n, level, msg, q) => audit.push({ test: n, question: q ?? null, level, message: msg });

for (let n = 1; n <= 30; n++) {
  const file = path.join(root, `source/original/test-${String(n).padStart(2, "0")}.json`);
  let j; try { j = JSON.parse(fs.readFileSync(file, "utf8")); } catch (e) { note(n, "error", "does not parse: " + e.message); continue; }
  const topic = topics.find((t) => t.n === n)?.title;
  let title = j.title || j.essay_title, body;
  if (j.essay && typeof j.essay === "object") { title = title || j.essay.title; body = j.essay.content; if (Array.isArray(body)) body = body.join("\n\n"); } else body = Array.isArray(j.essay) ? j.essay.join("\n\n") : j.essay;
  if (typeof body !== "string") { note(n, "error", "no essay text"); continue; }
  body = body.replace(/\r\n/g, "\n").trim();
  // some essays begin with their own title line
  const first = body.split("\n\n")[0];
  if (!title && first.length < 160 && !/[.]$/.test(first) && body.split("\n\n").length > 1) { title = first; body = body.split("\n\n").slice(1).join("\n\n"); note(n, "info", "title taken from the first line of the essay"); }
  if (!title) { title = topic; note(n, "info", "title taken from the topic list"); }
  let embedded = null;
  if (/\n-{3,}\n/.test(body) && /\nQ1\./.test(body)) {
    const [essayPart, ...rest] = body.split(/\n-{3,}\n/);
    embedded = [...rest.join("\n").matchAll(/Q(\d+)\.\s*([\s\S]*?)\nA\)\s*([^\n]*)\nB\)\s*([^\n]*)\nC\)\s*([^\n]*)\nD\)\s*([^\n]*)\nAnswer:\s*([A-D])/g)].map((m) => ({ question: m[2].trim(), options: [m[3], m[4], m[5], m[6]].map((x) => x.trim()), answer: m[7] }));
    body = essayPart.trim();
    note(n, "error", `the questions were pasted inside the essay text and the "questions" list was missing; ${embedded.length} questions were separated from the essay and restored`);
  }
  const qk = ["question_bank", "questions_and_answers", "questions", "mcqs", "mcq_questions"].find((k) => Array.isArray(j[k]));
  const rawQs = embedded || j[qk] || [];
  const authored = (JSON.parse(fs.readFileSync(path.join(root, "data/authored-mcqs.json"), "utf8")))[String(n)];
  const w = words(body);
  if (w < 600) note(n, "warning", `essay has ${w} words, below the 600 asked for`);
  if (w > 900) note(n, "warning", `essay has ${w} words, above the 900 asked for`);
  if (rawQs.length !== 10) note(n, "error", `${rawQs.length} questions instead of 10`);
  const qs = rawQs.map((q, i) => {
    const id = i + 1;
    let options = null;
    if (Array.isArray(q.options)) options = q.options.map((o) => String(o).replace(/^\s*\(?[A-D][\).:]\s+/, "").trim());
    else if (q.options && typeof q.options === "object") options = ["A", "B", "C", "D"].map((k) => String(q.options[k] ?? "").trim());
    const rawAns = q.answer ?? q.correct_answer ?? q.correct_option;
    let letter = null, explanation = q.explanation || q.answer_explanation || "", how = "";
    const A = typeof rawAns === "string" ? rawAns.trim() : rawAns && typeof rawAns === "object" && rawAns.option ? `${rawAns.option}) ${rawAns.text ?? ""}` : "";
    if (options) {
      let m = A.match(/^\(?([A-D])\)?(?:[\s.:)\-–]|$)(.*)$/s);
      if (m && (A.length === 1 || /^[A-D][\).:\s]/.test(A) || /^\([A-D]\)/.test(A))) {
        letter = m[1]; how = "letter";
        const rest = m[2].trim();
        const own = norm(options["ABCD".indexOf(letter)] || "");
        const restPlain = norm(rest.replace(/\(.*$/s, ""));
        if (rest && restPlain && own && !(norm(rest).startsWith(own) || own.startsWith(restPlain) || restPlain.startsWith(own))) {
          if (rest.length > 40 && !/^[\(\-–—]/.test(rest)) { explanation = explanation || rest; }
          else note(n, "warning", `letter ${letter} but the answer text differs from option ${letter}: "${rest.slice(0, 60)}"`, id);
        } else if (rest.includes("(")) explanation = explanation || rest.slice(rest.indexOf("(")).replace(/^\(|\)$/g, "");
      } else {
        const hit = options.findIndex((o) => norm(o) === norm(A) || (norm(A).length > 12 && norm(o).startsWith(norm(A).slice(0, 40))));
        if (hit >= 0) { letter = "ABCD"[hit]; how = "text match"; }
      }
      if (!letter) note(n, "error", `cannot resolve the correct option from ${JSON.stringify(rawAns)?.slice(0, 80)}`, id);
      if (options.length !== 4 || options.some((o) => !o)) note(n, "error", "options are not four non-empty texts", id);
      else if (new Set(options.map(norm)).size !== 4) note(n, "error", "two options are identical", id);
    } else if (!(authored && authored[i])) note(n, "warning", "no options: written-answer question", id);
    if (typeof q.question !== "string" || q.question.length < 15) note(n, "error", "question text missing or too short", id);
    if (!options && authored && authored[i]) {
      const a = authored[i];
      note(n, "fixed", "written-answer question given four options (authored from the essay); original model answer kept as the explanation", id);
      return { n: id, exam: a.exam || null, question: a.question, options: a.options, answer: a.answer, modelAnswer: null, explanation: String(A), how: "authored" };
    }
    return { n: id, exam: q.exam_focus || null, question: String(q.question || "").trim(), options, answer: letter, modelAnswer: options ? null : A, explanation: String(explanation).trim(), how };
  });
  if (qs.filter((q) => q.options).length && qs.some((q) => !q.explanation && q.options)) note(n, "info", `${qs.filter((q) => q.options && !q.explanation).length} questions have no explanation`);
  out.push({ n, title: title.trim(), body, words: w, questions: qs });
}
fs.writeFileSync(path.join(root, "data/essays.json"), JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(root, "data/audit.json"), JSON.stringify(audit, null, 1));
const c = (l) => audit.filter((a) => a.level === l).length;
console.log({ essays: out.length, questions: out.reduce((a, e) => a + e.questions.length, 0), errors: c("error"), warnings: c("warning"), info: c("info") });
for (const a of audit.filter((x) => x.level !== "info")) console.log(a.level, a.test + (a.question ? "." + a.question : ""), a.message);

// ---------------------------------------------------------------------------------------------------------------------------------
// Second pass: (1) key positions, (2) letter references in explanations, (3) answerability check.
const PIN = /^(\(?[1-4]\)?(,? and \(?[1-4]\)?)?( only)?\.?|both\b.*|neither\b.*|all\b.*above.*|none\b.*above.*|i and ii.*|ii only|i only)$/i; // order carries meaning
const isNumericOption = (o) => /^[₹$~]?\s?\d[\d.,\s\-–to]*\s?(%|percent|trillion|billion|crore|lakh|million|years?)?$/i.test(o.trim());
const seeded = (a, b) => { let h = (a * 2654435761 + b * 40503) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822507) >>> 0; return h; };
const content = (s) => new Set((String(s).toLowerCase().match(/[a-z]{5,}/g) || []));
const log2 = [];
let moved = 0, kept = 0;
for (const t of out) {
  const bodyWords = content(t.body);
  t.questions.forEach((q) => {
    if (!q.options || !q.answer) return;
    const ki = "ABCD".indexOf(q.answer);
    // answerability: does the key (or the question) use words that the essay uses?
    const kw = [...content(q.options[ki])];
    if (kw.length >= 4) { const hit = kw.filter((w) => bodyWords.has(w)).length / kw.length; if (hit < 0.3) note(t.n, "review", `the correct option shares few words with the essay (${Math.round(hit * 100)}%): check that the essay supports it`, q.n); }
    // explanation: where the file gave none, quote the sentence of the essay that best supports the key (never invented text)
    q.explanationSource = q.explanation.length >= 30 ? "supplied" : null;
    if (!q.explanationSource) {
      const sentences = t.body.replace(/\n+/g, " ").match(/[^.!?]+[.!?]+/g) || [];
      const want = new Set([...content(q.options[ki]), ...content(q.question)]);
      const keyWords = content(q.options[ki]);
      let best = null, bestScore = 0;
      for (const sn of sentences) { const cw = content(sn); let sc = 0, kh = 0; for (const w of want) if (cw.has(w)) sc++; for (const w of keyWords) if (cw.has(w)) kh++; sc += kh; if (sc > bestScore && kh >= Math.min(2, keyWords.size)) { best = sn.trim(); bestScore = sc; } }
      if (best && keyWords.size) { q.explanation = `The correct answer is "${q.options[ki].replace(/\.$/, "")}". The essay says: "${best.length > 300 ? best.slice(0, 297) + "..." : best}"`; q.explanationSource = "quoted from essay"; }
      else { q.explanation = `The correct answer is "${q.options[ki].replace(/\.$/, "")}". This question draws on general knowledge beyond the essay, so there is no sentence in the essay to quote.`; q.explanationSource = "general knowledge"; }
    }
    // key position balance
    const pinned = q.options.some((o) => PIN.test(o) || isNumericOption(o));
    if (pinned) { kept++; return; }
    const target = seeded(t.n, q.n) % 4;
    if (target === ki) { kept++; return; }
    const others = q.options.filter((_, i) => i !== ki);
    const next = [];
    for (let i = 0, o = 0; i < 4; i++) next.push(i === target ? q.options[ki] : others[o++]);
    const map = {}; q.options.forEach((txt, i) => { map["ABCD"[i]] = "ABCD"[next.indexOf(txt)]; });
    q.options = next; q.answer = "ABCD"[target]; moved++;
    // explanations that point at letters follow the options
    q.explanation = q.explanation.replace(/\b(Option|Options|option|options)\s+([A-D])\b/g, (m, w, l) => `${w} ${map[l]}`).replace(/^\(?([A-D])\)?(\s*[\(\-–:])/, (m, l, r) => `${map[l]}${r}`);
  });
}
const dist = { A: 0, B: 0, C: 0, D: 0 }; let tot = 0, longest = 0;
for (const t of out) for (const q of t.questions) if (q.options && q.answer) { dist[q.answer]++; tot++; const L = q.options.map((x) => x.length); if (L["ABCD".indexOf(q.answer)] === Math.max(...L)) longest++; }
note(0, "fixed", `answer positions rebalanced in ${moved} questions (${kept} left as they were because their option order carries meaning, such as "1 only / 2 only / both" or numbers)`);
for (const t of out) {
  const L = t.questions.filter((q) => q.options && q.answer);
  t.keyLongest = L.filter((q) => { const l = q.options.map((x) => x.length); return l["ABCD".indexOf(q.answer)] === Math.max(...l); }).length;
}
fs.writeFileSync(path.join(root, "data/essays.json"), JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(root, "data/audit.json"), JSON.stringify(audit, null, 1));
console.log("after pass 2:", { moved, kept, positions: dist, total: tot, keyIsLongest: longest, keyIsLongestPct: Math.round((100 * longest) / tot) });
console.log(audit.filter((a) => a.level === "review").map((a) => `review ${a.test}.${a.question} ${a.message}`).join("\n"));
