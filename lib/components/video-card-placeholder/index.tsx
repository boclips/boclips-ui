import s from './styles.module.less';

interface VideoCardPlaceholderProps {
  displayHeader?: boolean;
}

export const VideoCardPlaceholder = ({
  displayHeader = true,
}: VideoCardPlaceholderProps) => (
  <div className={s.videoCardSkeleton}>
    {displayHeader && (
      <div className={s.header} style={{ width: '70%' }}>
        <div className={s.blockLine} />
        <div className={s.blockLine} />
      </div>
    )}
    <div className={s.body}>
      <div className={s.videoplayer} />

      <div className={s.right}>
        <div className={s.badges}>
          <div className={s.badge} />
          <div className={s.badge} />
        </div>
        <div className={s.blockLine} />
        <div className={s.blockLine} />
        <div className={s.blockLine} />
      </div>
    </div>
  </div>
);
