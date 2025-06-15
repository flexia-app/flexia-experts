export const LogTypes = {
  Cardio: 'Cardio',
  Duration: 'Duration',
  Reps: 'Reps',
  RepsAndDuration: 'Reps And Duration',
  WeightAndReps: 'Weight And Reps',
} as const;

export type LogType = typeof LogTypes[keyof typeof LogTypes];
