import React from 'react';
import { StyledCell } from './styles/StylledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} > Cell</StyledCell>
)

export default Cell;