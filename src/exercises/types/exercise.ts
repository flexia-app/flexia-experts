import type { Difficulty } from "./difficulty";
import type { Equipment } from "./equipment";
import type { ExerciseType } from "./exercise-type";
import type { LogType } from "./log-type";
import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";

export interface Exercise {
  id: string;
  name: string;
  exerciseType: ExerciseType;
  logType: LogType;
  description: string;
  difficulty: Difficulty;
  equipments: Equipment[];
  muscleGroups: MuscleGroup[];
  mediaUrl: string;
  active: boolean;
}

export interface CreateExercise {
  file: File;
  name: string;
  description: string;
  exerciseType: ExerciseType;
  logType: LogType;
  difficulty: Difficulty;
  equipments: Equipment[];
  muscleGroups: MuscleGroup[];
  active: boolean;
}

export interface SearchExercisesResponse {
  data: Exercise[];
  total: number;
  pages: number;
  currentPage: number;
  limit: number;
}
