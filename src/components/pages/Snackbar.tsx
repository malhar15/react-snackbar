import { Box, Button } from '@mui/material';
import { useSnackbar } from "../providers/SnackbarProvider";

const Snackbar: React.FC = () => {
  const showSnackbar = useSnackbar();

  const handleShowSnackbar = () => {
    showSnackbar("Hey! Here's the Success snackbar!", 'success');
  };

  const handleHideSnackbar = () => {
    showSnackbar("Hey! Here's the Error snackbar!", 'error');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      <Button variant="contained" onClick={handleShowSnackbar}>
        Show Success Snackbar
      </Button>
      <Button variant="contained" onClick={handleHideSnackbar}>
        Show Error Snackbar
      </Button>
    </Box>
  );
};

export default Snackbar;