import { Equipment } from '@/types/equipment';
import { MuscleGroup } from "@/types/muscle-group";
import { ExerciseType } from "@/types/exercise-type";
import { LogType } from "@/types/log-type";
import { Difficulty } from "@/types/difficulty";

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
  file: string;
  name: string;
  description: string;
  exerciseType: ExerciseType;
  logType: LogType;
  difficulty: Difficulty;
  equipments: Equipment[];
  muscleGroups: MuscleGroup[];
}

export interface SearchExercisesResponse {
  data: Exercise[];
  total: number;
  pages: number;
  currentPage: number;
  limit: number;
}
