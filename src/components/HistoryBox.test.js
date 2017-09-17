import React from 'react';
import { shallow } from 'enzyme';

import HistoryBox from './HistoryBox';

describe('Component: HistoryBox', () => {
  const mockData = [{"exchange": "CoinCap", "price": "0.07555250", "datetime": "2017-09-02T21:21:54.939Z" }];
  const mockTitle = "test";

  it('renders loading div if price history does not exist', () => {
    const wrapper = shallow(<HistoryBox priceHistory={[]} />);

    expect(wrapper.find('div').text()).toEqual("Loading...");
  });

  it('renders history-box if price history exists', () => {
    const wrapper = shallow(<HistoryBox priceHistory={mockData} />);

    expect(wrapper.find('.history-container').exists()).toBe(true);
  });

  it('has a title if coin data exists', () => {
    const wrapper = shallow(<HistoryBox priceHistory={mockData} title={mockTitle} />);

    expect(wrapper.find('.history-header').exists()).toBe(true);
    expect(wrapper.find('.history-header').text()).toEqual(mockTitle);
  });
});
