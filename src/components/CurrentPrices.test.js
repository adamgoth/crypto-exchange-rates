import React from 'react';
import { shallow } from 'enzyme';

import CurrentPrices from './CurrentPrices';

describe('Component: CurrentPrices', () => {
  it('renders a section container, header, and prices container', () => {
    const wrapper = shallow(<CurrentPrices />);

    expect(wrapper.find('.section-container').exists()).toBe(true);
    expect(wrapper.find('.section-header').exists()).toBe(true);
    expect(wrapper.find('.price-containers').exists()).toBe(true);
  });
});
