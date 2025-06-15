import api from '../api';
import type {SearchExercisesResponse} from "@/types/exercise";

export const getAllExercises = async () => {
  const response = await api.get(`/exercises`);
  return response.data;
}

export const searchExercisesByName = async (
  name?: string,
  limit: number = 20,
  page: number = 1,
): Promise<SearchExercisesResponse> => {
  const params = new URLSearchParams();

  if (name) params.append('name', name);
  params.append('limit', limit.toString());
  params.append('page', page.toString());

  const response = await api.get(`/exercises/search/by/?${params.toString()}`);
  return response.data;
};
