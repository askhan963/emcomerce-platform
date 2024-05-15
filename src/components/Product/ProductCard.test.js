import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('should render correctly', () => {
    const product = { id: 1, name: 'Test Product', description: 'Test Description', price: 100, image: '/test.jpg' };
    const wrapper = shallow(<ProductCard product={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});
