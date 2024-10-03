const UserDuration = ({ timer, speedTimer, onIncreaseSpeed, onDecreaseSpeed }) => {
  return (
    <div>
      <p>Vrijeme provedeno na stranici: {timer}</p>
      <button onClick={onDecreaseSpeed}>🏃🏃🏃 Uspori </button>
      <button onClick={onIncreaseSpeed}>Ubrzaj 🏃‍♂️‍➡️🏃‍♂️‍➡️🏃‍♂️‍➡️</button>
      {timer >= 5 && <span>Uau, ovdje si duže od 5 sekundi. Predobro! 🔥🔥</span>}

      <h4>Brzina: {speedTimer}ms</h4>
    </div>
  );
};

export default UserDuration;
