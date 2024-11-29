import { Breakpoint, breakpoints, Device } from '@/types/mediaBreakpoints';
import {
  HeaderSizeWithWeight,
  HeaderSize,
  DeviceAwareHeaderSize,
} from '../types';

export const findSizeFromCurrentDevice = (
  deviceAwareSizes: DeviceAwareHeaderSize,
  currentDevice: Device
): HeaderSize | HeaderSizeWithWeight | undefined => {
  const sizeMatchingCurrentDevice = deviceAwareSizes[currentDevice.type];

  if (sizeMatchingCurrentDevice) {
    return sizeMatchingCurrentDevice;
  }

  const sortedDevices = Object.keys(deviceAwareSizes)
    .map(device => breakpoints[device as Breakpoint])
    .filter(device => device.maxWidth <= currentDevice.maxWidth)
    .sort((a, b) => b.maxWidth - a.maxWidth);

  if (sortedDevices.length > 0) {
    const nextLargestDevice = sortedDevices[0];
    return deviceAwareSizes[nextLargestDevice.type];
  }

  return undefined;
};
