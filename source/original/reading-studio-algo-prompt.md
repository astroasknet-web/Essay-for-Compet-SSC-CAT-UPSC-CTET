Below is a master prompt you can give to your AI coding tool to develop a world-class Reading Studio for your web application. The objective is to assess students' reading comprehension, identify their weaknesses, generate detailed analytics, and motivate them to purchase a complete learning package through measurable progress.

# MASTER DEVELOPMENT PROMPT: AI-POWERED READING STUDIO

## 1. Project Overview

Develop a world-class, AI-powered **Reading Studio** for my educational web application. The studio must help students improve their reading speed, comprehension, accuracy, analytical thinking, vocabulary, information retention, and ability to answer questions based on essays and passages.

The primary objective is to identify each student's reading weaknesses through a scientifically designed assessment algorithm and present the results through professional analytics, interactive graphs, performance scores, and personalised improvement recommendations.

The system must also encourage students to purchase a premium learning package by demonstrating the value of continuous practice, personalised feedback, structured learning levels, and measurable progress.

**Important:** Do not build a simple reading test. Build an intelligent Reading Studio that functions as a complete assessment, diagnosis, practice, and progress-tracking system.

---

## 2. Core Objectives

The Reading Studio must achieve the following objectives:

1. Assess how effectively a student reads and understands an essay.
2. Measure reading speed without compromising comprehension.
3. Identify the exact areas in which the student struggles.
4. Test the student's ability to locate information, understand meaning, infer conclusions, analyse arguments, and remember important details.
5. Evaluate the student's question-answering accuracy.
6. Provide comprehensive performance analytics with charts, graphs, scores, percentages, and comparisons.
7. Generate personalised recommendations based on actual assessment results.
8. Provide a structured learning pathway that helps students improve progressively.
9. Motivate students to enrol in the complete Reading Studio package.
10. Make the platform suitable for students across different classes, countries, educational boards, and competitive examinations.

Do not expose competition-specific labels or examination names as the primary learning categories. The interface should focus on universal reading skills that are useful across academic and professional environments.

## 3. Design the Reading Assessment Algorithm

Develop a robust, modular assessment engine that evaluates students across the following dimensions.

### A. Reading Speed

Measure:

- Total passage word count.
- Time taken to complete the passage.
- Reading speed in words per minute (WPM).
- Time spent answering questions.
- Total assessment completion time.
- Reading speed across successive attempts.

Formula:

Reading Speed (WPM) = Number of Words Read ÷ Reading Time in Minutes.

If the application cannot reliably determine when the student actually finishes reading, use the recorded reading-session duration and clearly label it as an estimate.

Do not claim to measure eye movements, subvocalisation, or actual reading behaviour unless appropriate technology is implemented.

### B. Reading Comprehension

Measure the student's ability to:

- Identify the main idea.
- Understand the central theme.
- Recognise supporting arguments.
- Identify important facts and details.
- Distinguish facts from opinions.
- Understand relationships between ideas.
- Interpret the author's purpose and tone.
- Draw logical conclusions.
- Understand implied meanings.
- Identify assumptions and evidence.
- Interpret information presented in tables or short textual data.
- Recognise contradictions or inconsistencies.
- Understand cause-and-effect relationships.

Calculate separate scores for each skill rather than presenting only one overall comprehension percentage.

### C. Question-Answering Skills

Evaluate the student's ability to:

- Locate answers directly stated in the passage.
- Answer questions requiring interpretation.
- Answer inference-based questions.
- Identify the most appropriate conclusion.
- Eliminate incorrect options.
- Recognise misleading distractors.
- Understand questions containing negative wording.
- Answer questions requiring multiple pieces of evidence.
- Distinguish an option that sounds correct from one that is actually supported by the passage.

Track accuracy by question type and difficulty level.

For multiple-choice questions, record the selected answer, correct answer, response time, difficulty, skill category, and explanation.

Do not treat response time alone as evidence of weakness. Analyse it alongside accuracy and question difficulty.

### D. Vocabulary and Language Understanding

Assess:

