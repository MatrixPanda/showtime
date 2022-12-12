import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux'; // to get the "specific slice of the cake"
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

// Get access to profile name or id from redux state and display it in the profile component
// to do just the above, EITHER import { useSelector } then const { user } = useSelector((state) => state.user)
// OR also import the helper function created, so import { userSelector } from ../../features/auth
// then const { user } = useSelector(userSelector); to get the user object, then just get the user.username
const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/'; // reload page
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            FAVORITE MOVIES
          </Box>
        )}
    </Box>
  );
};

export default Profile;
