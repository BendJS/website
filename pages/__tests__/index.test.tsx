import React from 'react';
import Home from '..';
import { getNodeText, render } from 'react-testing-library';
import * as CrossFecth from 'fetch';

describe('Home', () => {
  test('renders a link', () => {
    const { getByRole } = render(<Home meetups={[{ name: 'meetup' }]} />);
    expect(getNodeText(getByRole('link'))).toBe('About');
  });
});