- Meaning of words in context.
- Synonyms and antonyms.
- Contextual interpretation.
- Idioms and expressions where relevant.
- Understanding of unfamiliar terminology.
- Recognition of words that change the meaning of a sentence.

Distinguish vocabulary weaknesses from comprehension weaknesses wherever possible.

### E. Memory and Information Retention

Assess:

- Recall of important details.
- Retention of key arguments.
- Recognition of relationships between paragraphs.
- Ability to connect information from different parts of the passage.

Where appropriate, include delayed-recall exercises in separate sessions. Do not claim to measure long-term memory from a single immediate assessment.

### F. Critical Reading and Logical Reasoning

Evaluate:

- Strength of arguments.
- Identification of assumptions.
- Evidence-based conclusions.
- Logical consistency.
- Author bias and tone.
- Identification of unsupported claims.
- Ability to evaluate alternative interpretations.

Create a separate score for each applicable competency.

---

## 4. Build an Intelligent Passage and Question Engine

Create a reusable content engine that supports passages of different lengths, topics, difficulty levels, and vocabulary complexity.

Each assessment should contain:

1. A reading passage or essay.
2. A passage difficulty classification.
3. A calibrated word count.
4. A balanced set of questions.
5. An answer key.
6. Explanations for correct and incorrect answers.
7. Skill tags for each question.
8. Difficulty tags for each question.
9. Scoring rules.
10. Expected completion-time guidance.

Use multiple question formats where appropriate:

- Multiple-choice questions.
- True/false statements.
- Select-the-correct-conclusion questions.
- Match-the-following questions.
- Short-answer questions, where automated evaluation is reliable.

Use human-reviewed or otherwise validated answer keys for production content. If AI generates questions, verify that every question is answerable from the passage and that the answer key is defensible.

Avoid ambiguous questions, multiple unintended correct answers, and misleading scoring.

Support both pre-authored content and AI-assisted content generation.

---

## 5. Create a Comprehensive Performance Scoring System

Develop a transparent scoring model that produces an overall Reading Performance Score out of 100.

Suggested initial weighting:

| Assessment Dimension                    | Weight |
| --------------------------------------- | ------ |
| Reading comprehension                   | 30%    |
| Question-answering accuracy             | 25%    |
| Inference and critical reading          | 15%    |
| Reading efficiency                      | 15%    |
| Vocabulary and contextual understanding | 10%    |
| Information retention                   | 5%     |
| Total                                   | 100%   |

These weights must be configurable by administrators and validated against actual student performance data.

Important implementation rules:

- Do not award high reading-efficiency scores solely for fast reading.
- Apply a comprehension safeguard so that speed cannot compensate for poor understanding.
- If a dimension is not assessed, exclude it from the denominator and transparently recalculate the score.
- Clearly distinguish a provisional score from a validated benchmark.
- Record the assessment version and scoring-model version.
- Show students how the overall score was calculated.
- Avoid presenting arbitrary scores as scientifically validated measurements.

Use the overall score as a useful summary, not as a replacement for the individual skill scores.

---

## 6. Identify Weaknesses Using an Explainable Diagnostic Algorithm

This is one of the most important components.

Build an algorithm that analyses the student's answer history, accuracy, response times, difficulty levels, reading speed, and performance across question categories.

For every skill, calculate:

- Number of questions attempted.
- Number of correct answers.
- Accuracy percentage.
- Average response time.
- Accuracy on easy, medium, and difficult questions.
- Performance across recent assessments.
- Change from previous attempts.
- Confidence level of the diagnosis based on the amount of available evidence.

Use the following diagnostic approach:

**Step 1:** Categorise every question by the reading skill it measures.

**Step 2:** Calculate skill-specific accuracy and response-time statistics.

**Step 3:** Compare performance across difficulty levels.

**Step 4:** Identify repeated errors rather than diagnosing a weakness from one incorrect answer.

**Step 5:** Identify whether the student is struggling with speed, understanding, vocabulary, inference, memory, or question interpretation.

**Step 6:** Generate a clear explanation of each detected weakness.

**Step 7:** Recommend targeted practice activities.

