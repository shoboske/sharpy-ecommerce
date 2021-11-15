import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import mailOutline from '@iconify/icons-ant-design/mail-outline';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.firstName(),
    description: faker.lorem.paragraphs(24),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon()
  };
});

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { title, description } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ maxWidth: '85%' }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2">
            {title}
            {' : '}
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {description}
            </Typography>
          </Typography>
        </Link>
      </Box>
      <Box>
        <Icon icon={mailOutline} width={22} height={22} />
      </Box>
    </Stack>
  );
}

export default function AppRecentMessages() {
  return (
    <Card>
      <CardHeader title="Messages" disableTypography sx={{ backgroundColor: 'gray', pb: 2 }} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0, pl: 2 }}>
          {NEWS.map((news) => (
            <>
              <NewsItem key={news.title} news={news} />
              <Divider />
            </>
          ))}
        </Stack>
      </Scrollbar>

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View More
        </Button>
      </Box>
    </Card>
  );
}
