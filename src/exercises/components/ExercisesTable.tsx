import {type ColumnDef } from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FiEdit} from "react-icons/fi";
import { toast } from "sonner"
import type {Exercise} from "@/types/exercise";
import {MuscleGroup} from "@/types/muscle-group";

interface ExercisesTableProps {
  setSelectedExerciseId: (exerciseId: string) => void;
  setOpenFormDrawer: (open: boolean) => void;
  exercises: Exercise[];
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export const ExercisesTable = (
  {
    setSelectedExerciseId,
    setOpenFormDrawer,
    exercises,
    isLoading,
    isError,
    page,
    setPage,
    totalPages,
  }: ExercisesTableProps
) => {

  const columns: ColumnDef<Exercise>[] = [
    { accessorKey: "name", header: "Título" },
    {
      accessorKey: "muscleGroups",
      header: "Músculo principal",
      cell: ({ row }) => {
        const muscleGroups: MuscleGroup[] = row.getValue("muscleGroups");
        return muscleGroups[0];
      },
    },
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
      {isLoading ? (
        <div className="w-full h-full">
          <div className="flex flex-col space-y-4 animate-pulse">
            <div className="grid grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={`header-${i}`} className="h-8 bg-gray-200 rounded" />
              ))}
            </div>
            {[...Array(5)].map((_, rowIdx) => (
              <div
                key={`row-${rowIdx}`}
                className="grid grid-cols-5 gap-4"
              >
                {[...Array(5)].map((_, colIdx) => (
                  <div key={colIdx} className="h-8 bg-gray-100 rounded" />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center w-full h-full">
          Ocurrió un error cargando los datos.
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={exercises}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}