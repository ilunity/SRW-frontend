import React from 'react';
import { DashboardListItemProps } from './DashboardListItem.types';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const DashboardListItem: React.FC<DashboardListItemProps> = ({ children, selected, text, onClick }) => {
  return (
    <ListItemButton onClick={ onClick } selected={ selected }>
      <ListItemIcon>
        { children }
      </ListItemIcon>
      <ListItemText primary={ text } />
    </ListItemButton>
  );
};
