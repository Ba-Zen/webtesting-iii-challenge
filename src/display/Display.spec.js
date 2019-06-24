import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);
// cleans up after each test - avoid multiples error

describe('<Display />', () => {
  it('should show "unlocked" when no locked prop passed', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toBeVisible;
  });
  it('should show "open" when no closed prop passed', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/open/i)).toBeVisible;
  });
  it('should show "open" when no closed prop passed', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/open/i)).toBeVisible;
  });
  it('should show "locked" when locked is true', () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toBeVisible;
  });
  it('should show "unlocked" when locked is false', () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i)).toBeVisible;
  });
  it('should show "closed" when closed is true', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toBeVisible;
  });
  it('should show "open" when closed is false', () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toBeVisible;
  });
  it('should show red-led when locked is true', () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toHaveClass('red-led');
  });
  it('should show red-led when closed is true', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toHaveClass('red-led');
  });
  it('should show green-led when unlocked is false', () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/locked/i)).toHaveClass('green-led');
  });
  it('should show green-led when closed is false', () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toHaveClass('green-led');
  });
});
