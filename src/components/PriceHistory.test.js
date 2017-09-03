import React from 'react';
import { shallow } from 'enzyme';

import PriceHistory from './PriceHistory';

describe('Component: PriceHistory', () => {
  it('renders a section container, header, and prices container', () => {
    const wrapper = shallow(<PriceHistory />);

    expect(wrapper.find('.section-container').exists()).toBe(true);
    expect(wrapper.find('.section-header').exists()).toBe(true);
    expect(wrapper.find('.price-containers').exists()).toBe(true);
  });
});
