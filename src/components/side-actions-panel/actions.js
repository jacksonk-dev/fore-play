import React from 'react';
import {
  FaUndoAlt as UndoIcon,
  FaRedoAlt as RedoIcon,
  FaTrash as ClearIcon,
  FaBomb as ExplodeIcon,
  FaSpaceShuttle as GravitateIcon,
} from 'react-icons/fa';
import { GiImplosion as ImplosionIcon } from 'react-icons/gi';

export default [
  {
    label: 'Undo',
    Icon: <UndoIcon />,
  },
  {
    label: 'Redo',
    Icon: <RedoIcon />,
  },
  {
    label: 'Clear',
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
