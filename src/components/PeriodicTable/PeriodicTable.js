import React, { useState } from 'react';
import dataPeriodicTable from '../../data/periodic-table-data.json';
import ElementPeriodicTable from '../ElementPeriodicTable/ElementPeriodicTable';
import './PeriodicTable.css';

const PeriodicTable = () => {
  const [isSelected, setIsSelected] = useState('');

  const checkSelected = (props) => {
    props = isSelected === props ? '' : props;
    setIsSelected(props);
  };

  const test = dataPeriodicTable.map((element) => (
    <ElementPeriodicTable
      key={element.name}
      name={element.name}
      block={element.block}
      row={element.row}
      column={element.column}
      symbol={element.symbol}
      atomicNumber={element.atomicNumber}
      checkSelected={checkSelected}
      isSelected={isSelected}
    />
  ));

  return <div className="periodic-table">{test}</div>;
};

export default PeriodicTable;
