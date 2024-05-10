import { FunctionComponent, MouseEvent, useState } from 'react';

type Props = { mouse: { x: number; y: number } };

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

function App(props: Props) {
  const { x, y } = props.mouse;

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1>
        The mouse position is: {x}, {y}
      </h1>
    </div>
  );
}

const AppWithMouse = () => WithMouse(App);

export default AppWithMouse;
