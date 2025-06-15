import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";
import type {Equipment} from "@/exercises/types/equipment.ts";
import type {Difficulty} from "@/exercises/types/difficulty.ts";

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
  { value: "Barbell", label: "Barra" },
  { value: "Body Weight", label: "Peso Corporal" },
  { value: "Other", label: "Otro" },
];

export const AVAILABILITIES = [
  { value: true, label: "Activo" },
  { value: false, label: "Inactivo" },
]