**Step 8:** Reassess the same skill using new questions to measure genuine improvement.

Use configurable thresholds as initial rules, not universal scientific standards. For example:

- Accuracy below 50%: significant support may be needed.
- Accuracy from 50% to 69%: developing skill.
- Accuracy from 70% to 84%: progressing skill.
- Accuracy of 85% or above: strong performance on the assessed material.

Require a configurable minimum sample size before assigning a high-confidence diagnosis. If evidence is insufficient, display “More practice needed to assess this skill reliably.”

Do not confuse an unfamiliar or unusually difficult passage with a permanent student weakness.

---

## 7. Design a World-Class Analytics Dashboard

After completing an assessment, display a polished dashboard with interactive graphs and meaningful insights.

### Dashboard Section A: Overall Performance

Display:

- Overall Reading Performance Score.
- Reading speed in WPM.
- Comprehension percentage.
- Question-answering accuracy.
- Assessment duration.
- Number of correct and incorrect answers.
- Performance classification.
- Change from the previous comparable assessment.

### Dashboard Section B: Visual Analytics

Include the following charts where sufficient data is available:

1. **Radar chart:** Compare comprehension, inference, vocabulary, critical reading, memory, and efficiency.
2. **Bar chart:** Compare accuracy across skill categories.
3. **Line chart:** Track performance over time.
4. **Stacked bar chart:** Show correct and incorrect answers by difficulty.
5. **Scatter plot:** Compare response time and accuracy by question.
6. **Progress chart:** Display reading speed alongside comprehension.
7. **Heatmap:** Highlight strengths and weaknesses across skill categories and difficulty levels.

Each chart must have:

- A meaningful title.
- Clearly labelled axes where applicable.
- Tooltips or accessible data labels.
- A short plain-language interpretation.
- A link to relevant practice activities.

Avoid displaying empty charts, misleading trend lines, or comparisons with other students when sufficient comparable data is unavailable.

### Dashboard Section C: Strengths

Highlight the student's strongest demonstrated skills.

Example:\
“You correctly identified the main idea in 9 out of 10 questions. Your performance suggests that identifying central themes is currently one of your strengths.”

Generate these observations from actual assessment results, not fixed templates that ignore the student's performance.

### Dashboard Section D: Weakness Analysis

Show the three most important areas requiring improvement.

For each weakness, display:

- Skill name.
- Current score.
- Number of supporting questions.
- Examples of errors.
- Explanation of why the skill matters.
- Recommended corrective practice.
- Target score for the next assessment.

Example:\
“Your inference accuracy was 45% across 11 questions. You often selected answers that were plausible but not fully supported by the passage. Practise identifying the exact evidence that supports each conclusion.”

Use encouraging, non-judgmental language.

### Dashboard Section E: Personalised Action Plan

Generate a practical plan such as:

- Day 1: Practise identifying main ideas.
- Day 2: Work on inference-based questions.
- Day 3: Improve vocabulary through context.
- Day 4: Practise eliminating incorrect options.
- Day 5: Complete a timed reading assessment.
- Day 6: Review incorrect answers.
- Day 7: Take a fresh assessment and compare results.

Adapt the plan to the student's detected weaknesses, available study time, and performance history.

---

## 8. Develop the Reading Studio Learning Levels

Create a structured learning journey using neutral, progressive level names.

Students should see only the learning levels, not labels associated with specific competitive examinations.

Suggested structure:

- Level A: Reading Foundations
- Level B: Understanding Main Ideas
- Level C: Finding Important Information
- Level D: Vocabulary in Context
- Level E: Drawing Inferences
- Level F: Understanding Arguments
- Level G: Advanced Comprehension
- Level H: Reading Under Time Constraints
- Level I: Complex Passage Analysis
- Level J: Advanced Reading Mastery

Each level should include:

- Learning objectives.
- Guided lessons.
- Reading passages.
- Practice questions.
- Immediate feedback.
- Skill-specific analytics.
- Level completion criteria.
- A mastery reassessment.

Allow the administrator to add, rename, reorder, and configure levels without changing the core algorithm.

