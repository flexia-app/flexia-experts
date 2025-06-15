import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {FSelect} from "@/components/FSelect.tsx";
import {AVAILABILITIES, DIFFICULTIES, MUSCLES, EQUIPMENTS} from "@/exercises/utils/filters.tsx";
import {useForm} from "react-hook-form";
import {FMultiSelectWithChips} from "@/components/FMultiSelectWithChips.tsx";
import {useState} from "react";

export type ExerciseFormData = {
  id?: string;
  title: string;
  instructions: string;
  difficulty?: string;
  muscles: string[];
  equipments: string[];
  image: string;
  active?: boolean;
}

interface ExerciseFormProps {
  defaultValues: ExerciseFormData;
  selectedExerciseId?: string;
}

export const ExerciseForm = (
  {
    defaultValues,
    selectedExerciseId
  }: ExerciseFormProps
) => {

  const {
    register,
    setValue,
    control
  } = useForm<ExerciseFormData>({
    defaultValues: defaultValues || {
      id: selectedExerciseId,
      title: "",
      instructions: "",
      difficulty: "",
      muscles: [],
      equipments: [],
      image: "",
      active: true,
    },
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="grid gap-2 px-4 overflow-y-auto">
      {selectedExerciseId && (
        <FSelect
          label="Visualización"
          options={AVAILABILITIES}
          placeholder="Configura la visualización"
          {...register("active", { required: true })}
        />
      )}
      <Input
        label="Nombre"
        placeholder="Nombre"
        {...register("title", { required: true })}
      />
      <Textarea
        label="Instrucciones"
        placeholder="Describe el ejercicio"
        {...register("instructions", { required: true })}
      />
      <FSelect
        label="Dificultad"
        options={DIFFICULTIES}
        placeholder="Selecciona la dificultad"
        {...register("difficulty", { required: true })}
      />
      <FMultiSelectWithChips
        name="muscles"
        label="Músculos"
        options={MUSCLES}
        control={control}
      />
      <FMultiSelectWithChips
        name="equipments"
        label="Equipamiento"
        options={EQUIPMENTS}
        control={control}
      />
      <div className="space-y-1">
        <Input
          label="Imagen (JPG-PNG-GIF)"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setValue("image", reader.result as string); // base64
                // setValue("image", URL.createObjectURL(file)); // blob
                // setValue("image", file); // file

                const imageUrl = URL.createObjectURL(file);
                setPreviewImage(imageUrl);
              };
              reader.readAsDataURL(file);
            }
            else {
              setValue("image", "");
              setPreviewImage(null);
            }
          }}
        />
        {previewImage && (
          <div>
            <h1 className="font-medium text-xs mb-1">Previsualización</h1>
            <div className="flex items-center justify-center w-full h-56 bg-gray-200 rounded-lg">
              <img
                src={previewImage}
                alt="Preview"
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}