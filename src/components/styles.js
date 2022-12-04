import { makeStyles } from '@mui/styles';

// NOTE: two words such as flex-grow is written in camel case
// numbers like 1 can be written as 1 or '1'
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
  },
}));
