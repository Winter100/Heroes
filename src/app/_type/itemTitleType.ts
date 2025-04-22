import { ComponentProps } from 'react';

export interface ItemTitleType extends ComponentProps<'div'> {
  name: string;
  level: string;
}
