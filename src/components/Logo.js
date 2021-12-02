import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      alt="Sharpy"
      src="/static/logo.svg"
      sx={{ width: 100, height: 30, ...sx }}
    />
  );
}
