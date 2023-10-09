import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts, fetchMoreAdverts } from './operations';

const initialState = {
  adverts: [],
  favoriteCars: [],
  isLoading: false,
  error: null,
  hasMore: false,
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavoriteCars: {
      reducer(state, action) {
        state.favoriteCars = [...state.favoriteCars, action.payload];
      },
    },
    removeFromFavorite: {
      reducer(state, action) {
        state.favoriteCars = state.favoriteCars.filter(
          car => car.id !== action.payload
        );
      },
    },
    changeFavorite: {
      reducer(state, action) {
        state.adverts = state.adverts.map(car => {
          if (car.id === action.payload.id) {
            console.log();
            return action.payload;
          }
          return car;
        });
      },
    },
  },
  extraReducers: buider => {
    buider.addCase(fetchAllAdverts.pending, (state, acttion) => {
      state.isLoading = true;
    });
    buider.addCase(fetchAllAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adverts = action.payload;
      state.error = null;
      state.hasMore = action.payload.length < 8 ? false : true;
    });
    buider.addCase(fetchAllAdverts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    buider.addCase(fetchMoreAdverts.pending, (state, acttion) => {
      state.isLoading = true;
    });
    buider.addCase(fetchMoreAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adverts = [...state.adverts, ...action.payload];
      state.error = null;
      state.hasMore = action.payload.length < 8 ? false : true;
    });
    buider.addCase(fetchMoreAdverts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default advertSlice;

export const { addToFavoriteCars, changeFavorite, removeFromFavorite } =
  advertSlice.actions;
