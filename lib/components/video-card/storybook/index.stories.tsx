import { Meta, StoryObj } from '@storybook/react';
import { Player } from 'boclips-player-react';
import dayjs from 'dayjs';
import { VideoCard } from '..';
import { exampleVideo } from './videoExample';
import s from './styles.module.less';
import { TaxonomyCategoryBadgeFactory } from '../../taxonomy-category-badge';
import 'boclips-player-react/dist/style.css';

import dur from 'dayjs/plugin/duration';

dayjs.extend(dur);

const meta = {
  title: 'Video Card',
  component: VideoCard,
} satisfies Meta<typeof VideoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const duration = exampleVideo.playback.duration.format('mm:ss');

const ActionButtons = () => {
  const onClick = () => null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      <button type="button" onClick={onClick}>
        I am ugly and I know it
      </button>
    </div>
  );
};
export const Short: Story = {
  args: {
    video: exampleVideo,
    duration,
    title: <div className={s.truncate}>{exampleVideo.title}</div>,
    videoPlayer: (
      <Player videoUri={exampleVideo.links.self.getOriginalLink()} />
    ),
    actions: <ActionButtons />,
    additionalBadges: TaxonomyCategoryBadgeFactory.fromTaxonomy(
      exampleVideo.taxonomy
    ),
    topBadge: <div>$600</div>,
  },
};
