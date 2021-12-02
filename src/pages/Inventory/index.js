import { useState } from 'react';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
// material
import { Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import plus from '@iconify/icons-ant-design/plus';
// components
import Page from '../../components/Page';
import { UserListToolbar } from '../../components/_dashboard/user';
import { ProductList } from '../../components/_dashboard/products';

//
import PRODUCTS from '../../_mocks_/products';

// ----------------------------------------------------------------------

export default function Inventory() {
  const [filterName, setFilterName] = useState('');
  const order = useState('asc');
  const orderBy = useState('name');

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }
  const filteredProducts = applySortFilter(PRODUCTS, getComparator(order, orderBy), filterName);

  return (
    <Page title="Inventory | Sharpy">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Inventory ({PRODUCTS.length})
          </Typography>
          <Link to="create">
            <Tooltip title="add">
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon={plus} height="1.5em" />
              </IconButton>
            </Tooltip>
          </Link>
        </Stack>

        <UserListToolbar searchPlaceHolder="Search" onFilterName={handleFilterByName} />
        <ProductList products={filteredProducts} />
      </Container>
    </Page>
  );
}
