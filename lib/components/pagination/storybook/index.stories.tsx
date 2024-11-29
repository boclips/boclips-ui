import { Meta, StoryObj } from '@storybook/react';
import { List, ConfigProvider } from 'antd';
import { Pagination as PaginationComponent } from '..';

const meta = {
  title: 'Pagination',
  component: PaginationComponent,
} satisfies Meta<typeof PaginationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pagination: Story = {
  args: {
    mobileView: false,
    currentPage: 2,
    totalItems: 133,
    buttonType: 'prev',
    page: 1,
  },
  argTypes: {
    mobileView: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ mobileView, currentPage, totalItems }) => (
    <ConfigProvider
      theme={{
        hashed: false,
      }}
    >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          total: totalItems,
          pageSize: 10,
          showSizeChanger: false,
          current: currentPage,
          responsive: false,
          size: 'small',
          align: 'start',
          showLessItems: mobileView,
          prefixCls: 'bo-pagination',
          itemRender: (page, type) => (
            <PaginationComponent
              buttonType={type}
              page={page}
              mobileView={mobileView}
              currentPage={currentPage}
              totalItems={Math.ceil(totalItems / 10)}
            />
          ),
        }}
      />
    </ConfigProvider>
  ),
};
