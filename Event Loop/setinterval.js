function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Pad with 0 if less than 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Run immediately to avoid delay
updateClock();

// Then update every 1 second
setInterval(updateClock, 1000);
