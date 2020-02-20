import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app/App';

test('renders visit github button', () => {
  const { getByText } = render(<App />);
  const anchorElement = getByText(/Visit my GitHub for more information/i);
  expect(anchorElement).toBeInTheDocument();
});
