import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders typical elements', () => {
  const { container } = render(<App />);
  expect(screen.getByText(/readme.md/i)).toBeInTheDocument();
  expect(container.querySelector('.heart')).toBeInTheDocument()
  expect(container.querySelector('.lifebar')).toBeInTheDocument()
});
