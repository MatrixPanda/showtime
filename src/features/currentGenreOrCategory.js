import { createSlice } from '@reduxjs/toolkit';

// NOTE: redux slice is like a slice of cake
// the entire react application state, or a store is the whole piece of cake
// genreOrCategory is only one slice of that cake. Want to keep that info separate from movie or everything else
// thats why we created genreOrCategory slice. Inside of this slice we can select a genre and do some logic
// in this case, a reducer that selects a genre or category and updates it
// then redux automatically gives us an action creator to be exported (=genreOrCategory.actions)
// then connect that reducer to the store
// then finally if we import useDispatch from react-redux in a component AND import selectGenreOrCategory
// then we can use dispatch(selectGenreOrCategory(value)) to use the function's logic on that value
export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    // created a function, export this function, then call it from component to populate genreIdOrCategoryName
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer; // Remember, whenever there is a reducer, I must attach it to the store
