import { useEffect, useRef, useState } from 'react';
import UserDuration from '../UserDuration';

const Header = () => {
  const myRef = useRef(document);
  const [timer, setTimer] = useState(0);
  const [speedTimer, setSpeedTimer] = useState(1000);
  const [totalClicks, setTotalClicks] = useState(0);

  setTimeout(() => {
    setTimer(timer + 1);
  }, speedTimer);

  const increaseSpeedTimer = () => setSpeedTimer(speedTimer - 100);
  const decreaseSpeedTimer = () => setSpeedTimer(speedTimer + 100);

  const handleClick = () => {
    setTotalClicks(totalClicks + 1);
  };

  useEffect(() => {
    myRef.current.addEventListener('click', handleClick);
    return () => {
      myRef.current.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <div>
      {totalClicks ? <h4>Broj klikova: {totalClicks}</h4> : 'Klikne me gdje god zelis...'}
      <UserDuration timer={timer} speedTimer={speedTimer} onIncreaseSpeed={increaseSpeedTimer} onDecreaseSpeed={decreaseSpeedTimer} />
      <h1>Žargonizam</h1>
    </div>
  );
};

export default Header;
