import PropTypes from 'prop-types';

import { Card, CardHeader, IconButton, Stack } from '@mui/material';
import { Icon } from '@iconify/react';

const ProfileSettingsCard = ({ icon, title, action, children }) => (
  <Card>
    <Stack spacing={3} sx={{ p: 3, px: 2 }}>
      {children}
    </Stack>
    {title && (
      <CardHeader
        title={title}
        disableTypography
        sx={{ backgroundColor: 'gray', pb: 2, color: 'black' }}
        action={
          <IconButton aria-label="settings" onClick={() => action}>
            <Icon icon={icon} color="black" />
          </IconButton>
        }
      />
    )}
  </Card>
);

ProfileSettingsCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.any
};

export default ProfileSettingsCard;
