const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


const setDate = () => {
    const now = new Date();
    //deriving seconds from the date generated
    const seconds = now.getSeconds();
    //computing degree for rotation in relation to current seconds
    // adding 90 so the degree can be consistent with the 90 deg 
    //initially added to shift the hands from the default x axis to y axis
    const secondsDegrees = ((seconds / 60) * 360) + 90;  
    //setting the tranform style to current degree(second)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  }

  setInterval(setDate, 1000) //updating the time every seconds