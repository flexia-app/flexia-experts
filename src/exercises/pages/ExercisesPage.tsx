import {FlexiaIcon} from "@/assets/FlexiaIcon.tsx";
import {Button} from "@/components/ui/button.tsx";
import {BiLogOut} from "react-icons/bi";
import {Input} from "@/components/ui/input.tsx";
import {ExercisesTable} from "@/exercises/components/ExercisesTable.tsx";
import {ExercisesTableFiltersDrawer} from "@/exercises/components/ExercisesTableFiltersDrawer.tsx";
import {useState} from "react";
import {CreateEditExerciseDrawer} from "@/exercises/components/CreateEditExerciseDrawer.tsx";
import {toast} from "sonner";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';
import { useNavigate } from 'react-router-dom';

export const ExercisesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const [openFormDrawer, setOpenFormDrawer] = useState(false);
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>();

  function handleLogout() {
    dispatch(logout());
    navigate('/login');
    toast.warning("Has cerrado sesión");
  }

  return (
    <>
      <div className="container mx-auto overflow-hidden px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex gap-2 items-center">
            <FlexiaIcon className="size-8" />
            <h1 className="text-sm font-medium">Bienvenid@ a Flexia Experts</h1>
          </div>
          <Button size="icon" className="rounded-full" onClick={handleLogout}>
            <BiLogOut />
          </Button>
        </div>

        <div className="flex w-full justify-between mb-4">
          <div className="flex w-1/3 gap-2">
            <Input placeholder="Buscar" />
            <Button onClick={()=>setOpenFilters(!openFilters)}>
              Filtros
            </Button>
          </div>
          <Button
            className="hover:cursor-pointer"
            onClick={()=>{
              setOpenFormDrawer(true);
              setSelectedExerciseId(undefined);
            }}
          >
            Nuevo Ejercicio
          </Button>
        </div>

        <ExercisesTable
          setSelectedExerciseId={setSelectedExerciseId}
          setOpenFormDrawer={setOpenFormDrawer}
        />
      </div>
      <ExercisesTableFiltersDrawer
        open={openFilters}
        setOpen={setOpenFilters}
      />
      <CreateEditExerciseDrawer
        open={openFormDrawer}
        setOpen={setOpenFormDrawer}
        selectedExerciseId={selectedExerciseId}
      />
    </>
  )
}