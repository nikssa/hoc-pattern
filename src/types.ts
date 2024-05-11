import { MouseEvent } from 'react';

export type Props = {
  mouse: { x: number; y: number };
  onMouseMove: (event: MouseEvent) => void;
};
