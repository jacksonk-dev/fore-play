import React from 'react';
import {
  FaTrash as ClearIcon,
  FaBomb as ExplodeIcon,
  FaSpaceShuttle as GravitateIcon,
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
    Icon: <AddIcon style={{ fontSize: '2rem' }} />,
  },
  {
    label: 'Remove Boxes',
    onClick: 'removeBoxes',
    Icon: <RemoveIcon style={{ fontSize: '2rem' }} />,
  },
  {
    label: 'Clear',
    onClick: 'clearGround',
    Icon: <ClearIcon />,
  },
  {
    label: 'Explode',
    Icon: <ExplodeIcon />,
  },
  {
    label: 'Implode',
    Icon: <ImplosionIcon />,
  },
  {
    label: 'Gravitate',
    Icon: <GravitateIcon />,
  },
];