Unlock subsequent levels using demonstrated mastery rather than time spent on the platform alone.

Keep the system extensible so that additional levels can be introduced later.

---

## 9. Build a Premium Conversion and Monetisation System

The Reading Studio must encourage students to purchase packages through genuine educational value, personalised insights, and clear progress opportunities.

Do not use deceptive countdown timers, fake scarcity, fabricated results, or misleading performance comparisons.

### Free Assessment Experience

Allow students to:

- Complete an initial diagnostic assessment.
- Receive their overall score.
- View a basic reading-speed result.
- See a summary of their strongest and weakest skills.
- Understand the importance of improving their reading performance.

### Premium Analytics

Reserve appropriate advanced features for paid users, such as:

- Full skill-by-skill analysis.
- Detailed error explanations.
- Advanced interactive charts.
- Personalised improvement plans.
- Complete answer explanations.
- Historical progress tracking.
- Additional practice passages.
- Targeted weakness-remediation exercises.
- Advanced timed assessments.
- Detailed progress reports.

Show enough information in the free experience to provide real educational value.

Where advanced insights are locked, display a short preview explaining what the student would gain by upgrading. Do not fabricate hidden scores or imply that the system has detected weaknesses it has not actually assessed.

### Conversion Messages

Generate contextual messages based on the student's actual results.

Examples:

- “You have identified your reading strengths. Unlock your detailed analysis to understand which skills need the most attention.”
- “Improve your inference skills with targeted exercises designed around your assessment results.”
- “Track your progress across every level and see how your reading accuracy changes over time.”
- “Build better reading habits with a personalised practice plan and detailed answer explanations.”

Each call to action must lead to the appropriate package or checkout page.

Support:

- Free and paid plans.
- Monthly and annual subscriptions, if configured.
- One-time packages, if configured.
- Package comparison.
- Secure checkout integration.
- Payment verification.
- Subscription status.
- Entitlement checks.
- Upgrade and renewal flows.

Read the existing application's package and payment architecture before implementation. Reuse the existing payment gateway and subscription system rather than introducing a separate payment mechanism unnecessarily.

Never grant premium access merely because a browser request claims that payment succeeded.

---

## 10. Student Progress Tracking

Create a persistent student-performance history.

For each assessment, store:

- Student ID.
- Assessment ID.
- Date and time.
- Passage ID and difficulty.
- Question-level answers.
- Correctness and response time.
- Skill-specific scores.
- Reading speed.
- Overall score.
- Scoring-model version.
- Recommendations generated.
- Completion status.

Use this history to calculate:

- Improvement over the last five comparable assessments.
- Reading-speed changes.
- Comprehension changes.
- Reduction in recurring errors.
- Skills that have improved.
- Skills that remain weak.
- Readiness for the next learning level.

Compare similar assessments where possible. A harder passage should not automatically be interpreted as declining ability.

Provide students with a clear progress timeline and downloadable reports where supported.

---

## 11. Technical Architecture and Algorithm Requirements

Before writing code, inspect the existing web application's source code, technology stack, database, authentication system, UI framework, API conventions, and payment architecture.

Do not assume a specific programming language, framework, database, or deployment environment.

Design the Reading Studio using separate, maintainable modules:

1. Passage Management Engine.
2. Question Bank Engine.
3. Assessment Delivery Engine.
4. Reading-Time Tracking Module.
5. Answer Evaluation Engine.
6. Skill Classification Engine.
7. Performance Scoring Engine.
8. Weakness Diagnosis Engine.
9. Analytics and Visualisation Engine.
10. Recommendation Engine.
11. Learning-Level Management Engine.
12. Student Progress Tracking Module.
13. Subscription and Entitlement Module.
14. Administrative Reporting Dashboard.

Use server-side validation for assessment submissions, scores, access permissions, and premium entitlements.

Never expose correct answers, hidden scoring rules that facilitate cheating, private student records, payment secrets, or administrator-only data in public client-side code.

Prevent students from changing submitted answers or assessment results through browser manipulation.

