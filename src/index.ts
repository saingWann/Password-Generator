import {
  allCheckBoxEle,
  copyText,
  inputHandler,
  lengthInputHandler,
  sliderHandler,
} from "./listener.ts";
import { generateNow } from "./logic.ts";
import {
  generateBtnEle,
  passwordLengtSliderEle,
  passwordLengthInputEle,
  cursor,
  copyResultBtnEle,
} from "./selector.ts";

import "./input.css";

class App {
  listener() {
    allCheckBoxEle.forEach((inputEle) => {
      inputEle.onclick = () => inputHandler(inputEle.id);
    });

    passwordLengtSliderEle.oninput = () => {
      generateNow(Number(passwordLengtSliderEle.value));
      sliderHandler();
    };

    passwordLengthInputEle.oninput = () => {
      generateNow(Number(passwordLengthInputEle.value));
      lengthInputHandler();
    };

    generateBtnEle.onclick = () => {
      generateNow(Number(passwordLengtSliderEle.value));
    };

    copyResultBtnEle.onclick = () => {
      copyText();
    };

    console.log("event listen");
  }

  init() {
    this.listener();
    generateNow(Number(passwordLengtSliderEle.value));
    // generateNow(Number(passwordLengtSliderEle.value));
    console.log("app is starting");
  }
}

const app = new App();

app.init();

let rad: number = 0;

window.onmousemove = (e: MouseEvent) => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  const mouseX = e.clientX + scrollX;
  const mouseY = e.clientY + scrollY;

  if (Math.abs(e.movementX) + Math.abs(e.movementY) > 4) {
    rad = Math.atan2(e.movementX, -e.movementY);
  }

  cursor.style.transform = `translate(${mouseX - 8}px, ${
    mouseY - 92
  }px) rotate(${rad}rad)`;
  // console.log(`e: ${mouseX}, ${mouseY}`);
  // console.log(cursor.getBoundingClientRect());
};

let resizeTimer: any;
window.onresize = (e: UIEvent) => {
  clearInterval(resizeTimer);
  resizeTimer = setTimeout(() => {
    cursor.style.transform = `translate(${window.innerWidth / 2}px)`;
  }, 500);
};

let scrollTimer: any;
window.onscroll = (e: Event) => {
  clearInterval(scrollTimer);

  scrollTimer = setTimeout(() => {
    if (window.scrollY > 300) {
      const scrollTop = document.querySelector(
        "[scrollTop]"
      ) as HTMLAnchorElement;
      scrollTop.style.opacity = "1";
    }
    if (window.scrollY < 300) {
      const scrollTop = document.querySelector(
        "[scrollTop]"
      ) as HTMLAnchorElement;
      scrollTop.style.opacity = "0";
    }
  }, 500);
};
