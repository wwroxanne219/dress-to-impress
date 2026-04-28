// Large event countdown for the fashion show launch.
(function () {
  'use strict';

  var countdownEl = document.getElementById('show-countdown');
  var daysEl = document.getElementById('countdown-days');
  var hoursEl = document.getElementById('countdown-hours');
  var minutesEl = document.getElementById('countdown-minutes');
  var secondsEl = document.getElementById('countdown-seconds');
  var liveEl = document.getElementById('countdown-live');
  if (!countdownEl || !daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  var fashionShowDate = new Date('2026-05-13T19:00:00');

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function setNumbers(days, hours, minutes, seconds) {
    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  function render() {
    var now = new Date();
    var diffMs = fashionShowDate.getTime() - now.getTime();

    if (diffMs <= 0) {
      setNumbers(0, 0, 0, 0);
      countdownEl.classList.add('show-countdown--live');
      if (liveEl) liveEl.style.display = 'block';
      return true;
    }

    var totalSeconds = Math.floor(diffMs / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    setNumbers(days, hours, minutes, seconds);
    countdownEl.classList.remove('show-countdown--live');
    if (liveEl) liveEl.style.display = 'none';
    return false;
  }

  var timer = window.setInterval(function () {
    if (render()) {
      window.clearInterval(timer);
    }
  }, 1000);

  render();
})();
