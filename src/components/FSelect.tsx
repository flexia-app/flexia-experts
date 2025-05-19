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

  export interface FSelectProps extends Omit<SelectProps, "onValueChange"> {
    options: {
      label: string;
      value: string | number | boolean;
    }[];
    label?: string;
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
  }

  export const FSelect = (
    {
      options,
      label,
      placeholder,
      value,
      onValueChange,
      ...props
    }: FSelectProps) => {

    const stringValue = value !== undefined ? String(value) : undefined;

    const handleValueChange = (val: string) => {
      let parsed: string | number | boolean = val;

      // Convert string back to boolean/number if needed
      if (val === "true") parsed = true;
      else if (val === "false") parsed = false;
      else if (!isNaN(Number(val)) && val.trim() !== "") parsed = Number(val);

      onValueChange?.(parsed as string);
    };

    return (
      <div className="w-full">
        {label && <h1 className="mb-1 font-medium text-xs">{label}</h1>}
        <Select
          value={stringValue}
          onValueChange={handleValueChange}
          {...props}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
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
