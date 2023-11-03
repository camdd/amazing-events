/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFilter from '../components/SearchFilter';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<SearchFilter />', () => {
  test('testeo SearchFilter', () => {
    render(
      <Router>
        <SearchFilter eventName="" handleInputChange={() => {}} />
      </Router>
    );

    let searchElement = screen.getByRole("searchElement");
    expect(searchElement).toBeInTheDocument();
  });
});

