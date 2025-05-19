import {type ColumnDef } from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiEdit} from "react-icons/fi";
import { toast } from "sonner"

type ExerciseTableItem = {
  id: string;
  title: string;
  mainMuscle: string;
  difficulty: string;
  active: boolean;
}

const exercises : ExerciseTableItem[] = [
  {
    id: "1",
    title: "Flexiones",
    mainMuscle: "Pectorales",
    difficulty: "Principiante",
    active: true,
  },
  {
    id: "2",
    title: "Sentadillas",
    mainMuscle: "Piernas",
    difficulty: "Media",
    active: true,
  },
  {
    id: "3",
    title: "Dominadas",
    mainMuscle: "Espalda",
    difficulty: "Difícil",
    active: false,
  }
]

export const ExercisesTable = (
  {
    setSelectedExerciseId,
    setOpenFormDrawer
  }:
  {
    setSelectedExerciseId: (exerciseId: string) => void;
    setOpenFormDrawer: (open: boolean) => void;
  }
) => {

  const columns: ColumnDef<ExerciseTableItem>[] = [
    { accessorKey: "title", header: "Título" },
    { accessorKey: "mainMuscle", header: "Músculo principal" },
    { accessorKey: "difficulty", header: "Dificultad" },
    {
      accessorKey: "active",
      header: "Visualización",
      cell: ({ row }) => {
        const active = row.getValue("active");
        return active ? "Activo" : "Inactivo";
      },
    },
    {
      header: "Acciones",
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => {
              if (row.original.id) {
                setSelectedExerciseId(row.original.id);
                setOpenFormDrawer(true);
              } else {
                toast.error("Error recuperando el ejercicio");
              }
            }}
          >
            <FiEdit />
          </Button>
        );
      },
    }
  ];

  return (
    <div className="flex flex-col gap-2 justify-between h-[80vh]">
      <DataTable
        columns={columns}
        data={exercises}
      />
    </div>
  )
}