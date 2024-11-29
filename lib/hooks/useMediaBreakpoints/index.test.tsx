import { act } from 'react';
import { render } from '@testing-library/react';
import { useMediaBreakPoint } from './index';

const setWidth = (width: number) => {
  window.innerWidth = width;
  act(() => {
    window.dispatchEvent(new Event('resize'));
  });
};

const WithWidthBreakpointComponent = () => {
  const breakpoint = useMediaBreakPoint();

  return <div data-breakpoint-type={breakpoint.type}>get me</div>;
};

describe('breakpoints', () => {
  it('injects correct props to child component when sm width', () => {
    setWidth(320);
    const wrapper = render(<WithWidthBreakpointComponent />);

    expect(wrapper.getByText('get me').getAttribute('data-breakpoint-type')).toEqual('mobile');
  });

  it('injects correct props to child component when md width', () => {
    setWidth(768);
    const wrapper = render(<WithWidthBreakpointComponent />);

    expect(wrapper.getByText('get me').getAttribute('data-breakpoint-type')).toEqual('tablet');
  });

  it('injects correct props to child component when lg width', () => {
    setWidth(1148);
    const wrapper = render(<WithWidthBreakpointComponent />);

    expect(wrapper.getByText('get me').getAttribute('data-breakpoint-type')).toEqual('desktop');
  });

  it('injects correct props to child component when window is resized', () => {
    setWidth(300);
    const wrapper = render(<WithWidthBreakpointComponent />);

    setWidth(1148);
    expect(wrapper.getByText('get me').getAttribute('data-breakpoint-type')).toEqual('desktop');
  });
});
