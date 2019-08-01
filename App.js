import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { columns, items } from './utils';

function App() {
  let list = (
    <div>
      <DefaultButton text="Test" />
      <DetailsList columns={columns} items={items} onActiveItemChanged={() => {}} onColumnHeaderClick={() => {}} />
    </div>
  );

  return list;
}

export default App;
