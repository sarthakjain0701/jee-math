/**
 * Mock/sample data for topics, questions, and approaches.
 * Used in Phase 2-3 to populate the UI before Firestore is wired up.
 */

import type { Topic } from '@/types/topic';
import type { Question } from '@/types/question';
import type { Approach } from '@/types/approach';

// ===== TOPICS =====

export const mockTopics: Topic[] = [
  {
    id: 'functions',
    name: 'Functions',
    subject: 'Mathematics',
    subtopics: [
      'Domain and Range',
      'Composition of Functions',
      'Inverse Functions',
      'Graphical Transformations',
      'Functional Equations',
      'Even and Odd Functions',
      'Periodic Functions',
      'Monotonicity',
    ],
    description:
      'Study of functions including domain, range, composition, inverses, transformations, and properties like monotonicity and periodicity. A cornerstone of JEE Advanced Mathematics.',
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-06-01'),
  },
  {
    id: 'probability',
    name: 'Probability',
    subject: 'Mathematics',
    subtopics: [
      'Conditional Probability',
      "Bayes' Theorem",
      'Random Variables',
      'Binomial Distribution',
      'Probability Distributions',
      'Independent Events',
    ],
    description:
      'Probability theory covering conditional probability, Bayes\' theorem, distributions, and random variables. Essential for JEE Advanced problem-solving.',
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-06-01'),
  },
  {
    id: 'coordinate-geometry',
    name: 'Coordinate Geometry',
    subject: 'Mathematics',
    subtopics: [
      'Straight Lines',
      'Circles',
      'Parabola',
      'Ellipse',
      'Hyperbola',
      'Pair of Straight Lines',
      'Locus Problems',
      'Tangent and Normal',
      'Chord of Contact',
      'Director Circle',
    ],
    description:
      'Analytic geometry covering conic sections, straight lines, circles, and their properties. One of the most heavily tested topics in JEE Advanced.',
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-06-01'),
  },
];

// ===== QUESTIONS =====

export const mockQuestions: Question[] = [
  // Functions questions
  {
    id: 'func-q1',
    topicId: 'functions',
    subtopicId: 'Domain and Range',
    difficulty: 'medium',
    statement:
      'Find the domain of f(x) = √(log₂(log₃(log₅(x² - 1)))). Express your answer in interval notation.',
    approaches: ['func-q1-a1', 'func-q1-a2', 'func-q1-a3'],
    commonMistakes: [
      'Forgetting that the argument of a logarithm must be strictly positive',
      'Not considering that √x requires x ≥ 0, but log needs x > 0',
      'Incorrectly applying the chain: each nested log must have its argument > 0, and the outermost must be ≥ 0 for the square root',
    ],
    commonTraps: [
      'The problem uses three nested logarithms with different bases — easy to lose track of which inequality applies where',
      'x² - 1 > 0 gives |x| > 1, but the full chain of inequalities further restricts the domain',
    ],
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-06-01'),
  },
  {
    id: 'func-q2',
    topicId: 'functions',
    subtopicId: 'Composition of Functions',
    difficulty: 'hard',
    statement:
      'Let f(x) = x² + 1 and g(x) = √(x - 1). Find the domain of (g ∘ f ∘ g)(x) and simplify the expression.',
    approaches: ['func-q2-a1', 'func-q2-a2'],
    commonMistakes: [
      'Not checking the domain at each composition step',
      'Assuming the domain of the composition is the intersection of individual domains',
    ],
    commonTraps: [
      'g requires x ≥ 1, but after composing with f, the inner function always returns values ≥ 1, so the domain restriction comes from the outermost g',
    ],
    createdAt: new Date('2026-02-15'),
    updatedAt: new Date('2026-06-01'),
  },
  // Probability questions
  {
    id: 'prob-q1',
    topicId: 'probability',
    subtopicId: 'Conditional Probability',
    difficulty: 'medium',
    statement:
      'A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Given that the first ball drawn is red, find the probability that both balls are red.',
    approaches: ['prob-q1-a1', 'prob-q1-a2'],
    commonMistakes: [
      'Using probability with replacement instead of without replacement',
      'Confusing P(A∩B) with P(B|A)',
      'Not updating the total count after first draw',
    ],
    commonTraps: [
      'The "without replacement" condition is crucial — if you miss it, you get the wrong answer',
    ],
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-06-01'),
  },
  {
    id: 'prob-q2',
    topicId: 'probability',
    subtopicId: "Bayes' Theorem",
    difficulty: 'hard',
    statement:
      "In a factory, machines A, B, and C produce 30%, 45%, and 25% of total output respectively. The defect rates are 2%, 3%, and 5%. A randomly selected item is found defective. Find the probability it was produced by machine C.",
    approaches: ['prob-q2-a1', 'prob-q2-a2'],
    commonMistakes: [
      'Forgetting to multiply prior probability with likelihood',
      'Not normalizing by total probability of defect',
    ],
    commonTraps: [
      'Machine C has the highest defect rate but lowest production share — the answer isn\'t simply the highest defect rate',
    ],
    createdAt: new Date('2026-03-15'),
    updatedAt: new Date('2026-06-01'),
  },
  // Coordinate Geometry questions
  {
    id: 'cg-q1',
    topicId: 'coordinate-geometry',
    subtopicId: 'Parabola',
    difficulty: 'hard',
    statement:
      'Find the equation of the normal to the parabola y² = 12x that makes an angle of 45° with the x-axis.',
    approaches: ['cg-q1-a1', 'cg-q1-a2', 'cg-q1-a3'],
    commonMistakes: [
      'Confusing the slope of tangent with slope of normal',
      'Using the wrong parametric form for y² = 4ax (here a = 3, not 12)',
      'Sign errors when computing the normal equation from the tangent slope',
    ],
    commonTraps: [
      'There can be more than one normal at 45° — check for multiple solutions',
      'The standard form is y² = 4ax, so 4a = 12 means a = 3, not a = 12',
    ],
    createdAt: new Date('2026-04-01'),
    updatedAt: new Date('2026-06-01'),
  },
  {
    id: 'cg-q2',
    topicId: 'coordinate-geometry',
    subtopicId: 'Circles',
    difficulty: 'advanced',
    statement:
      'Two circles x² + y² = 9 and x² + y² - 6x - 8y + 9 = 0 intersect at points A and B. Find the equation of the circle passing through A, B, and the point (1, 1).',
    approaches: ['cg-q2-a1', 'cg-q2-a2'],
    commonMistakes: [
      'Not using the family of circles through the intersection points',
      'Incorrectly computing the radical axis',
    ],
    commonTraps: [
      'The family of circles S₁ + λS₂ = 0 includes a degenerate case (the radical axis) when λ = -1',
    ],
    createdAt: new Date('2026-04-15'),
    updatedAt: new Date('2026-06-01'),
  },
];

