import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';

// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
  Divider,
  Checkbox,
  Stack
} from '@mui/material';
import MenuPopover from '../../MenuPopover';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  tableHead: PropTypes.array,
  onFilterHead: PropTypes.func,
  searchPlaceHolder: PropTypes.string
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
  tableHead,
  onFilterHead,
  searchPlaceHolder
}) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(tableHead && tableHead.map((t) => t.id));
  const [headFilters] = useState(tableHead);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    onFilterHead(
      event,
      headFilters.filter((t) => newSelected.includes(t.id))
    );
  };
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder={searchPlaceHolder}
          startAdornment={
            <InputAdornment position="start">
              <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Icon icon={trash2Fill} />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          {headFilters && (
            <Tooltip title="Filter list">
              <IconButton ref={anchorRef} onClick={handleOpen}>
                <Icon icon={roundFilterList} />
              </IconButton>
            </Tooltip>
          )}
          <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{ width: 220 }}
          >
            {headFilters &&
              headFilters.map((t) => {
                const isItemSelected = selected.indexOf(t.id) !== -1;
                return (
                  t.id && (
                    <>
                      <Box sx={{ my: 1.5, px: 2.5 }}>
                        <Stack direction="row" alignItems="center">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, t.id)}
                          />
                          <Typography variant="subtitle1" noWrap>
                            {t.label}
                          </Typography>
                        </Stack>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                    </>
                  )
                );
              })}
          </MenuPopover>
        </>
      )}
    </RootStyle>
  );
}
