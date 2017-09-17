import React from 'react';
import { shallow } from 'enzyme';

import CoinBox from './CoinBox';

describe('Component: CoinBox', () => {
  const mockData = [{ "exchange": "CoinCap", "price": "0.07555250" }];
  const mockTitle = "test";

  it('renders loading div if coin data does not exist', () => {
    const wrapper = shallow(<CoinBox coinData={[]} />);

    expect(wrapper.find('div').text()).toEqual("Loading...");
  });

  it('renders price-box if coin data exists', () => {
    const wrapper = shallow(<CoinBox coinData={mockData} />);

    expect(wrapper.find('.price-container').exists()).toBe(true);
  });

  it('has a title if coin data exists', () => {
    const wrapper = shallow(<CoinBox coinData={mockData} title={mockTitle} />);

    expect(wrapper.find('.price-header').exists()).toBe(true);
    expect(wrapper.find('.price-header').text()).toEqual(mockTitle);
  });
});
