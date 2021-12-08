import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import shoppingBagOutline from '@iconify/icons-ic/outline-shopping-bag';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
// components
import { MHidden } from '../../components/@material-extend';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

function DashboardNavigation({ icon, text }) {
  return (
    <>
      <IconButton sx={{ mr: 1, color: 'text.primary' }}>
        <Icon icon={icon} />
      </IconButton>
      <Typography
        color="text.primary"
        marginRight="2em"
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        {text}
      </Typography>
    </>
  );
}
DashboardNavigation.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string
};

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Button
            sx={{ mr: 1, color: 'text.primary', display: { xs: 'none', md: 'flex' } }}
            endIcon={<Icon icon={shoppingBagOutline} />}
          >
            <Typography
              color="text.primary"
              marginRight="1em"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Go Shopping
            </Typography>
          </Button>
          <IconButton sx={{ color: 'text.primary', display: { xs: 'flex', md: 'none' } }}>
            <Icon icon={shoppingBagOutline} />
          </IconButton>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
