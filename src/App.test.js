import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site navigation and home page', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /navegación principal/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /espacios que inspiran/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /servicios/i })).toBeInTheDocument();
});
