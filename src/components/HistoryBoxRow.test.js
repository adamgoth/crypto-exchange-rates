import React from 'react';
import { shallow } from 'enzyme';

import HistoryBoxRow from './HistoryBoxRow';

describe('Component: HistoryBoxRow', () => {
  const mockProps = {"exchange": "CoinCap", "price": "0.07555250", "datetime": "2017-09-02T21:21:54.939Z" };

  it('renders row if props exist', () => {
    const wrapper = shallow(<HistoryBoxRow exchange={mockProps["exchange"]} price={mockProps["price"]} datetime={mockProps["datetime"]} />);

    expect(wrapper.find('.history-box').exists()).toBe(true);
    expect(wrapper.find('.history-exchange').exists()).toBe(true);
    expect(wrapper.find('.history-price').exists()).toBe(true);
    expect(wrapper.find('.history-date').exists()).toBe(true);
  });
});
