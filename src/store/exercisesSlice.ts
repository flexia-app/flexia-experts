import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Exercise} from "@/types/exercise";

interface ExerciseState {
  exercises: Exercise[];
}

const initialState: ExerciseState = {
  exercises: [],
};

const exerciseSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetch({ payload }: PayloadAction) {

    }
  },
});
