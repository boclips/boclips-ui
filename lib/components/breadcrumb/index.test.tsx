import { userEvent } from '@testing-library/user-event';
import { Breadcrumb, PreviousPageProps } from '.';
import { render } from '@testing-library/react';

describe('Accessible Breadcrumb', () => {
  it('can render a simple one stage breadcrumb', async () => {
    const callback = vi.fn();

    const breadcrumb = render(
      <Breadcrumb
        previousPages={[
          {
            onClick: callback,
            nestingLevel: 0,
            label: 'Source Page',
          },
        ]}
        currentPage="Current Page"
      />
    );

    await userEvent.click(breadcrumb.getByText('Source Page'));

    expect(callback.mock.calls.length).toBe(1);
    expect(breadcrumb.getByText('Current Page')).toBeVisible();
  });

  it('can render a multi stage breadcrumb', async () => {
    const callbackOne = vi.fn();
    const callbackTwo = vi.fn();

    const previousPages: PreviousPageProps[] = [
      {
        onClick: callbackOne,
        nestingLevel: 0,
        label: 'Source Page',
      },
      {
        onClick: callbackTwo,
        nestingLevel: 1,
        label: 'Previous Page',
      },
    ];

    const breadcrumb = render(
      <Breadcrumb previousPages={previousPages} currentPage="Current Page" />
    );

    await userEvent.click(breadcrumb.getByText('Source Page'));
    await userEvent.click(breadcrumb.getByText('Previous Page'));

    expect(callbackOne.mock.calls.length).toBe(1);
    expect(callbackTwo.mock.calls.length).toBe(1);
    expect(breadcrumb.getByText('Current Page')).toBeVisible();
  });
});
