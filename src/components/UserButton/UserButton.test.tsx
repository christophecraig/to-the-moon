import React from 'react';
import { shallow } from 'enzyme';
import UserButton from './UserButton';

describe('<UserButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<UserButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
