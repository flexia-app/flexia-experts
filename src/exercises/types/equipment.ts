export const Equipments  = {
  Dumbbell: 'Dumbbell',
  Kettlebell: 'Kettlebell',
  CardioMachine: 'Cardio Machine',
  StrengthMachine: 'Strength Machine',
  Bench: 'Bench',
  PullupBar: 'Pullup Bar',
  CableMachine: 'Cable Machine',
  WeightPlate: 'Weight Plate',
  EZCurlBar: 'EZ Curl Bar',
  FoamRoll: 'Foam Roll',
  ExerciseBall: 'Exercise Ball',
  JumpingRope: 'Jumping Rope',
  Bands: 'Bands',
  Barbell: 'Barbell',
  BodyWeight: 'Body Weight',
  Other: 'Other',
} as const;

export type Equipment = typeof Equipments[keyof typeof Equipments];