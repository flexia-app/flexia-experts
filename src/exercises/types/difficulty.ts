export const Difficulties = {
  Advanced: 'Advanced',
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
} as const;

export type Difficulty = typeof Difficulties[keyof typeof Difficulties];