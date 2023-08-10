import React from 'react';
import { IngredientsMenuProps } from './IngredientsMenu.types';
import { Box, Button, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { getProductWithMeasurementSign } from '@/utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const IngredientsMenu: React.FC<IngredientsMenuProps> = ({ products }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      <Button
        disableElevation
        onClick={ handleClick }
        endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
        sx={ { px: 0 } }
      >
        Ингредиенты ({ products.length })
      </Button>
      <Menu
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
      >
        { products.map(product => (
          <MenuItem key={ product.product.id }>
            <ListItemText>
              <Typography noWrap>
                { product.product.name }
              </Typography>
            </ListItemText>
            <Typography ml={ 1 }>
              { getProductWithMeasurementSign(
                product.measurement_value,
                product.measurement_type,
              ) }
            </Typography>
          </MenuItem>
        )) }
      </Menu>
    </Box>
  );
};
