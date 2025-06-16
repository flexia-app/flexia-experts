import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";
import type {Equipment} from "@/exercises/types/equipment.ts";
import type {Difficulty} from "@/exercises/types/difficulty.ts";
import type {ExerciseType} from "@/exercises/types/exercise-type.ts";
import type {LogType} from "@/exercises/types/log-type.ts";

export const MUSCLES: { value: MuscleGroup; label: string }[] = [
  { value: 'Abs', label: 'Abdominales' },
  { value: 'Back', label: 'Espalda' },
  { value: 'Biceps', label: 'Bíceps' },
  { value: 'Cardio', label: 'Cardio' },
  { value: 'Chest', label: 'Pectorales' },
  { value: 'Forearms', label: 'Antebrazos' },
  { value: 'Glutes', label: 'Glúteos' },
  { value: 'Lower Legs', label: 'Piernas Inferiores' },
  { value: 'Upper Legs', label: 'Piernas Superiores' },
  { value: 'Shoulders', label: 'Hombros' },
  { value: 'Triceps', label: 'Tríceps' },
  { value: 'Other/Misc', label: 'Otros/Misceláneos' },
];

export const DIFFICULTIES: { value: Difficulty; label: string }[] = [
  { value: "Beginner", label: "Principiante" },
  { value: "Intermediate", label: "Intermedio" },
  { value: "Advanced", label: "Avanzado" },
]

export const EQUIPMENTS: { value: Equipment; label: string }[] = [
  { value: "Dumbbell", label: "Mancuernas" },
  { value: "Kettlebell", label: "Kettlebell" },
  { value: "Cardio Machine", label: "Máquina de Cardio" },
  { value: "Strength Machine", label: "Máquina de Fuerza" },
  { value: "Bench", label: "Banco" },
  { value: "Pullup Bar", label: "Barra de Dominadas" },
  { value: "Cable Machine", label: "Máquina de Poleas" },
  { value: "Weight Plate", label: "Disco de Peso" },
  { value: "EZ Curl Bar", label: "Barra Z" },
  { value: "Foam Roll", label: "Rulo de Espuma" },
  { value: "Exercise Ball", label: "Pelota de Ejercicio" },
  { value: "Bands", label: "Bandas" },
  { value: "Jumping Rope", label: "Cuerda de salto" },
  { value: "Barbell", label: "Barra" },
  { value: "Body Weight", label: "Peso Corporal" },
  { value: "Other", label: "Otro" },
];

export const EXERCISE_TYPES: { value: ExerciseType; label: string }[] = [
  { value: "Dynamic", label: "Dinámico" },
  { value: "Explosive", label: "Explosivo" },
  { value: "Mobility", label: "Movilidad" },
  { value: "Olympic", label: "Olímpico" },
  { value: "Power", label: "Fuerza" },
  { value: "Strength", label: "Fortaleza" },
  { value: "Stretching", label: "Estiramientos" },
  { value: "Yoga", label: "Yoga" },
]

export const LOG_TYPES: { value: LogType; label: string }[] = [
  { value: "Cardio", label: "Cardio" },
  { value: "Duration", label: "Duración" },
  { value: "Reps", label: "Repetición" },
  { value: "Reps And Duration", label: "Repeticiones y duración" },
  { value: "Weight And Reps", label: "Peso y Repeticiones" },
]

export const AVAILABILITIES = [
  { label: "Activo", value: "true" },
  { label: "Inactivo", value: "false" },
];
