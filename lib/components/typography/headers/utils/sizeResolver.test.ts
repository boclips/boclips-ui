import { breakpoints } from '@/types/mediaBreakpoints';
import { DeviceAwareHeaderSize } from '../types';
import { findSizeFromCurrentDevice } from './sizeResolver';

describe('size resolver', () => {
  it('returns the size that exactly matches the device', () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: 'sm',
      tablet: 'md',
      desktop: 'lg',
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.mobile)).toEqual('sm');
    expect(findSizeFromCurrentDevice(sizes, breakpoints.tablet)).toEqual('md');
    expect(findSizeFromCurrentDevice(sizes, breakpoints.desktop)).toEqual('lg');
  });

  it('returns the size of the next matching breakpoint if no direct match', () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: 'sm',
      tablet: 'md',
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.desktop)).toEqual('md');
  });

  it('returns size of only breakpoints that are equal or smaller than the current device', () => {
    const sizes: DeviceAwareHeaderSize = {
      mobile: 'sm',
      desktop: 'md',
    };

    expect(findSizeFromCurrentDevice(sizes, breakpoints.tablet)).toEqual('sm');
  });

  it('returns null if no matching size found', () => {
    const sizes: DeviceAwareHeaderSize = { tablet: 'sm', desktop: 'lg' };

    expect(
      findSizeFromCurrentDevice(sizes, breakpoints.mobile)
    ).toBeUndefined();
  });
});
