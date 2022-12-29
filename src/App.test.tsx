import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Looking to hire developers text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Looking to hire developers/i);
  expect(linkElement).toBeInTheDocument();
});
