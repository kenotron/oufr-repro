// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import { DetailsList } from 'office-ui-fabric-react';
import { columns, items } from './utils';

export default class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }
  render() {
    return (
      <div>
        <DetailsList columns={columns} items={items} onActiveItemChanged={() => {}} onColumnHeaderClick={() => {}} />
        <label>asdf</label>
      </div>
    );
  }
}
