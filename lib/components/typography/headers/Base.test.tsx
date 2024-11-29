import { render } from '@testing-library/react';
import { Base } from './Base';
import { resizeToTablet } from '../testSupport/resizeTo';

describe('Base', () => {
  it('renders correct heading level', () => {
    const h1 = render(<Base size="lg" as="h1" />);
    const h2 = render(<Base size="lg" as="h2" />);

    expect(h1.getByRole('heading', { level: 1 })).toBeVisible();
    expect(h2.getByRole('heading', { level: 2 })).toBeVisible();
  });

  it('renders correct size class name with simple size', () => {
    const wrapper = render(<Base size="lg" as="h1" />);
    expect(wrapper.container.firstChild).toHaveClass('lg');
  });

  it('renders correct size class for device size', () => {
    resizeToTablet();

    const wrapper = render(<Base size={{ mobile: 'sm', tablet: 'md' }} as="h1" />);

    expect(wrapper.container.firstChild).toHaveClass('md');
  });

  it('renders correct weight classname when size is xs', () => {
    const wrapper = render(<Base size="xs" weight="regular" as="h1" />);

    expect(wrapper.container.firstChild).toHaveClass('xs');
    expect(wrapper.container.firstChild).toHaveClass('regular');
  });

  it('renders correct nested size and weight class names for device size', () => {
    resizeToTablet();

    const wrapper = render(<Base size={{ mobile: 'sm', tablet: { size: 'xs', weight: 'medium' } }} as="h1" />);

    expect(wrapper.container.firstChild).toHaveClass('xs');
    expect(wrapper.container.firstChild).toHaveClass('medium');
  });
});
