export const ExerciseTypes = {
  Dynamic: 'Dynamic',
  Explosive: 'Explosive',
  Mobility: 'Mobility',
  Olympic: 'Olympic',
  Power: 'Power',
  Strength: 'Strength',
  Stretching: 'Stretching',
  Yoga: 'Yoga',
} as const;

export type ExerciseType = typeof ExerciseTypes[keyof typeof ExerciseTypes];
