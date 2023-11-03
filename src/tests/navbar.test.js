/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Navbar />', () => {
  test('testeo Navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    let navbarElement = screen.getByRole("navbarElement");
    expect(navbarElement).toBeInTheDocument();

    let linkToEvents = screen.getByText("EVENTS");
    expect(linkToEvents).toBeInTheDocument();

    let linkToStats = screen.getByText("STATS");
    expect(linkToStats).toBeInTheDocument();

    let linkToContact = screen.getByText("CONTACT");
    expect(linkToContact).toBeInTheDocument();
  });
});


