import { render, screen } from '@testing-library/react';
import { ContentWarning } from 'boclips-api-client/dist/sub-clients/contentWarnings/model/ContentWarning';
import { ContentWarningBadge } from '.';

describe(`ContentWarningBadge`, () => {
  it(`renders the badge when content warnings are provided`, () => {
    const warnings: ContentWarning[] = [
      { label: 'contains lots of cheeky swear words', id: '123' },
    ];
    render(<ContentWarningBadge contentWarnings={warnings} />);

    expect(screen.getByTestId('content-warning')).toBeInTheDocument();
  });
  it(`does not render the badge when no content warnings are provided`, () => {
    const wrapper = render(<ContentWarningBadge contentWarnings={[]} />);

    expect(wrapper.queryByTestId('content-warning')).toBeNull();
  });
});
