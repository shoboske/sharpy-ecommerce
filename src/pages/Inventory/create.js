import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
// material
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import ellipsisOutline from '@iconify/icons-ant-design/ellipsis-outline';
import { Box } from '@mui/system';
// components
import Page from '../../components/Page';

//
import PRODUCTS from '../../_mocks_/products';

// ----------------------------------------------------------------------

export default function Inventory() {
  const [product] = useState(PRODUCTS[0]);

  return (
    <Page title="Inventory - Create | Sharpy">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h4" sx={{ mb: 0 }}>
            Add to Inventory
          </Typography>
          <Tooltip title="more">
            <IconButton sx={{ color: 'text.primary' }}>
              <Icon icon={ellipsisOutline} height="1.5em" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Box>
              <img alt="product" src={product.cover} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction="column" spacing={2}>
              <Stack spacing={1}>
                <TextField
                  id="product-name"
                  label="Product name"
                  variant="filled"
                  defaultValue={product.name}
                />
                <TextField
                  multiline
                  rows={4}
                  id="product-description"
                  label="Product description"
                  variant="filled"
                  defaultValue={product.name}
                />
                <TextField id="categories" label="Categories" variant="filled" />
                <TextField id="price" label="Price" variant="filled" />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h4">Options</Typography>
                <TextField id="price-option" label="Price" variant="filled" />

                <Typography variant="caption">Options</Typography>
                <TextField id="option1" label="option1" variant="filled" />
                <TextField id="option1" label="option2" variant="filled" />
              </Stack>
            </Stack>
            <Stack marginTop={5}>
              <ButtonGroup size="large" variant="contained" fullWidth>
                <Button color="inherit" component={Link} to="/dashboard/inventory">
                  Cancel
                </Button>
                <Button color="secondary" fullWidth component={Link} to="/dashboard/inventory">
                  Add Product
                </Button>
              </ButtonGroup>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
