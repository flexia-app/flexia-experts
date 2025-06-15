import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent, DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {IoMdClose} from "react-icons/io";
import {ExerciseForm, type ExerciseFormData} from "@/exercises/components/ui/ExerciseForm.tsx";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createExercise} from "@/api/exercises/exercisesApi.ts";

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

  const {
    register,
    setValue,
    control,
    getValues
  } = useForm<ExerciseFormData>({
    defaultValues: {
      id: selectedExerciseId,
      title: "",
      description: "",
      difficulty: "Beginner",
      muscles: [],
      equipments: [],
      image: undefined,
      active: true,
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newExercise: FormData) => createExercise(newExercise),
    onSuccess: () => {
      toast.success("Ejercicio creado con éxito");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ['exercises'] });
    },
    onError: () => {
      toast.error("Error al crear el ejercicio");
    },
  });

  function handleCreateExercise() {
    const values = getValues();

    const formData = new FormData();
    formData.append("file", values.image);
    formData.append("name", values.title);
    formData.append("description", values.description);
    formData.append("exerciseType", values.exerciseType);
    formData.append("logType", values.logType);
    formData.append("difficulty", values.difficulty);

    values.equipments.forEach((eq: string) => {
      formData.append("equipments", eq);
    });

    values.muscles.forEach((muscle: string) => {
      formData.append("muscleGroups", muscle);
    });

    mutate(formData);
  }

  function handleEditExercise() {
    // TODO
    toast.success("Ejercicio editado con éxito");
    setOpen(false);
  }

  function handleDeleteExercise() {
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
            <DrawerDescription></DrawerDescription>
            <button className="hover:cursor-pointer" onClick={()=>setOpen(false)}>
              <IoMdClose size={20} />
            </button>
          </div>
        </DrawerHeader>

        <ExerciseForm
          selectedExerciseId={selectedExerciseId}
          register={register}
          control={control}
          setValue={setValue}
        />

        <DrawerFooter>
          <Button
            className="mt-2"
            disabled={isPending}
            onClick={selectedExerciseId ? handleEditExercise : handleCreateExercise}
          >
            {isPending
              ? "Guardando..."
              : selectedExerciseId ? "Guardar cambios" : "Crear ejercicio"}
          </Button>
          {selectedExerciseId && (
            <Button
              variant="destructive"
              onClick={handleDeleteExercise}
            >
              Eliminar ejercicio
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}