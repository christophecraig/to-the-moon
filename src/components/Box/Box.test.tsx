import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';

describe('<Box />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Box />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
