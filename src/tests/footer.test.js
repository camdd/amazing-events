/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  test('testeo Footer', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Seleccionar los enlaces por sus roles personalizados
    const instagramLink = screen.getByRole('instagramLink');
    const facebookLink = screen.getByRole('facebookLink');
    const twitterLink = screen.getByRole('twitterLink');

    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/');
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/home');
  });
});







