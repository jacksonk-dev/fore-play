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
    active: 'addBoxesPossible',
    Icon: <AddIcon style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'Remove Boxes',
    onClick: 'removeBoxes',
    active: 'removeBoxesPossible',
    Icon: <RemoveIcon style={{ fontSize: '3rem' }} />,
  },
  {
    label: 'Clear',
    onClick: 'clearGround',
    active: 'groundUnclear',
    Icon: <ClearIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Toggle Shape Visibility',
    onClick: 'toggleUnshadedVisibility',
    active: 'shapeVisibilityToggleable',
    Icon: <VisibilityIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Explode',
    onClick: 'explode',
    active: 'explosionPossible',
    Icon: <ExplodeIcon style={{ fontSize: '2.5rem' }} />,
  },
  {
    label: 'Implode',
    onClick: 'implode',
    active: 'implosionPossible',
    Icon: <ImplosionIcon style={{ fontSize: '2.5rem' }} />,
  },
];
