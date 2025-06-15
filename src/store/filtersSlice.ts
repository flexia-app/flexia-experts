import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { MuscleGroup } from '@/exercises/types/muscle-group';
import type { Difficulty } from '@/exercises/types/difficulty';
import type { Equipment } from '@/exercises/types/equipment';

interface FiltersState {
  muscleGroup?: MuscleGroup;
  difficulty?: Difficulty;
  equipment?: Equipment;
}

const initialState: FiltersState = {
  muscleGroup: undefined,
  difficulty: undefined,
  equipment: undefined,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setMuscleGroup(state, action: PayloadAction<MuscleGroup | undefined>) {
      state.muscleGroup = action.payload;
    },
    setDifficulty(state, action: PayloadAction<Difficulty | undefined>) {
      state.difficulty = action.payload;
    },
    setEquipment(state, action: PayloadAction<Equipment | undefined>) {
      state.equipment = action.payload;
    },
    clearFilters(state) {
      state.muscleGroup = undefined;
      state.difficulty = undefined;
      state.equipment = undefined;
    },
  },
});

export const {
  setMuscleGroup,
  setDifficulty,
  setEquipment,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
