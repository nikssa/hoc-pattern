import { Props } from './types';
import WithMouse from './WithMouse';

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
