import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationSection from '../components/ReservationSection';

// Mock alert (so it won’t break tests)
window.alert = jest.fn();

describe('ReservationSection Component', () => {
  test('renders all input fields', () => {
    render(<ReservationSection restaurantName="The Catalyzer" />);

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Seats/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Restaurant/i)).toBeInTheDocument();
  });

  test('shows error messages for empty fields', () => {
    render(<ReservationSection />);

    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));

    expect(screen.getByText(/Full Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Seats are required/i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please select a restaurant/i)).toBeInTheDocument();
  });

  test('submits form successfully when all fields are valid', () => {
    render(<ReservationSection />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), {
      target: { value: '9876543210' },
    });
    fireEvent.change(screen.getByLabelText(/Number of Seats/i), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: '19:00' },
    });
    fireEvent.change(screen.getByLabelText(/Restaurant/i), {
      target: { value: 'The Catalyzer' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));

    expect(window.alert).toHaveBeenCalledWith(
      'Booking submitted for The Catalyzer!'
    );
  });
});
