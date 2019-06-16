import { createSlice } from 'redux-starter-kit';

const counterSlice = createSlice({
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    multiply: (state, action) => state * action.payload,
  },
});

export const { actions: CounterActions, reducer } = counterSlice;

export default reducer;
