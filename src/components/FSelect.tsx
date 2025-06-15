import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "@radix-ui/react-select";

const EMPTY_VALUE = "__none__";

export interface FSelectProps<T = string> extends Omit<SelectProps, "onValueChange" | "value"> {
  options: {
    label: string;
    value: T;
  }[];
  label?: string;
  placeholder?: string;
  value?: T;
  onValueChange?: (value: T | undefined) => void;
  allowEmpty?: boolean;
  emptyLabel?: string;
}

export const FSelect = <T extends string | number | boolean>(
  {
    options,
    label,
    placeholder,
    value,
    onValueChange,
    allowEmpty = true,
    emptyLabel = "Todos",
    ...props
  }: FSelectProps<T>) => {

  const stringValue = value !== undefined ? String(value) : EMPTY_VALUE;

  const handleValueChange = (val: string) => {
    if (val === EMPTY_VALUE) {
      onValueChange?.(undefined);
      return;
    }

    const original = options.find((opt) => String(opt.value) === val)?.value;
    if (original !== undefined) {
      onValueChange?.(original);
    }
  };

  return (
    <div className="w-full">
      {label && <h1 className="mb-1 font-medium text-xs">{label}</h1>}
      <Select value={stringValue} onValueChange={handleValueChange} {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {allowEmpty && (
              <SelectItem value={EMPTY_VALUE}>{emptyLabel}</SelectItem>
            )}
            {options.map((opt) => (
              <SelectItem key={String(opt.value)} value={String(opt.value)}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
