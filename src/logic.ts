import { checkboxWrapper } from "./listener.ts";
import {
  generatedResultEle,
  passwordLengtSliderEle,
  progressBar,
  progressStatus,
} from "./selector.ts";

export const lowerCase: string = "abcdefghijklmnopqrstuvwxyz";
export const upperCase: string = lowerCase.toUpperCase();
export const numbers: string = "1234567890";
export const symbols: string = "~`!@#$%^&*()_+|?/<>";

export const allTypes: string[] = [lowerCase, upperCase, numbers, symbols];

export const passwordToGenerate: string[] = [...allTypes];

// adding type to generate
export function addTypeToGenerate(type: string) {
  passwordToGenerate.push(type);
  return passwordToGenerate;
}

// remove type from the array
export function removeTypeToGenerate(removeType: string) {
  passwordToGenerate.filter((type: string) => type !== removeType);
  return passwordToGenerate;
}

// generate random password from the array

export function generateNow(passwordLength: number): string {
  const atLeastOneChecked = checkboxWrapper.querySelector(
    'input[type="checkbox"]:checked'
  );

  const letterToGenerate: string[] = [];

  let finalResult: string = "";
  if (atLeastOneChecked) {
    //   first creat the letterToGenerate array
    passwordToGenerate.map((type: string) => {
      type.split("").map((letterInType) => letterToGenerate.push(letterInType));
    });

    //   then it's time to generate the result

    for (let step = 0; step < passwordLength; step++) {
      let randomIndex = Math.floor(Math.random() * letterToGenerate.length);
      // console.log(randomIndex);
      finalResult += letterToGenerate[randomIndex];
    }

    generatedResultEle.innerText = finalResult;
    calculateBarWidth();
    // console.log({ finalResult });
    return finalResult;
  } else {
    generatedResultEle.innerText = "Please checked atlest one box";
    alert("Please atleast one check box to generate.");
    return finalResult;
  }
}

// progress bar style
const calculateBarWidth = () => {
  progressBar.style.opacity = `1`;
  if (Number(passwordLengtSliderEle.value) <= 8) {
    progressBar.style.transform = `scaleX(10%)`;
    progressBar.style.backgroundColor = `red`;
    progressStatus.innerText = "Bad password";
    console.log(progressStatus.innerText);
  } else if (
    Number(passwordLengtSliderEle.value) >= 8 &&
    Number(passwordLengtSliderEle.value) <= 13
  ) {
    progressBar.style.transform = `scaleX(30%)`;
    progressBar.style.backgroundColor = `orange`;
    progressStatus.innerText = "Weak password";
  } else if (
    Number(passwordLengtSliderEle.value) >= 14 &&
    Number(passwordLengtSliderEle.value) <= 20
  ) {
    progressBar.style.transform = `scaleX(50%)`;
    progressBar.style.backgroundColor = `green`;
    progressStatus.innerText = "Strong password";
  } else if (
    Number(passwordLengtSliderEle.value) >= 21 &&
    Number(passwordLengtSliderEle.value) <= 30
  ) {
    progressBar.style.transform = `scaleX(80%)`;
    progressBar.style.backgroundColor = `green`;
    progressStatus.innerText = "Strong password";
  } else if (
    Number(passwordLengtSliderEle.value) >= 31 &&
    Number(passwordLengtSliderEle.value) <= 40
  ) {
    progressBar.style.transform = `scaleX(100%)`;
    progressBar.style.backgroundColor = `darkgreen`;
    progressStatus.innerText = "Strong password";
  }
};
