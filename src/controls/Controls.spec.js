import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should display "unlock gate" when locked is true', () => {
    const { getByText } = render(<Controls locked={true} />);
    expect(getByText(/unlock gate/i)).toBeVisible();
  });
  it('should display "lock gate" when locked is false', () => {
    const { getByText } = render(<Controls locked={false} />);
    expect(getByText(/lock gate/i)).toBeVisible();
  });
  it('should display "open gate" when closed is true', () => {
    const { getByText } = render(<Controls closed={true} />);
    expect(getByText(/open gate/i)).toBeVisible();
  });
  it('should display "close gate" when closed is false', () => {
    const { getByText } = render(<Controls closed={false} />);
    expect(getByText(/close gate/i)).toBeVisible();
  });
  it('should call toggleLocked when lock button is clicked', () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls locked={false} closed={true} toggleLocked={toggleLocked} />
    );
    getByText(/lock gate/i).click();
    expect(toggleLocked).toBeCalled();
  });
  it('should call toggleClosed when close button is clicked', () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(
      <Controls locked={false} closed={false} toggleClosed={toggleClosed} />
    );
    getByText(/close gate/i).click();
    expect(toggleClosed).toBeCalled();
  });
  it('should disable lock button when open', () => {
    const { getByText } = render(<Controls closed={false} />);
    const lockBtn = getByText(/lock gate/i);
    expect(lockBtn).toHaveAttribute('disabled');
  });
  it('should disable open button when locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    const openBtn = getByText(/open gate/i);
    expect(openBtn).toHaveAttribute('disabled');
  });
});
