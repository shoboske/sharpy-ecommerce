import { Icon } from '@iconify/react';
import messageOutline from '@iconify/icons-ant-design/mail-outline';
import pinOutline from '@iconify/icons-eva/pin-outline';
import giftOutline from '@iconify/icons-ant-design/gift-outline';
import pieOutline from '@iconify/icons-ant-design/pie-chart-outline';
import personOutline from '@iconify/icons-eva/person-outline';
import dashboard from '@iconify/icons-ant-design/dashboard-outline';
import settingsOutline from '@iconify/icons-eva/settings-outline';
import headsetMicOutline from '@iconify/icons-ic/outline-headset-mic';
import logoutOutline from '@iconify/icons-ic/outline-log-out';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/home',
    icon: getIcon(dashboard)
  },
  {
    title: 'messages',
    path: '/dashboard/messages',
    icon: getIcon(messageOutline)
  },
  {
    title: 'order list',
    path: '/dashboard/orders',
    icon: getIcon(pinOutline)
  },
  {
    title: 'inventory',
    path: '/dashboard/inventory',
    icon: getIcon(giftOutline)
  },
  {
    title: 'analytics',
    path: '/dashboard/analytics',
    icon: getIcon(pieOutline)
  }
];

export const accountSideBarConfig = [
  {
    title: 'profile',
    path: '/profile',
    icon: getIcon(personOutline)
  },
  {
    title: 'settings',
    path: '/settings',
    icon: getIcon(settingsOutline)
  },
  {
    title: 'help',
    path: '/help',
    icon: getIcon(headsetMicOutline)
  },
  {
    title: 'logout',
    path: '/logout',
    icon: getIcon(logoutOutline)
  }
];
