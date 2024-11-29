import { render } from '@testing-library/react';
import { Body } from '.';

describe('body', () => {
  it('can set the underlying component with a prop', () => {
    const wrapper = render(<Body as="button">Hello</Body>);

    expect(wrapper.getByRole('button', { name: 'Hello' })).toBeVisible();
  });
});
