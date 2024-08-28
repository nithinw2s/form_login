import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/login';  // Adjust the import path according to your file structure
// import '@testing-library/jest-dom/extend-expect';

// Mock `useNavigate` from `react-router-dom`
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Login Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  it('renders login form correctly', () => {
    expect(screen.getByText('LogIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('displays validation errors on empty submit', async () => {
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('displays error message for invalid credentials', async () => {
    // Simulate user input
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'invalidpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Mock failed login response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: 'Invalid login credentials' })
      })
    );

    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
    });
  });

  it('navigates to home page on successful login', async () => {
    // Mock successful login response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ token: 'valid_token' })
      })
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'valid@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'validpassword' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/auth/login', expect.any(Object));
      expect(screen.queryByText('Invalid email or password')).not.toBeInTheDocument();
    });
  });
});
