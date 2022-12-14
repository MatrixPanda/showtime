// using redux toolkit best practices, services/TMDB.js is where we will make all the calls to the TMDB api
// below is a special tool included in redux tool-kit query that allows us to more easily make api requests
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi', // every createApi api call needs reducerPath
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Genre (ids like 28, 10735, etc so === 'number')
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Popular Movies (default)
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`; // `` is template string which allows embedded expressions
      },
    }),

    // Get Movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`, // url found on tmdb documentation
    }),

    // Get User Specific Lists
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
  }), // A call back function that instantly returns an object, so wrap in parathesis
});

// whenever an endpoint is using createApi such as getMovies, redux toolkit query automatically creates a hook
// because I put getMovies inside createApi, it auto created a hook and when it call it, it will
// automatically gonna make a call to this api above
export const {
  useGetGenresQuery,
  useGetMoviesQuery, // must use preceisely this name
  useGetMovieQuery,
  useGetRecommendationsQuery,
} = tmdbApi;
