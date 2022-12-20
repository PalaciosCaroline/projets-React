import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import Logement from './pages/Logement';

test('renders title of Home page', () => {
  render(<Home />);
  const title = screen.getByText(/Chez vous/i);
  expect(title).toBeInTheDocument();
});

test('renders Logement', () => {
  render(<Logement />);
  const accordiontitle = screen.getByText(/Description/i);
  expect(accordiontitle).toBeInTheDocument();
});


