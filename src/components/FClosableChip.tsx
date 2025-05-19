import {IoMdClose} from "react-icons/io";

interface FClosableChipProps {
  onClose: () => void;
  label: string;
}

export const FClosableChip = (
  {
    onClose,
    label
  }: FClosableChipProps
) => {

  return (
    <button
      onClick={onClose}
      className="flex items-center gap-1 py-1 px-4 bg-black text-white hover:cursor-pointer rounded-[6px] text-xs"
    >
      <IoMdClose size={14} />
      {label}
    </button>
  )
}