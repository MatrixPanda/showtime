import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  // xs = extra small devices, and will take up 12 out of 12 spaces
  // takes time to fetch then display so need some kind of loading function while it fetches (refer to Movies.jsx)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">{movie.title}</Typography>
    </Grid>
  );
};

export default Movie;
