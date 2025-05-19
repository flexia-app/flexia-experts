import {
  Drawer,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {IoMdClose} from "react-icons/io";
import {DIFFICULTIES, EQUIPMENTS, MUSCLES} from "@/exercises/utils/filters.ts";
import {FSelect} from "@/components/FSelect.tsx";
import {Button} from "@/components/ui/button.tsx";

export const ExercisesTableFiltersDrawer = (
  {
    open,
    setOpen
  }: {
    open: boolean
    setOpen: (open: boolean) => void
  }
) => {

  function applyFilters() {
    // TODO
    setOpen(false)
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
            <DrawerTitle className="text-[#64748B] font-bold">Filtros</DrawerTitle>
            <button className="hover:cursor-pointer" onClick={()=>setOpen(false)}>
              <IoMdClose size={20} />
            </button>
          </div>
        </DrawerHeader>

        <div className="grid gap-2 px-4">
          <FSelect
            label="Músculos"
            placeholder="Selecciona un músculo"
            options={MUSCLES}
          />
          <FSelect
            label="Dificultad"
            placeholder="Selecciona una dificultad"
            options={DIFFICULTIES}
          />
          <FSelect
            label="Equipamiento"
            placeholder="Selecciona un equipamiento"
            options={EQUIPMENTS}
          />
        </div>

        <DrawerFooter>
          <Button
            className="mt-2"
            onClick={applyFilters}
          >
            Aplicar filtros
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}