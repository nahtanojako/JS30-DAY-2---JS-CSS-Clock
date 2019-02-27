(function(){

  const secondHand = document.querySelector('.sec-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const h = document.querySelector('.hour');
  const m = document.querySelector('.min');
  const s = document.querySelector('.sec');


  function setTime() {

    // create new date object
    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    // Make hours up to 12 only
    let hours = now.getHours();

    const secondsDegree = ((seconds / 60) * 360);
    const minutesDegree = ((minutes / 60) * 360);
    const hoursDegree = ((hours / 12) * 360);

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    // make the time 2 digit make sure you do not declare const to your variables
    if(hours < 10){
      hours = "0" + hours;
    } 
    if(hours > 12) {
      hours = hours - 12;
    }
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    if(seconds < 10) {
      seconds = "0" + seconds;
    }


    h.innerHTML = hours + ":";
    m.innerHTML = minutes + ":";
    s.innerHTML = seconds;
  }

  setInterval(setTime, 1000);

  setTime();

})()