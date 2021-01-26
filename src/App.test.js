import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders readme link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/readme.md/i);
  expect(linkElement).toBeInTheDocument();
});
