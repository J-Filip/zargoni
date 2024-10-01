import { useState } from 'react';
import UserDuration from './UserDuration';

const Header = () => {
  const [timer, setTimer] = useState(0);
  const [speedTimer, setSpeedTimer] = useState(1000);

  setTimeout(() => {
    setTimer(timer + 1);
  }, speedTimer);

  const increaseSpeedTimer = () => setSpeedTimer(speedTimer - 100);
  const decreaseSpeedTimer = () => setSpeedTimer(speedTimer + 100);

  return (
    <div>
      <UserDuration timer={timer} speedTimer={speedTimer} onIncreaseSpeed={increaseSpeedTimer} onDecreaseSpeed={decreaseSpeedTimer} />
      <h1>Žargonizam</h1>
    </div>
  );
};

export default Header;
