import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { List } from "antd";
import c from "classnames";
import Pagination from "../src";
// @ts-ignore
import s from "../src/styles.module.less";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

interface Props {
  mobile: boolean;
}

const currentPage = 2;
const totalItems = 133;
const pageSize = 10;

const Template: Story<Props> = ({ mobile }: Props) => (
  <div>
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        total: totalItems,
        className: c(s.pagination, {
          [s.paginationEmpty]: false,
        }),
        pageSize: 10,
        showSizeChanger: false,
        current: currentPage,
        responsive: false,
        size: "small",
        showLessItems: mobile,
        prefixCls: "bo-pagination",
        itemRender: (page, type) => {
          return (
            <Pagination
              buttonType={type}
              page={page}
              mobileView={mobile}
              currentPage={currentPage}
              totalItems={Math.ceil(totalItems / pageSize)}
            />
          );
        },
      }}
    />
  </div>
);

export const BASE = Template.bind({});

BASE.args = {
  mobile: false,
};
