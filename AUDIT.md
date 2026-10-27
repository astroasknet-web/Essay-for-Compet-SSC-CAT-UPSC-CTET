# Audit of the 30 supplied tests

Produced by `node scripts/normalize.cjs` (reads `source/original/`, writes `data/essays.json` and `data/audit.json`). The originals are never edited.

## What was wrong, and what was done

| # | Finding | Action |
|---|---|---|
| 1 | **Seven different layouts.** The question list is called `question_bank`, `questions_and_answers`, `questions`, `mcqs` or `mcq_questions`; options are an object or a list; the answer is a letter, `"B) text"`, `{option, text}`, a bare option text, or in `correct_answer` / `correct_option`; the essay is text or an object; 22 files have no title. | One normaliser handles all of them. Titles come from the file, the first line of the essay, or the topic list. |
| 2 | **Test 21 had no question list.** The ten questions were pasted inside the essay text after a `---` line. | Questions separated from the essay and restored (the essay was 953 words with them, about 830 without). |
| 3 | **Tests 2 and 3 have no options** (20 written-answer questions with a model answer). They cannot be marked as multiple choice. | Four-option versions were authored from the essay text (`data/authored-mcqs.json`); the original model answer is kept as the explanation. |
| 4 | **Answer positions were skewed.** 57% of all keys were "B"; test 22 was B in 10 of 10 and tests 24, 25 and 27 in 9 of 10. A student could guess B. | Options reordered so keys are spread (A 22%, B 28%, C 23%, D 26%). Questions whose order carries meaning ("1 only / 2 only / both", numbers) were not touched (99 questions). |
| 5 | **Explanations missing** for 198 of 300 questions. | Each now has an explanation. Where the file gave none, the explanation quotes the essay sentence that best supports the key (184 questions) and is marked `quoted from essay`; 14 questions rely on outside knowledge and say so (`general knowledge`). Nothing is invented. |
| 6 | **Essay length.** Asked for 600 to 900 words. Test 20 has 571, test 23 has 594, test 29 has 564, test 28 has 1,095. | Left as written (cutting or padding would change the content). Reported here. |
| 7 | **The key is the longest option in 79% of questions.** A test-taker who always picks the longest option scores far above chance. | **Not fixed** (needs a person to rewrite distractors). The per-test count is in `data/essays.json` (`keyLongest`). |
| 8 | **Answers not supported by the essay.** Original model answers in tests 2 and 3 mentioned things the essay does not (vaccine diplomacy, the Malabar exercise, IoT). | Replaced by the authored questions in 3. Question 14.3 shares no words with the essay (it is solved by elimination). 14 questions (listed in `data/audit.json`) draw on general knowledge. |

Nothing here has been checked by a subject expert. Facts stated in essays and keys (dates, article numbers, case names, figures) were not verified against sources.
