import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {FSelect} from "@/components/FSelect.tsx";
import {
  AVAILABILITIES,
  DIFFICULTIES,
  MUSCLES,
  EQUIPMENTS,
  EXERCISE_TYPES,
  LOG_TYPES
} from "@/exercises/utils/filters.ts";
import {FMultiSelectWithChips} from "@/components/FMultiSelectWithChips.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {type Control, Controller, type UseFormRegister, type UseFormSetValue} from "react-hook-form";
import type {ExerciseFormData} from "@/exercises/utils/exerciseFormUtils.ts";

interface ExerciseFormProps {
  selectedExerciseId?: string;
  register: UseFormRegister<ExerciseFormData>;
  control: Control<ExerciseFormData>;
  setValue: UseFormSetValue<ExerciseFormData>;
  previewImage: string | null;
  setPreviewImage: (image: string) => void;
}

export const ExerciseForm = (
  {
    selectedExerciseId,
    register,
    control,
    setValue,
    previewImage,
    setPreviewImage,
  }: ExerciseFormProps
) => {
  return (
    <div className="grid gap-2 px-4 overflow-y-auto">
      {selectedExerciseId && (
        <Controller
          name="active"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FSelect
              label="Configura la visualización"
              options={AVAILABILITIES}
              value={field.value}
              onValueChange={field.onChange}
              emptyLabel="Selecciona"
            />
          )}
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
        {...register("description", { required: true })}
      />
      <Controller
        name="difficulty"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="space-y-2">
            <h1 className="mb-1 font-medium text-xs">Dificultad</h1>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
            >
              {DIFFICULTIES.map((difficulty) => (
                <div key={difficulty.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={difficulty.value} id={`difficulty-${difficulty.value}`} />
                  <Label htmlFor={`difficulty-${difficulty.value}`}>{difficulty.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
      />
      <Controller
        name="exerciseType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FSelect
            label="Tipo de ejercicio"
            options={EXERCISE_TYPES}
            value={field.value}
            onValueChange={field.onChange}
            emptyLabel="Selecciona"
          />
        )}
      />
      <Controller
        name="logType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FSelect
            label="Tipo de registro"
            options={LOG_TYPES}
            value={field.value}
            onValueChange={field.onChange}
            emptyLabel="Selecciona"
          />
        )}
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
                // setValue("image", reader.result as string); // base64
                // setValue("image", URL.createObjectURL(file)); // blob
                setValue("image", file); // file

                const imageUrl = URL.createObjectURL(file);
                setPreviewImage(imageUrl);
              };
              reader.readAsDataURL(file);
            }
            else {
              setPreviewImage("");
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