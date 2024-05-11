import { Props } from './types';
import WithMouse from './WithMouse';

function App(props: Props) {
  const { x, y } = props.mouse;
  const handleMouseMove = props.onMouseMove;

  return (
    <div
      className='mouse'
      style={{ height: '100vh', width: '100vw' }}
      onMouseMove={handleMouseMove}>
      <h1>
        The mouse position is: {x}, {y}
      </h1>
      <div
        className='cat'
        style={{ position: 'absolute', left: x, top: y }}></div>
    </div>
  );
}

const AppWithMouse = () => WithMouse(App);

export default AppWithMouse;
