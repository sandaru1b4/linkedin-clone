import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './userAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'user/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  
  reducers: {
    login: (state, action) => {
   
      state.user = action.payload;
    },
    
    logout : (state, action) => {
      state.user = null;
    },
  },
 
});

export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user ;

export default userSlice.reducer;
