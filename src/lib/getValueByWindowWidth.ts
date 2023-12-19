export const getValueByWindowWidth = (
  minValue: number,
  maxValue: number,
  width: number,
  minSize: number,
  maxSize: number,
) => {
  if (width > minSize && width < maxSize) {
    return minValue + ((maxValue - minValue) * (width - minSize)) / (maxSize - 1 - minSize);
  }
  if (width <= minSize) {
    return minValue;
  }
  return maxValue;
};
