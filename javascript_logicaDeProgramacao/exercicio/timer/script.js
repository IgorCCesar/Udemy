const clock = () => {
  const clock = document.querySelector('.clock');

  let seconds = 0;
  let timer;

  const createTimeOfSeconds = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  };

  const startClock = () => {
    timer = setInterval(() => {
      seconds++;
      clock.innerHTML = createTimeOfSeconds(seconds);
    }, 1000);  
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = `00:00:00`;
  };


  document.addEventListener('click', (e) => {
    const element = e.target;

    if(element.classList.contains('btnGreen')) {
      clock.classList.remove('stop');
      clearInterval(timer);
      startClock();
    };

    if(element.classList.contains('btnRed')) {
      clock.classList.add('stop');
      stopTimer();
    };

    if(element.classList.contains('btn')) {
      clock.classList.remove('stop');
      resetTimer();
    };
  });

};

clock()