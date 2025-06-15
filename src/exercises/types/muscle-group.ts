export const MuscleGroups = {
  Abs: 'Abs',
  Back: 'Back',
  Biceps: 'Biceps',
  Cardio: 'Cardio',
  Chest: 'Chest',
  Forearms: 'Forearms',
  Glutes: 'Glutes',
  LowerLegs: 'Lower Legs',
  OtherMisc: 'Other/Misc',
  Shoulders: 'Shoulders',
  Triceps: 'Triceps',
  UpperLegs: 'Upper Legs',
} as const;

export type MuscleGroup = typeof MuscleGroups[keyof typeof MuscleGroups];
