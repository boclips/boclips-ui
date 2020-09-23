import React, { ReactElement } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import s from "./styles.module.less";

interface DurationProps {
  duration?: string;
}

const Duration = ({ duration }: DurationProps): ReactElement => {
  const durationFormatter = (d: string) =>
    d.replace("PT", "").replace("H", "h ").replace("M", "m ").replace("S", "s");

  return (
    <div className={s.duration}>
      <ClockCircleOutlined className={s.clock} />
      <span>{durationFormatter(duration!!)}</span>
    </div>
  );
};

export default Duration;
