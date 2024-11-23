// Set the event date and time for 3:00 AM EST on November 23, 2024
const eventDate = new Date("November 23, 2024 03:00:00 EST").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Calculate time in days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "<h2>It's time for the event!</h2>";
  }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
