import React, {ReactElement} from 'react'
import { Col, Layout, Row } from "antd";
import BoclipsLogoSVG from "./resources/boclips-logo.svg";
import s from "./styles.module.less";

export interface Props {
  children: React.ReactNode;
}

const HeaderWithLogo = ({ children }: Props): ReactElement => (
  <Layout.Header className={s.header}>
    <Row
      data-qa="header-with-logo"
      gutter={[16, 16]}
      align="middle"
      className={s.headerBody}
    >
      <Col span={4}>
        <div className={s.headerContent}>
          <BoclipsLogoSVG />
        </div>
      </Col>
      <Col span={16}>
        <div className={s.headerContent}>{children}</div>
      </Col>
    </Row>
  </Layout.Header>
);

export default HeaderWithLogo;
