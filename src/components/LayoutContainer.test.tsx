import React from 'react';
import { render, fireEvent } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
    const {getByText, history} = render(<LayoutContainer/>, {});
    const link = getByText('Go to about');

    // check about link exist
    expect(link).toBeTruthy();
    expect(link).toHaveTextContent('Go to about');

    // goto about page
    fireEvent.click(link);

    // check location pathname should "/about"
    expect(history.location.pathname).toEqual("/about");
});
