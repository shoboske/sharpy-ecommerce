import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import downloadOutline from '@iconify/icons-eva/download-outline';
import folderUploadOutline from '@iconify/icons-ic/outline-drive-folder-upload';
import shoppingBasketOutline from '@iconify/icons-ic/outline-shopping-basket';
import shoppingBagOutline from '@iconify/icons-ic/outline-shopping-bag';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// components
import { MHidden } from '../../components/@material-extend';
//
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

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
  // path: PropTypes.string
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

        <DashboardNavigation icon={folderUploadOutline} text="Sales Orders" />
        <DashboardNavigation icon={downloadOutline} text="Purchase Orders" />
        <DashboardNavigation icon={shoppingBasketOutline} text="Products" />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Typography
            color="text.primary"
            marginRight="1em"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Go Shopping
          </Typography>
          <IconButton sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={shoppingBagOutline} />
          </IconButton>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