Implement appropriate rate limits, secure authentication, access control, input validation, audit logging, and data-retention policies.

For AI-generated feedback, use structured outputs, evidence-based explanations, and validation rules. Do not let an AI model invent assessment scores or override the deterministic scoring engine.

If an external AI service is needed, keep API credentials on the server and make the service configurable.

---

## 12. User Interface and Experience

Create a premium, modern educational interface with international design standards.

The experience should feel like an intelligent learning laboratory rather than a traditional examination portal.

Include:

- A clean and uncluttered dashboard.
- Responsive desktop, tablet, and mobile layouts.
- A distraction-free reading interface.
- Readable typography and comfortable line spacing.
- A clear assessment timer where applicable.
- An accessible question-navigation panel.
- Immediate or end-of-assessment feedback according to the test mode.
- Interactive charts.
- Visual progress indicators.
- Helpful tooltips.
- Clear explanations of assessment results.
- Consistent design across free and premium features.

Use accessible colours, keyboard navigation, appropriate contrast, screen-reader support, and responsive chart alternatives.

Avoid unnecessary animations, excessive colours, distracting pop-ups, and cluttered dashboards.

The interface should help students understand three things immediately:

1. What am I doing well?
2. What should I improve?
3. What should I do next?

---

## 13. Administrative Dashboard

Build an administration interface to manage the complete Reading Studio.

Administrators should be able to:

- Create, edit, approve, archive, and categorise passages.
- Create and validate questions.
- Assign skills and difficulty levels.
- Configure scoring weights and diagnostic thresholds.
- Manage learning levels.
- Configure free and premium entitlements.
- Monitor assessment completion and dropout rates.
- Analyse aggregate student performance.
- Identify frequently misunderstood question types.
- Review AI-generated content before publication.
- Export authorised reports.
- Monitor subscription conversions and package engagement.

Aggregate analytics must protect individual student privacy.

Maintain audit logs for important changes to scoring configurations, content, and access permissions.

---

## 14. Testing and Quality Assurance

Before declaring the Reading Studio complete, test the following scenarios:

1. A student reads quickly but answers many questions incorrectly.
2. A student reads slowly but demonstrates excellent comprehension.
3. A student performs well on easy questions but struggles with difficult passages.
4. A student has strong vocabulary but weak inference skills.
5. A student answers correctly but takes unusually long on complex questions.
6. A student completes only part of an assessment.
7. A student repeats the same assessment.
8. A student improves across several comparable assessments.
9. A student has insufficient data for a reliable diagnosis.
10. A free user attempts to access premium reports.
11. A user attempts to manipulate scores or payment status.
12. A mobile user completes an assessment on a small screen.
13. A question is invalid, ambiguous, or incorrectly categorised.
14. An AI service fails or returns invalid structured output.
15. A student moves between levels or changes subscription status.

Create unit tests, integration tests, permission tests, and end-to-end tests.

Verify the correctness of every formula, scoring boundary, chart dataset, subscription check, and progress calculation.

---

## 15. Required Deliverables

Do not stop after producing a UI mockup or a high-level explanation.

Deliver the complete implementation required by the existing application, including:

1. Technical architecture.
2. Database schema and migrations.
3. Backend assessment algorithms.
4. API endpoints and validation.
5. Frontend Reading Studio interface.
6. Interactive analytics and graphs.
7. Weakness diagnosis and recommendation logic.
8. Student progress history.
9. Learning-level progression.
10. Free and premium access controls.
11. Integration with the existing payment system.
12. Administrative tools.
13. Test cases and automated tests.
14. Security and performance checks.
15. Setup, deployment, and maintenance documentation.

Use production-quality, maintainable code with clear naming conventions and appropriate error handling.

Do not replace working parts of the existing application unnecessarily. Do not introduce dummy analytics, hardcoded student scores, fake progress, or non-functional buttons.

If a required external service or credential is unavailable, implement a secure integration interface and clearly document what must be configured.

---

## 16. Implementation Workflow

Follow this sequence:

**Phase 1: Audit**\
Inspect the current codebase and report the existing architecture, reusable components, risks, and implementation plan.

