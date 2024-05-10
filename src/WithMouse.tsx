import { FunctionComponent, MouseEvent, useState } from 'react';
import { Props } from './types';

function WithMouse(Component: FunctionComponent<Props>) {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Component mouse={state} />
    </div>
  );
}

export default WithMouse;
