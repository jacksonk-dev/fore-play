import React from 'react';
import {
  FaTrash as ClearIcon,
  FaBomb as ExplodeIcon,
  FaEye as VisibilityIcon,
} from 'react-icons/fa';
import { GiImplosion as ImplosionIcon } from 'react-icons/gi';
import {
  MdAdd as AddIcon,
  MdRemove as RemoveIcon,
} from 'react-icons/md';

export default [
  {
    label: 'Add Boxes',
    onClick: 'addBoxes',
    Icon: <AddIcon style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'Remove Boxes',
    onClick: 'removeBoxes',
    Icon: <RemoveIcon style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'Clear',
    onClick: 'clearGround',
    Icon: <ClearIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Toggle Shape Visibility',
    onClick: 'toggleUnshadedVisibility',
    Icon: <VisibilityIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Explode',
    onClick: 'explode',
    Icon: <ExplodeIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Implode',
    Icon: <ImplosionIcon style={{ fontSize: '2.5rem' }} />,
    onClick: 'implode',
  },
];
