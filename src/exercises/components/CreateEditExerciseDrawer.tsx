import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {IoMdClose} from "react-icons/io";
import {ExerciseForm, type ExerciseFormData} from "@/exercises/components/ui/ExerciseForm.tsx";
import {useState} from "react";
import {toast} from "sonner";

export const CreateEditExerciseDrawer = (
  {
    open,
    setOpen,
    selectedExerciseId
  }: {
    open: boolean,
    setOpen: (open: boolean) => void,
    selectedExerciseId?: string,
  }
) => {

  const [newExercise] = useState<ExerciseFormData>({
    title: "",
    instructions: "",
    muscles: [],
    equipments: [],
    image: "",
  });

  function createExercise() {
    // TODO
    toast.success("Ejercicio creado con éxito");
    setOpen(false);
  }

  function editExercise() {
    // TODO
    toast.success("Ejercicio editado con éxito");
    setOpen(false);
  }

  function deleteExercise() {
    // TODO
    toast.success("Ejercicio eliminado con éxito");
    setOpen(false);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      direction="right"
    >
      <DrawerContent>
        <DrawerHeader>
          <div className="flex w-full justify-between items-center">
            <DrawerTitle className="text-[#64748B] font-bold">
              {selectedExerciseId ? "Editando ejercicio" : "Crear nuevo ejercicio"}
            </DrawerTitle>
            <button className="hover:cursor-pointer" onClick={()=>setOpen(false)}>
              <IoMdClose size={20} />
            </button>
          </div>
        </DrawerHeader>

        <ExerciseForm
          defaultValues={newExercise}
          selectedExerciseId={selectedExerciseId}
        />

        <DrawerFooter>
          <Button
            className="mt-2"
            onClick={selectedExerciseId ? editExercise : createExercise}
          >
            {selectedExerciseId ? "Guardar cambios" : "Crear ejercicio"}
          </Button>
          {selectedExerciseId && (
            <Button
              variant="destructive"
              onClick={deleteExercise}
            >
              Eliminar ejercicio
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}