import { useState, useMemo } from 'react';
import { ChatController, MuiChat } from 'chat-ui-react';
// material
import {
  Container,
  Box,
  Stack,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActionArea
} from '@mui/material';
import { Icon } from '@iconify/react';
import outlineEdit from '@iconify/icons-ic/outline-edit';
import searchFill from '@iconify/icons-eva/search-fill';
// components
import Page from '../components/Page';
import CHATLIST from '../_mocks_/chatList';
import MESSAGES from '../_mocks_/chatMessage';
import Scrollbar from '../components/Scrollbar';

// ----------------------------------------------------------------------

const renderChat = (chatCtl, activeUser) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      maxHeight: '100vh',
      maxWidth: '60%',
      minWidth: '60%',
      marginLeft: 'auto',
      marginTop: 'auto',
      bgcolor: 'background.default',
      overflow: 'auto'
    }}
  >
    <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
      <Avatar src={activeUser.avatarUrl} sx={{ width: 56, height: 56 }}>
        {activeUser.name[0]}
      </Avatar>
      <Box>
        <Typography variant="h6" marginBottom="0em">
          {activeUser && activeUser.name}
        </Typography>
        <Typography variant="caption" marginTop="0em">
          {activeUser.online ? 'Active now ' : 'Offline'}
        </Typography>
      </Box>
    </Stack>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '100vh',
        maxWidth: '100%',
        minWidth: '100%',
        marginLeft: 'auto',
        marginTop: 'auto',
        bgcolor: 'background.default',
        overflow: 'auto'
      }}
    >
      <Box sx={{ flex: '1 1 0%', minHeight: 100, overflow: 'auto' }}>
        <MuiChat chatController={chatCtl} />
      </Box>
    </Box>
  </Box>
);
const renderHeader = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" marginY="1em">
    <Typography variant="h6" marginRight="2em">
      All Messages
    </Typography>
    <IconButton>
      <Icon icon={outlineEdit} />
    </IconButton>
  </Stack>
);
const renderSearch = () => (
  <OutlinedInput
    fullWidth
    placeholder="Search…"
    startAdornment={
      <InputAdornment position="start">
        <Box
          component={Icon}
          icon={searchFill}
          sx={{ color: 'text.disabled', width: 20, height: 20 }}
        />
      </InputAdornment>
    }
    sx={{ mr: 1, fontWeight: 'fontWeightBold', marginY: '1em' }}
  />
);

const renderChatList = ({ id, name, message, avatarUrl }, handleClick) => (
  <Card
    sx={{
      minHeight: { xs: 50, md: 100, lg: 150 },
      width: { xs: 200, md: 250, lg: 345 },
      border: 'solid 1px grey',
      marginY: 1,
      paddingLeft: 0
    }}
    onClick={() => handleClick(id)}
  >
    <CardActionArea>
      <CardHeader
        avatar={
          <>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Avatar src={avatarUrl} sx={{ width: 56, height: 56 }} />
              <Typography
                noWrap
                variant="body1"
                sx={{
                  paddingX: 1,
                  paddingY: 0.5,
                  maxWidth: { xs: 100, md: 300, lg: 345 }
                }}
              >
                {name}
              </Typography>
            </Stack>
          </>
        }
        disableTypography
        sx={{ paddingX: 1, paddingY: 0.5 }}
      />
      <CardContent sx={{ padding: 1, display: { xs: 'none', md: 'block' } }}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {message}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default function Messages() {
  const [chatCtl] = useState(new ChatController({ showDateTime: true }));
  const [activeUser, setActiveUser] = useState(CHATLIST[0]);
  useMemo(async () => {
    // Chat content is displayed using ChatController
    chatCtl.setActionRequest({ type: 'text', always: true, self: true }, () => null);
    chatCtl.setMessages(MESSAGES.filter((m) => m.userId === activeUser.id));
  }, [chatCtl, activeUser.id]);

  const handleClick = (userId) => {
    setActiveUser(CHATLIST.find((u) => u.id === userId));
    chatCtl.clearMessages();
    chatCtl.setMessages(MESSAGES.filter((m) => m.userId === userId));
  };

  return (
    <Page title="Messages | Sharpy">
      <Scrollbar>
        <Container maxWidth="xl">
          <Box sx={{ maxHeight: '90vh', height: '85vh', overflow: 'none' }}>
            <Stack spacing={1} sx={{ height: '85vh', width: '100%' }} direction="row">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  maxHeight: '100vh',
                  maxWidth: '100%',
                  width: '100%',
                  marginTop: 'auto',
                  paddingRight: 'auto',
                  bgcolor: 'background.default',
                  overflow: 'none'
                }}
              >
                {renderHeader()}
                {renderSearch()}
                <Scrollbar sx={{ overflow: 'hiden' }}>
                  {CHATLIST.map((item) => renderChatList(item, handleClick))}
                </Scrollbar>
              </Box>
              <Divider orientation="vertical" light />
              {chatCtl && renderChat(chatCtl, activeUser)}
            </Stack>
          </Box>
        </Container>
      </Scrollbar>
    </Page>
  );
}
