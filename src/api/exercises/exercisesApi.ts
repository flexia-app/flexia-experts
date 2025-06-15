import api from '../api';
import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";
import type {Difficulty} from "@/exercises/types/difficulty.ts";
import type {Equipment} from "@/exercises/types/equipment.ts";
import type {SearchExercisesResponse} from "@/exercises/types/exercise.ts";

export const getAllExercises = async () => {
  const response = await api.get(`/exercises`);
  return response.data;
}

export const searchExercisesByName = async (
  name?: string,
  limit: number = 10,
  page: number = 1,
): Promise<SearchExercisesResponse> => {
  const params = new URLSearchParams();

  if (name) params.append('name', name);
  params.append('limit', limit.toString());
  params.append('page', page.toString());

  const response = await api.get(`/exercises/search/by/?${params.toString()}`);
  return response.data;
};

export const filterExercisesByProps = async (
  muscleGroup?: MuscleGroup,
  difficulty?: Difficulty,
  equipment?: Equipment,
  limit: number = 10,
  page: number = 1,
): Promise<SearchExercisesResponse> => {
  const params = new URLSearchParams();

  if (muscleGroup) params.append('muscleGroup', muscleGroup);
  if (difficulty) params.append('difficulty', difficulty);
  if (equipment) params.append('equipment', equipment);
  params.append('limit', limit.toString());
  params.append('page', page.toString());

  const response = await api.get(`/exercises/search/filters/?${params.toString()}`);
  return response.data;
};


export const createExercise = async (exercise: FormData) => {
  const response = await api.post(`/exercises`, exercise, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
