import { fireEvent, render } from '@testing-library/react';
import { VideoCard } from './index';
import { exampleVideo } from './storybook/videoExample';

describe('VideoCard', () => {
  it('shows all badges', () => {
    const card = render(<VideoCard video={exampleVideo} />);

    expect(card.getByText('Ages 5-8')).toBeInTheDocument();
    expect(card.getByText('Art History')).toBeInTheDocument();
    expect(card.getByText('Art History 1')).toBeInTheDocument();
    expect(card.getByText('Art History 2')).toBeInTheDocument();
    expect(card.getByText('Art History 3')).toBeInTheDocument();
    expect(card.getByText('Art History 4')).toBeInTheDocument();
    expect(card.getByText('Art History 5')).toBeInTheDocument();
    expect(card.getByText('Higher education')).toBeInTheDocument();
    expect(card.getByText('Adult Education')).toBeInTheDocument();
  });

  it('display the duration correctly when undefined in minutes place', () => {
    const duration = 'undefined:21';

    const card = render(<VideoCard duration={duration} video={exampleVideo} />);

    expect(card.getByText('00:21')).toBeInTheDocument();
  });

  it('display the duration correctly when undefined in seconds place', () => {
    const duration = '21:undefined';

    const card = render(<VideoCard duration={duration} video={exampleVideo} />);

    expect(card.getByText('21:00')).toBeInTheDocument();
  });

  it('can display an additional top badge in the card', () => {
    const card = render(
      <VideoCard video={exampleVideo} topBadge={<div>Hello</div>} />
    );

    expect(card.getByText('Hello')).toBeVisible();
  });

  it(`can override createdBy with a clickable custom element`, () => {
    const clickSpy = vi.fn();

    const card = render(
      <VideoCard
        video={exampleVideo}
        topBadge={<div>Hello</div>}
        createdBy={
          <button type="button" onClick={clickSpy()}>
            clicky
          </button>
        }
      />
    );
    fireEvent.click(card.getByText('clicky'));
    expect(clickSpy).toBeCalledTimes(1);
  });
});
