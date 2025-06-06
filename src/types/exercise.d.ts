export enum Equipment {
  BodyWeight = 'bodyWeight',
  Bands = 'bands',
  Barbell = 'barbell',
  Bench = 'bench',
  Dumbbell = 'dumbbell',
  ExerciseBall = 'exerciseBall',
  EzCurlBar = 'ezCurlBar',
  FoamRoll = 'foamRoll',
  KettleBell = 'kettleBell',
  CardioMachine = 'cardioMachine',
  PullupBar = 'pullupBar',
  WeightPlate = 'weightPlate',
}

export enum MuscleGroup {
  Abs = 'abs',
  Back = 'back',
  Cardio = 'cardio',
  Chest = 'chest',
  ForeArms = 'foreArms',
  Glutes = 'glutes',
  Shoulders = 'shoulders',
  Triceps = 'triceps',
  UpperLegs = 'upperLegs',
  LowerLegs = 'lowerLegs',
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  equipments: Equipment[];
  muscleGroups: MuscleGroup[];
  mediaUrl: string;
  active: boolean;
}
