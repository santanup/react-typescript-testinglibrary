import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
    const {getByText, container} = render(<About />, {});

    // check about page header
    expect(getByText('About Page')).toBeTruthy();

    // check increment button
    const incrementButton = container.querySelector('button');
    expect(incrementButton).toBeTruthy();
    expect(incrementButton).toHaveTextContent('Increment');

    // check content
    const content = container.querySelector('p');
    expect(content).toBeTruthy();
    expect(content).toHaveTextContent(/(Current Count:.(\d$))/g);
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
    const {getByText, container} = render(<About />, {});
    const incrementButton = getByText('Increment');
    expect(incrementButton).toBeTruthy();

    // check initial count
    const content = container.querySelector('p');
    expect(content).toHaveTextContent('Current Count: 0');

    // check incremented count
    userEvent.click(incrementButton);
    expect(content).toHaveTextContent('Current Count: 1');

    // verify continuous incremented count
    userEvent.click(incrementButton);
    expect(content).toHaveTextContent('Current Count: 2');
});
