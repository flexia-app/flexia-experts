import type {ExerciseType} from "@/exercises/types/exercise-type.ts";
import type {LogType} from "@/exercises/types/log-type.ts";
import type {Difficulty} from "@/exercises/types/difficulty.ts";
import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";
import type {Equipment} from "@/exercises/types/equipment.ts";
import type {CreateExercise, Exercise} from "../types/exercise";
import type {UseFormReset} from "react-hook-form";
import type {MutableRefObject} from "react";

export type ExerciseFormData = {
  id?: string;
  title: string;
  description: string;
  exerciseType: ExerciseType;
  logType: LogType;
  difficulty: Difficulty;
  muscles: MuscleGroup[];
  equipments: Equipment[];
  image: File;
  active: "true" | "false";
}

export function shouldAppend<T>(
  formData: FormData,
  key: string,
  newValue: T,
  oldValue: T
) {
  if (newValue !== oldValue) {
    formData.append(key, String(newValue));
  }
}

export function shouldAppendArray(
  formData: FormData,
  key: string,
  newArray: string[],
  oldArray: string[]
) {
  const changed =
    newArray.length !== oldArray.length ||
    newArray.some(val => !oldArray.includes(val));
  if (changed) {
    newArray.forEach(val => formData.append(key, val));
  }
}

export function buildExerciseObject(values: ExerciseFormData): CreateExercise {
  return {
    file: values.image,
    name: values.title,
    description: values.description,
    exerciseType: values.exerciseType,
    logType: values.logType,
    difficulty: values.difficulty,
    equipments: values.equipments,
    muscleGroups: values.muscles,
    active: true
  };
}

export function buildUpdateObject(
  values: ExerciseFormData,
  original: Exercise
): Partial<CreateExercise> {
  const updated: Partial<CreateExercise> = {};

  if (values.active !== String(original.active)) updated.active = values.active === 'true';
  if (values.title !== original.name) updated.name = values.title;
  if (values.description !== original.description) updated.description = values.description;
  if (values.exerciseType !== original.exerciseType) updated.exerciseType = values.exerciseType;
  if (values.logType !== original.logType) updated.logType = values.logType;
  if (values.difficulty !== original.difficulty) updated.difficulty = values.difficulty;
  if (values.image instanceof File) updated.file = values.image;

  const hasArrayChanged = (a: string[], b: string[]) =>
    a.length !== b.length || a.some((val) => !b.includes(val));

  if (hasArrayChanged(values.equipments, original.equipments)) {
    updated.equipments = values.equipments;
  }

  if (hasArrayChanged(values.muscles, original.muscleGroups)) {
    updated.muscleGroups = values.muscles;
  }

  return updated;
}

export function resetFormValues(
  exercise: Exercise | undefined,
  reset: UseFormReset<ExerciseFormData>,
  setPreviewImage: (url: string | null) => void,
  originalValuesRef: MutableRefObject<Exercise | null>
) {
  if (exercise) {
    originalValuesRef.current = exercise;
    reset({
      id: exercise.id,
      title: exercise.name,
      description: exercise.description,
      difficulty: exercise.difficulty,
      muscles: exercise.muscleGroups,
      equipments: exercise.equipments,
      image: undefined,
      active: String(exercise.active) as "true" | "false",
      exerciseType: exercise.exerciseType,
      logType: exercise.logType,
    });
    setPreviewImage(exercise.mediaUrl || null);
  } else {
    originalValuesRef.current = null;
    reset({
      id: "",
      title: "",
      description: "",
      difficulty: "Beginner",
      muscles: [],
      equipments: [],
      image: undefined,
      active: "true",
      exerciseType: undefined,
      logType: undefined,
    });
    setPreviewImage(null);
  }
}
