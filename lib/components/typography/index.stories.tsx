import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta = {
  title: 'Typography',
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  render: () => (
    <div>
      <Typography.H1 id="hello">Hello, this is a H1</Typography.H1>
      <Typography.H2>Hello, this is a H2</Typography.H2>
      <Typography.H3>Hello, this is a H3</Typography.H3>
      <Typography.H4>Hello, this is a H4</Typography.H4>
      <Typography.H5>Hello, this is a H5</Typography.H5>
      <Typography.H6>Hello, this is a H6</Typography.H6>

      <hr />
      <Typography.H1 size="sm" id="hello">
        Hello, this is a small H1
      </Typography.H1>
      <Typography.H2 size="xs" weight="regular">
        Hello, this is an xs H2
      </Typography.H2>
      <Typography.H3 size="lg">Hello, this is a l H3</Typography.H3>
      <Typography.H4 size="xl">Hello, this is a xl H4</Typography.H4>
      <Typography.H5 className="hello" size={{ mobile: 'md', tablet: 'lg', desktop: 'xl' }}>
        Hello, this is a dynamic H5
      </Typography.H5>
      <Typography.H6
        size={{
          mobile: 'xl',
          tablet: { size: 'xs', weight: 'medium' },
          desktop: { size: 'xs', weight: 'regular' },
        }}
      >
        Hello, this is a dynamic H6
      </Typography.H6>

      <hr />

      <Typography.Title1 className="hello" as="div">
        Hello, this is Title1
      </Typography.Title1>
      <Typography.Title2 as="div">Hello, this is Title2</Typography.Title2>
      <div>
        <Typography.Body id="hello">Hello, this is a Body</Typography.Body>
      </div>
      <div>
        <Typography.Body weight="medium">Hello, this is Body medium</Typography.Body>
      </div>
      <div>
        <Typography.Body size="small">Hello, this is small Body</Typography.Body>
      </div>
      <Typography.Body weight="medium" size="small" as="div">
        Hello, this is small Body medium
      </Typography.Body>
      <hr />
      <Typography.Title1>
        <Typography.Link>Hello</Typography.Link>
      </Typography.Title1>
      <br />
      <Typography.Link type="inline-gray">Hello</Typography.Link>
      <br />
      <Typography.Link type="inline-blue">Hello</Typography.Link>
    </div>
  ),
};
