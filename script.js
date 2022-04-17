let stopCar = "";
var myReq1 = "";
var myReq2 = "";
var myReq3 = "";
var myReq4 = "";
document.querySelector(".start-btn").addEventListener("click", (e) => {
  if (e.target.innerHTML === "Stop") {
    document.querySelector(".track").classList.remove("add-track-animation");
    cars.forEach((item) => {
      item.classList.remove("add-car-animation");
    });
    cancelAnimationFrame(myReq1);
    cancelAnimationFrame(myReq2);
    cancelAnimationFrame(myReq3);
    cancelAnimationFrame(myReq4);
    e.target.innerHTML = "Start";
    stopmain.forEach((item) => {
      clearInterval(item);
    });
  } else {
    document.querySelector(".track").classList.add("add-track-animation");
    cars.forEach((item) => {
      item.classList.add("add-car-animation");
    });
    carAnimation1(cars[0]);
    carAnimation2(cars[1]);
    carAnimation3(cars[2]);
    carAnimation4(cars[3]);
    e.target.innerHTML = "Stop";
  }
});

const cars = document.querySelectorAll(".realcar");

let start;
let reverse = false;
cars.forEach((item) => {
  item.style.bottom = "250px";
});

var random = "";
random = Math.floor(Math.random() * 5) + 1;
random1 = Math.floor(Math.random() * 6) + 1;
random2 = Math.floor(Math.random() * 5) + 1;
random3 = Math.floor(Math.random() * 4) + 1;
stopCar = setInterval(() => {
  random = Math.floor(Math.random() * 5) + 1;
  random1 = Math.floor(Math.random() * 6) + 1;
  random2 = Math.floor(Math.random() * 5) + 1;
  random3 = Math.floor(Math.random() * 7) + 1;
}, 2000);
function carAnimation1(car, max, min) {
  function step(timestamp) {
    console.log(reverse);
    console.log(random);
    if (reverse) {
      if (parseInt(car.style.bottom) < 150) {
        reverse = false;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) - random}px`;
      }
    } else if (!reverse) {
      if (parseInt(car.style.bottom) > 550) {
        reverse = true;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) + random}px`;
      }
    }
    myReq1 = window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
function carAnimation2(car, max, min) {
  function step(timestamp) {
    console.log(reverse);
    console.log(random1);
    if (reverse) {
      if (parseInt(car.style.bottom) < 150) {
        reverse = false;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) - random1}px`;
      }
    } else if (!reverse) {
      if (parseInt(car.style.bottom) > 550) {
        reverse = true;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) + random1}px`;
      }
    }
    myReq2 = window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

function carAnimation3(car, max, min) {
  function step(timestamp) {
    console.log(reverse);
    console.log(random2);
    if (reverse) {
      if (parseInt(car.style.bottom) < 150) {
        reverse = false;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) - random2}px`;
      }
    } else if (!reverse) {
      if (parseInt(car.style.bottom) > 550) {
        reverse = true;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) + random2}px`;
      }
    }
    myReq3 = window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

function carAnimation4(car, max, min) {
  function step(timestamp) {
    console.log(reverse);
    console.log(random3);
    if (reverse) {
      if (parseInt(car.style.bottom) < 150) {
        reverse = false;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) - random3}px`;
      }
    } else if (!reverse) {
      if (parseInt(car.style.bottom) > 550) {
        reverse = true;
      } else {
        car.style.bottom = `${parseInt(car.style.bottom) + random3}px`;
      }
    }
    myReq4 = window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

carAnimation1(cars[0]);
carAnimation2(cars[1]);
carAnimation3(cars[2]);
carAnimation4(cars[3]);

document.querySelector(".timer-btn").addEventListener("click", () => {
  var values = document.querySelector(".input-box").value.split(":");
  let hr = +values[0];
  let min = +values[1];
  let sec = +values[2];
  console.log(hr, min, sec);

  var date = new Date();

  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  hr = hour;
  min = min;
  sec = sec;
  console.log(hr, min, sec);
  let setTimer = new Date(`Apr 18, 2022 ${hr}:${min}:${sec}`).getTime();
  console.log(setTimer);
  let stop = setInterval(() => {
    let distance = Math.abs(setTimer - new Date().getTime());
    if (distance === 0) {
      clearInterval(stop);
    }
    let setHr = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let setMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let setSec = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".hour").innerHTML = `${setHr}:`;
    document.querySelector(".min").innerHTML = `${setMin}:`;
    document.querySelector(".sec").innerHTML = `${setSec}`;
  }, 1000);
});
