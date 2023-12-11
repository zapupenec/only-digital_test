import { FC } from 'react';
import { Button, IButtonProps } from '../../button';

export const PaginationButton: FC<IButtonProps> = ({ className, ...props }) => {
  return <Button className={className} {...props} />;
};
