// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from '../App';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  expect(checkboxNode).toBeTruthy();
});
