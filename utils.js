import React from 'react';
import { initializeIcons } from '@uifabric/icons';
initializeIcons(undefined, { disableWarnings: true });

const generateData = count => {
  let index = 0;
  let data = [];
  while (index < count) {
    data.push({
      key: `idx-${index}`,
      id: `idx-${index}`,
      name: `name-${index}`
    });

    index++;
  }

  return data;
};
const items = generateData(100);

const columns = [
  {
    name: 'Id',
    key: 'column1',
    ariaLabel: 'Column operations for File type, Press to sort on File type',
    fieldName: 'id',
    minWidth: 100,
    maxWidth: 200,
    onColumnClick: () => {},
    onRender: (item, index, column) => <div>{item[column.fieldName].text}</div>
  },
  {
    name: 'Name',
    key: 'column2',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 200,
    onColumnClick: () => {},
    onRender: (item, index, column) => <div>{item[column.fieldName].text}</div>
  }
];
export { columns, items };
