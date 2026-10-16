import { fireEvent, render, screen } from '@testing-library/react';
import Terminal from '../components/Terminal';

test('renders command output as text, not markup', () => {
  const { container } = render(<Terminal />);
  const input = screen.getByLabelText('Shell command');
  fireEvent.change(input, { target: { value: 'echo <img src=x onerror=alert(1)>' } });
  fireEvent.submit(input.closest('form'));

  expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeInTheDocument();
  expect(container.querySelector('img')).toBeNull();
});
