import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render the dashboard', () => {
    render(<Dashboard />);
  });
});
