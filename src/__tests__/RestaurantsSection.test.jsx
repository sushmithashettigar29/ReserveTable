import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantsSection from '../components/RestaurantsSection';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const mockUser = { favorites: [] };
const mockToggleFavorite = jest.fn();

describe('RestaurantsSection', () => {
  beforeEach(() => {
    render(
      <AuthContext.Provider
        value={{ user: mockUser, toggleFavorite: mockToggleFavorite }}
      >
        <BrowserRouter>
          <RestaurantsSection />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  });

  it('renders header correctly', () => {
    const header = screen.getByRole('heading', {
      name: /Explore Our Restaurants/i,
    });
    expect(header).toBeInTheDocument();
  });

  it('search input works', () => {
    const input = screen.getByPlaceholderText(/Search restaurants/i);
    fireEvent.change(input, { target: { value: 'Pizza' } });
    expect(input.value).toBe('Pizza');
  });

  it('renders at least one restaurant from data', () => {
    const restaurantName = screen.getByText(/The Catalyzer/i);
    expect(restaurantName).toBeInTheDocument();
  });

  it('favorite button calls toggleFavorite', () => {
    const favButton = screen.getAllByText('♥')[0];
    fireEvent.click(favButton);
    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it('reserve button is clickable', () => {
    const reserveButton = screen.getAllByText(/Reserve Table/i)[0];
    expect(reserveButton).toBeInTheDocument();
    fireEvent.click(reserveButton);
  });
});
