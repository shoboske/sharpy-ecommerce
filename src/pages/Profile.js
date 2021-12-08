import { useState } from 'react';
import { Icon } from '@iconify/react';

// material
import {
  Avatar,
  Button,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Typography,
  ToggleButton,
  Grid
} from '@mui/material';
import outlineEdit from '@iconify/icons-ic/outline-edit';
import outlinePlus from '@iconify/icons-ic/outline-plus';
import outlineCheck from '@iconify/icons-ic/outline-check';
// components
import Page from '../components/Page';
import { ProfileSettingsCard } from '../components/profile';
import account from '../_mocks_/account';

//

// ----------------------------------------------------------------------

export default function Profile() {
  function renderProfileDetails(account) {
    return (
      <Grid container spacing={2} maxWidth="100%" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Avatar
            alt={account.displayName}
            src={account.photoURL}
            sx={{
              width: { xs: '6.5em', md: '10.6em' },
              height: { xs: '6.5em', md: '10.6em' },
              marginRight: '2em'
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack direction="column" justifyContent="space-between">
            <Typography variant="h4" marginBottom="1em">
              {account.displayName}
            </Typography>
            <Typography variant="body1" marginBottom="1em">
              {account.descriprion}
            </Typography>
            <Typography variant="body2" fontWeight="bolder">
              {account.email}
            </Typography>
            <Stack direction="row" marginTop="2em">
              <Button color="secondary" variant="text" size="medium" marginRight="1em">
                Edit Profile
              </Button>
              <Button color="error" variant="text" size="medium">
                Logout
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  function StandaloneToggleButton(props) {
    const [selected, setSelected] = useState(false);

    return (
      <ToggleButton
        {...props}
        value="check"
        selected={selected}
        color="success"
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <Icon icon={outlineCheck} color="primary" />
      </ToggleButton>
    );
  }

  return (
    <Page title="Profile | Sharpy">
      <Container sx={{ marginX: 'auto', maxWidth: '90%' }}>
        {renderProfileDetails(account)}
        <Divider sx={{ maxWidth: '100%', marginY: 2 }} />
        <Stack direction="row" justifyContent="space-between" maxWidth="90%">
          <Typography variant="h3" marginBottom="1em">
            Your Store
          </Typography>

          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Maintenance mode"
            labelPlacement="start"
          />
        </Stack>
        <Stack item xs={12} md={12} marginX="auto" spacing={3}>
          <ProfileSettingsCard icon={outlineEdit} title="Edit your shop info">
            <Typography variant="body2" color="darkred" marginBottom="1em">
              store.uniquesharpydomain.com
            </Typography>
            <Typography variant="body1" marginBottom="1em" color="primary">
              <Icon icon="carbon:upgrade" />
              &nbsp;Upgrade to add Google Analytics
            </Typography>
            <Typography variant="body1" marginBottom="1em" color="black">
              Country
            </Typography>
            <Typography variant="body1" marginBottom="1em" color="black">
              City
            </Typography>
            <Typography variant="body1" marginBottom="1em" color="black">
              Currency
            </Typography>
          </ProfileSettingsCard>

          <ProfileSettingsCard icon={outlineEdit} title="Edit your payment options">
            <Typography variant="body" color="black" marginBottom="1em">
              <StandaloneToggleButton sx={{ marginRight: '1em' }} />
              Accept Payments with Paystack
            </Typography>
            <Typography variant="body" color="black" marginBottom="1em">
              <StandaloneToggleButton sx={{ marginRight: '1em' }} />
              Accept Payments with Link.io
            </Typography>
          </ProfileSettingsCard>

          <ProfileSettingsCard icon={outlineEdit} title="Edit your plan and billing">
            <Stack direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography variant="caption" color="gray" marginBottom="1em">
                Basic &nbsp;&nbsp;3 Products + limited features free
              </Typography>
              <Typography variant="body2" color="gray">
                <Button endIcon={<Icon icon="carbon:upgrade" />}>Upgrade</Button>
              </Typography>
            </Stack>
          </ProfileSettingsCard>

          <ProfileSettingsCard>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography variant="body2" color="black">
                Change your password
              </Typography>
              <IconButton>
                <Icon icon={outlineEdit} color="black" />
              </IconButton>
            </Stack>
            <Divider color="black" minWidth="120%" />
            <Stack direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography variant="body2" color="black">
                Add your phone number
              </Typography>
              <IconButton>
                <Icon icon={outlinePlus} color="black" />
              </IconButton>
            </Stack>
          </ProfileSettingsCard>
        </Stack>
      </Container>
    </Page>
  );
}
