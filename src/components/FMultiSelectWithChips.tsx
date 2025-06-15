import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {type Control, useController} from "react-hook-form";
import { FClosableChip } from "@/components/FClosableChip";
import { useState } from "react";
import {mapLabel} from "@/exercises/utils/mapLabel.ts";

interface FMultiSelectWithChipsProps {
  name: string;
  control: Control<any>;
  label: string;
  options: { label: string; value: string }[];
}

export const FMultiSelectWithChips = (
  {
    name,
    control,
    label,
    options,
  }: FMultiSelectWithChipsProps) => {
  const {
    field: { value = [], onChange },
  } = useController({
    name,
    control,
  });

  const [tempValue, setTempValue] = useState<string>("");
  const getLabel = mapLabel(options);

  const addItem = (val: string) => {
    if (!value.includes(val)) {
      onChange([...value, val]);
    }
    setTempValue("");
  };

  const removeItem = (val: string) => {
    onChange(value.filter((v: string) => v !== val));
  };

  const filterOptions = options.filter((opt) => !value.includes(opt.value));

  return (
    <div className="space-y-1">
      <label className="text-xs font-medium">{label}</label>
      <Select value={tempValue} onValueChange={addItem}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Selecciona ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-wrap gap-1 mt-2">
        {value.map((v: string, i: number) => (
          <FClosableChip key={i} label={getLabel(v)} onClose={() => removeItem(v)} />
        ))}
      </div>
    </div>
  );
};
