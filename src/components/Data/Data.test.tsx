import React from 'react';
import { shallow } from 'enzyme';
import Data from './Data';

describe('<Data />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Data />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
