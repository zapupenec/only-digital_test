import { FC, SVGProps } from 'react';

interface IIconArrowSvgProps extends SVGProps<SVGSVGElement> {}

export const IconArrowSvg: FC<IIconArrowSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="#3877EE"
      {...props}
    >
      <path d="M1 1L6 6L1 11" strokeWidth="2" />
    </svg>
  );
};
