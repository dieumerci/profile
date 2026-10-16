import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile and the shell', () => {
  render(<App />);
  expect(screen.getAllByText(/Dieumerci Kazadi/i).length).toBeGreaterThan(0);
  expect(screen.getByLabelText('Shell command')).toBeInTheDocument();
});
