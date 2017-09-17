import React from 'react';
import { shallow } from 'enzyme';

import CoinBoxRow from './CoinBoxRow';

describe('Component: CoinBoxRow', () => {
  const mockProps = {"exchange": "CoinCap", "price": "0.07555250", "row": "1" };

  it('renders row if props exist', () => {
    const wrapper = shallow(<CoinBoxRow exchange={mockProps["exchange"]} price={mockProps["price"]} row={mockProps["row"]} />);

    expect(wrapper.find('.price-box').exists()).toBe(true);
    expect(wrapper.find('.price').exists()).toBe(true);
    expect(wrapper.find('.exchange').exists()).toBe(true);
  });
});
