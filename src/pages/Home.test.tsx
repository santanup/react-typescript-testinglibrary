import React from 'react';
import { render, fireEvent } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
    const {container, history, getByText} = render(<Home />, {});

    // check header
    expect(getByText('Welcome!')).toBeTruthy();

    // check content with a different way
    const content = container.querySelector('p');
    expect(content).toBeTruthy();
    expect(content).toHaveTextContent('Looks good');

    // check about link
    const link = getByText('Go to about');
    expect(link).toBeTruthy();
    fireEvent.click(link);
    expect(history.location.pathname).toEqual("/about");
});
