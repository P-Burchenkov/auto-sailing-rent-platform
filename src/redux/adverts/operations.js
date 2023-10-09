import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65218622a4199548356d5373.mockapi.io/api/adverts';

export const fetchAllAdverts = createAsyncThunk(
  'getAdvertStatus',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(`cars/?page=1&limit=8`);
      return data.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchMoreAdverts = createAsyncThunk(
  'getMoreAdvertStatus',
  async (paginationParams, thunkAPI) => {
    try {
      const data = await axios.get(`cars/?${paginationParams}`);
      return data.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchAdvertByID = createAsyncThunk(
  'getAdvertByIdStatus',
  async (id, thunkAPI) => {
    try {
      const data = axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
