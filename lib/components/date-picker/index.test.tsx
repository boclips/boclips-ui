import { render, screen } from '@testing-library/react';
import { DatePicker } from '.';

describe('date picker', () => {
  it('renders date select', () => {
    const wrapper = render(<DatePicker label="From:" onChange={vi.fn()} />);
    expect(wrapper.getByText('From:')).toBeVisible();
  });

  it('adds onChange event listener', () => {
    const spy = vi.fn();

    render(<DatePicker label="date-select" id="date" onChange={spy} />);

    const duetChangeEvent = new Event('duetChange');

    screen
      .getByText('date-select')
      .lastElementChild?.dispatchEvent(duetChangeEvent);

    expect(spy).toHaveBeenCalled();
  });
});