// ===== APPROACHES =====

export const mockApproaches: Approach[] = [
  // func-q1 approaches
  {
    id: 'func-q1-a1',
    questionId: 'func-q1',
    label: 'Inside-Out Method',
    content:
      'Work from the innermost function outward:\n\n1. **Innermost:** x² - 1 > 0 ⟹ |x| > 1\n2. **Second layer:** log₅(x² - 1) > 0 ⟹ x² - 1 > 5⁰ = 1 ⟹ x² > 2 ⟹ |x| > √2\n3. **Third layer:** log₃(log₅(x² - 1)) > 0 ⟹ log₅(x² - 1) > 1 ⟹ x² - 1 > 5 ⟹ |x| > √6\n4. **Outermost (√):** log₂(log₃(log₅(x² - 1))) ≥ 0 ⟹ log₃(log₅(x² - 1)) ≥ 1 ⟹ log₅(x² - 1) ≥ 3 ⟹ x² - 1 ≥ 125 ⟹ |x| ≥ √126\n\n**Domain:** (-∞, -√126] ∪ [√126, ∞)',
    status: 'official',
    submittedBy: 'admin',
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-01'),
  },
  {
    id: 'func-q1-a2',
    questionId: 'func-q1',
    label: 'Substitution Method',
    content:
      'Let t₁ = x² - 1, t₂ = log₅(t₁), t₃ = log₃(t₂), t₄ = log₂(t₃).\n\nFor f(x) = √t₄ to be defined:\n- t₄ ≥ 0 ⟹ t₃ ≥ 1\n- t₃ ≥ 1 ⟹ t₂ ≥ 3\n- t₂ ≥ 3 ⟹ t₁ ≥ 5³ = 125\n- t₁ ≥ 125 ⟹ x² ≥ 126\n\n**Domain:** x ∈ (-∞, -√126] ∪ [√126, ∞)',
    status: 'official',
    submittedBy: 'admin',
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-01'),
  },
  {
    id: 'func-q1-a3',
    questionId: 'func-q1',
    label: 'Smartest Method — Direct Chain',
    content:
      '**Key insight:** For √(log_a(x)), we need log_a(x) ≥ 0, which means x ≥ 1.\n\nApplying this recursively from outside in:\n- log₂(?) ≥ 0 ⟹ ? ≥ 1\n- So log₃(?) ≥ 1 ⟹ ? ≥ 3\n- So log₅(?) ≥ 3 ⟹ ? ≥ 125\n- So x² - 1 ≥ 125 ⟹ x² ≥ 126\n\nDone in 4 lines. **Domain:** |x| ≥ √126.',
    status: 'official',
    submittedBy: 'admin',
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-01'),
  },
  // prob-q1 approaches
  {
    id: 'prob-q1-a1',
    questionId: 'prob-q1',
    label: 'Direct Conditional Probability',
    content:
      'Given: First ball is red.\n\nAfter drawing one red ball:\n- Remaining: 4 red, 3 blue (total 7)\n- P(second is red | first is red) = 4/7\n\n**Answer: 4/7**',
    status: 'official',
    submittedBy: 'admin',
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-03-01'),
  },
  {
    id: 'prob-q1-a2',
    questionId: 'prob-q1',
    label: 'Using P(A∩B)/P(A)',
    content:
      'P(both red) = (5/8)(4/7) = 20/56 = 5/14\nP(first red) = 5/8\n\nP(both red | first red) = P(both red) / P(first red) = (5/14) / (5/8) = (5/14) × (8/5) = 8/14 = **4/7**',
    status: 'official',
    submittedBy: 'admin',
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-03-01'),
  },
];

// ===== HELPER FUNCTIONS =====

export function getTopicById(id: string): Topic | undefined {
  return mockTopics.find((t) => t.id === id);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return mockQuestions.filter((q) => q.topicId === topicId);
}

export function getQuestionById(id: string): Question | undefined {
  return mockQuestions.find((q) => q.id === id);
}

export function getApproachById(id: string): Approach | undefined {
  return mockApproaches.find((a) => a.id === id);
}

export function getApproachesByQuestion(questionId: string): Approach[] {
  return mockApproaches.filter((a) => a.questionId === questionId);
}
