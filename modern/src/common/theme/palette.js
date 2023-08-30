import { grey, green, teal } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? grey[900] : grey[50],
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? teal[300] : teal[700]),
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[200] : green[600]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#3bb2d0',
  },
});
