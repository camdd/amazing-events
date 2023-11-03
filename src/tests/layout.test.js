/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../layouts/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Layout />', () => {
  test('testeo layout', () => {
    render(
      <Router>
        <Layout />
      </Router>
    );

    let layoutElement = screen.getByRole("layoutContainer");
    expect(layoutElement).toBeInTheDocument();

    let headerElement = screen.getByRole("headerElement");
    expect(headerElement).toBeInTheDocument();

    let footerElement = screen.getByRole("footerElement");
    expect(footerElement).toBeInTheDocument();
  });
});