import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { mockImgCover } from '../../../utils/mockImages';
//
import palette from '../../../theme/palette';
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon()
  };
});

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { description } = news;

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
      <Box sx={{ maxWidth: '65%' }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            An Order has been placed on a product
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Box>
        <Stack direction="row" alignItems="center">
          <Button color="success">Accept</Button>
          <Button color="error">Decline</Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default function AppRecentOrders() {
  return (
    <Card>
      <CardHeader
        title="Recent Orders"
        disableTypography
        sx={{ backgroundColor: palette.cardHeader, pb: 2 }}
      />

      <Scrollbar sx={{ height: '40vh' }}>
        <Stack spacing={3} sx={{ p: 3, pr: 1, pl: 2 }}>
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