**Phase 2: Algorithm Design**\
Define the scoring formulas, skill taxonomy, diagnostic thresholds, minimum evidence requirements, and mastery rules.

**Phase 3: Database and Backend**\
Implement assessment delivery, answer evaluation, score calculation, diagnostic analysis, and progress tracking.

**Phase 4: Frontend**\
Build the complete Reading Studio, assessment interface, analytics dashboard, and personalised action plan.

**Phase 5: Monetisation**\
Connect the free assessment experience, premium analytics, package comparison, and verified payment entitlements.

**Phase 6: Administration**\
Implement content management, configuration controls, and aggregate analytics.

**Phase 7: Testing**\
Run automated tests, validate the scoring model, check accessibility, and test security and payment restrictions.

**Phase 8: Deployment**\
Provide deployment instructions, required environment variables, database migration steps, rollback instructions, and a final verification checklist.

After the initial audit, identify any genuinely blocking questions. Otherwise, proceed using the existing application's conventions and document reasonable assumptions.

## Final Acceptance Criteria

The Reading Studio is complete only when a student can take an assessment, receive accurate results, understand their strengths and weaknesses, receive personalised practice recommendations, track progress across assessments, and access premium features through a properly verified purchase.

The final product must combine educational usefulness, explainable assessment algorithms, meaningful visual analytics, excellent user experience, and sustainable monetisation.

**Build a complete, scalable, student-focused Reading Studio that helps learners become faster, more accurate, and more confident readers while making the value of the premium package clear through real assessment evidence.**

## My recommendation for your web application

To make this feature genuinely effective, focus on three elements that distinguish it from an ordinary reading test.

[Orbit AI — 24×7 AI Tutor & Exam Prep App | Inforida](https://images.openai.com/static-rsc-4/Cdw4PborNvpQos5LiBr4NwUxlCDZT5k0pBvXn1zWHdkU8i4mztILWDu1oHt2jaMibwlMHAaLohQPXKD_E-Y2QFC4iU8xeYtgmChXv8uj8qmZit5o0lZTAbbgTCBa60k6yifDvjhe5rOfTQ6h5gkcFeUB8J9Aky_-7-na8bFPTfY?purpose=inline)

1\. Diagnose the reason behind every weakness

A student may understand the essay but fail to identify the correct option. Another may read quickly but miss the author's main argument. Your algorithm should distinguish these patterns and prescribe different exercises.

[Zinc Learning Lab at Johanna Reed blog](https://images.openai.com/static-rsc-4/oFmw49rofDKOLCyqVRVp8Uz2zYew18w5vA4Lj-KUvQiEa5UXbrLs2foaSrH8ZQK_ZlBiZvBec90DZX0YO9_mcS9uG3KLIJStcg_PvY4_jEtG42FmcMNuCt5leWUVfn8rxgsw_hHHI03Br0jp5oekr7OLxqvsHLo1VS-rIFVBW6c?purpose=inline)

2\. Make improvement measurable

Show the student's reading speed, comprehension accuracy, inference score, and progress over time. This gives students a concrete reason to return and continue practising.

[EduMind AI - Personalized Learning Platform](https://images.openai.com/static-rsc-4/6fMaYUtIdsDM14QRVw6IR8yf_G3EFgSKRpRwmQleil3XyydIYKtjPDWJStE_jtWvgSemUBFn-ZNjh7yRU5r6uJ5Fs7rg1I7eA_NqXOvYIyX9cV-6CAtu8WtaM5508_hdGTl3suNXbxyvU1k_jNblAzQbrsVlmKTE-LxOqzRcZb8?purpose=inline)

3\. Sell the solution, not just the report

Let free users experience a useful diagnostic assessment. Position the paid package around targeted exercises, complete explanations, personalised study plans, advanced analytics, and progress tracking.

One important technical point: Reading speed should never be the main success metric by itself. The strongest Reading Studio will measure the relationship between speed, comprehension, accuracy, and question difficulty.

That approach will help students improve their ability to understand essays and answer unfamiliar questions across a wide range of academic assessments.