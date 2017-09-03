import React from 'react';
import { mount, shallow } from 'enzyme';

import CoinBox from './CoinBox';

describe('Component: CoinBox', () => {
  const mockData = [{ "exchange": "CoinCap", "price": "0.07555250" }];
  const mockTitle = "test";

  it('renders loading div if coin data does not exist', () => {
    const wrapper = shallow(<CoinBox coinData={[]} />);

    expect(wrapper.find('div').text()).toEqual("Loading...");
  });

  it('renders price-box if coin data exists', () => {
    const wrapper = mount(<CoinBox coinData={mockData} />);

    expect(wrapper.find('.price-box').exists()).toBe(true);
    expect(wrapper.find('.exchange').exists()).toBe(true);
    expect(wrapper.find('.price').exists()).toBe(true);
  });

  it('has a title if coin data exists', () => {
    const wrapper = mount(<CoinBox coinData={mockData} title={mockTitle} />);

    expect(wrapper.find('.price-header').exists()).toBe(true);
    expect(wrapper.find('.price-header').text()).toEqual(mockTitle);
  });
});
