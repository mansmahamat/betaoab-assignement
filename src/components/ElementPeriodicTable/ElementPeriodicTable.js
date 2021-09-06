import React from 'react';
import PropTypes from 'prop-types';
import SwitchCase from '../../utils/colors';
import './ElementPeriodicTable.css';

function ElementPeriodicTable({
  name,
  block,
  symbol,
  atomicNumber,
  checkSelected,
  column,
  row,
  isSelected,
}) {
  return (
    <div
      style={{
        gridColumnStart: column,
        gridRowStart: row,
        backgroundColor:
          isSelected !== ''
            ? isSelected && block === isSelected
              ? SwitchCase(isSelected)
              : 'lightgray'
            : SwitchCase(block),
      }}
      className="element"
      onClick={() => checkSelected(block)}
    >
      <strong>{symbol}</strong>
      <small className="number">{atomicNumber}</small>
      <small className="name">{name}</small>
    </div>
  );
}

ElementPeriodicTable.propTypes = {
  name: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  atomicNumber: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  isSelected: PropTypes.string.isRequired,
  checkSelected: PropTypes.func.isRequired,
};

export default ElementPeriodicTable;
