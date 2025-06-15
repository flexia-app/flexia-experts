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
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/store";
import {clearFilters, setDifficulty, setEquipment, setMuscleGroup} from "@/store/filtersSlice.ts";
import type {MuscleGroup} from "@/exercises/types/muscle-group.ts";
import type {Difficulty} from "@/exercises/types/difficulty.ts";
import type {Equipment} from "@/exercises/types/equipment.ts";

export const ExercisesTableFiltersDrawer = (
  {
    open,
    setOpen
  }: {
    open: boolean
    setOpen: (open: boolean) => void
  }
) => {
  const dispatch = useDispatch();

  const muscleGroup = useSelector((state: RootState) => state.filters.muscleGroup);
  const difficulty = useSelector((state: RootState) => state.filters.difficulty);
  const equipment = useSelector((state: RootState) => state.filters.equipment);

  function handleClearFilters() {
    dispatch(clearFilters());
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
          <FSelect<MuscleGroup>
            label="Músculos"
            placeholder="Selecciona un músculo"
            options={MUSCLES}
            value={muscleGroup}
            onValueChange={(val) => dispatch(setMuscleGroup(val))}
            allowEmpty
            emptyLabel="Todos"
          />
          <FSelect<Difficulty>
            label="Dificultad"
            placeholder="Selecciona una dificultad"
            options={DIFFICULTIES}
            value={difficulty}
            onValueChange={(val) => dispatch(setDifficulty(val))}
            allowEmpty
            emptyLabel="Todos"
          />
          <FSelect<Equipment>
            label="Equipamiento"
            placeholder="Selecciona un equipamiento"
            options={EQUIPMENTS}
            value={equipment}
            onValueChange={(val) => dispatch(setEquipment(val))}
            allowEmpty
            emptyLabel="Todos"
          />
        </div>

        <DrawerFooter>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button
              variant="destructive"
              onClick={handleClearFilters}
            >
              Limpiar filtros
            </Button>
            <Button
              onClick={()=>setOpen(false)}
            >
              Aceptar
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}