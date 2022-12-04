import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // only show whats contained here if the device is higher than small (no mobile)
    // must wrap application with theme, similar to routing (in the outer most index.js)
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
