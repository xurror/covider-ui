import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Covider app name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Covider/i);
  expect(linkElement).toBeInTheDocument();
});
