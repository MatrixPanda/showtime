import React from 'react';
import { Typography, Box } from '@mui/material';

import { Movie } from '..';
import useStyles from './styles';

const RatedCards = ({ title, data }) => {
  const classes = useStyles();

  // NOTE: i is passed as prop so the <grow> animation timeout in the Movie.jsx can be calculated
  return (
    <Box>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
