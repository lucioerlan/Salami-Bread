import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Card from '..';

const props = {
  id: 1,
  name: 'Awesome category',
  category_id: 1,
  category_name: 'Awesome category',
  product_id: 1,
  product_name: 'Awesome product',
};

describe('Card component', () => {
  beforeEach(() => {
    render(
      <Card
        data-testid="card"
        key={props?.id}
        id={props?.id}
        name={props?.name}
        category_id={props?.category_id}
        category_name={props?.category_name}
        product_id={props?.product_id}
        product_name={props?.product_name}
      />
    );
  });

  it('should render the Card component', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('should render the Card component with the correct text', () => {
    expect(screen.getByTestId('card')).toHaveTextContent('Awesome category');
  });

  it('should render the Card component with the correct text', () => {
    expect(screen.getByTestId('card')).toHaveTextContent('Awesome product');
  });
});
