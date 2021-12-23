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
  styled,
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

const TextFieldStyle = styled((props) => <TextField variant="filled" {...props} />)({
  backgroundColor: '#C4C4C4'
});

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
                <TextFieldStyle
                  id="product-name"
                  label="Product name"
                  defaultValue={product.name}
                />
                <TextFieldStyle
                  multiline
                  rows={4}
                  id="product-description"
                  label="Product description"
                  defaultValue={product.name}
                />
                <TextFieldStyle id="categories" label="Categories" />
                <TextFieldStyle id="price" label="Price" />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h4">Options</Typography>
                <TextFieldStyle id="price-option" label="Price" />

                <Typography variant="caption">Options</Typography>
                <TextFieldStyle id="option1" label="option1" />
                <TextFieldStyle id="option1" label="option2" />
              </Stack>
            </Stack>
            <Stack marginTop={5}>
              <ButtonGroup size="large" variant="contained" fullWidth color="inherit">
                <Button
                  color="inherit"
                  sx={{ backgroundColor: '#949494' }}
                  component={Link}
                  to="/dashboard/inventory"
                >
                  Cancel
                </Button>
                <Button
                  color="secondary"
                  sx={{ backgroundColor: '#1F4173' }}
                  fullWidth
                  component={Link}
                  to="/dashboard/inventory"
                >
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
