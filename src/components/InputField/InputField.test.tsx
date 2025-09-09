import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import InputField from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(<InputField label="Username" placeholder="Enter your username" />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('displays an error message when invalid', () => {
    render(<InputField label="Email" invalid errorMessage="Invalid email format" />);

    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<InputField label="Read Only" disabled />);

    const input = screen.getByLabelText('Read Only');
    expect(input).toBeDisabled();
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<InputField label="Name" onChange={handleChange} />);

    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'Alice' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
