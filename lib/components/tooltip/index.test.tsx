import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from '.';

describe('tooltip', () => {
  it('tooltip appears when mouse over is triggered', async () => {
    const text = 'this is a tooltip text';

    const wrapper = render(
      <Tooltip text={text} asChild>
        <button type="button">test button</button>
      </Tooltip>
    );

    expect(wrapper.queryByText(text)).not.toBeInTheDocument();

    await userEvent.hover(wrapper.getByRole('button'));

    await waitFor(() =>
      expect(wrapper.getByRole('tooltip')).toBeInTheDocument()
    );
  });

  it('tooltip can take content as react node', async () => {
    const wrapper = render(
      <Tooltip text={<div>This is react node content</div>} asChild>
        <button type="button">test button</button>
      </Tooltip>
    );

    expect(
      wrapper.queryByText('This is react node content')
    ).not.toBeInTheDocument();

    await userEvent.hover(wrapper.getByRole('button'));

    await waitFor(() =>
      expect(wrapper.getByRole('tooltip')).toBeInTheDocument()
    );
  });
});
