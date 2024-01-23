import {
  generateNow,
  lowerCase,
  numbers,
  passwordToGenerate,
  symbols,
  upperCase,
} from "./logic.ts";
import {
  generatedResultEle,
  lowerCaseCheckBoxEle,
  numberCheckBoxEle,
  passwordLengtSliderEle,
  passwordLengthInputEle,
  symbolCheckBoxEle,
  tooltip,
  upperCaseCheckBoxEle,
} from "./selector.ts";

export const checkboxWrapper = document.querySelector(
  ".customize-wrapper"
) as HTMLDivElement;
export const allCheckBoxEle = checkboxWrapper.querySelectorAll("input");

export const inputHandler = (inputType: string) => {
  console.log("trigger");
  //   for lowecase
  if (inputType === "lowercase-input") {
    if (lowerCaseCheckBoxEle.checked) {
      passwordToGenerate.push(lowerCase);
      generateNow(Number(passwordLengtSliderEle.value));
      // console.log(passwordLengtSliderEle.value);
      // console.log("from lowercase checked");
      // console.log(passwordToGenerate);
      return passwordToGenerate;
    } else {
      const indexToRemove = passwordToGenerate.indexOf(lowerCase);
      passwordToGenerate.splice(indexToRemove, 1);
      generateNow(Number(passwordLengtSliderEle.value));
      console.log(passwordToGenerate);
    }
  }

  //   for uppercase
  if (inputType === "uppercase-input") {
    if (upperCaseCheckBoxEle.checked) {
      passwordToGenerate.push(upperCase);
      generateNow(Number(passwordLengtSliderEle.value));
      console.log(passwordToGenerate);
      return passwordToGenerate;
    } else {
      const indexToRemove = passwordToGenerate.indexOf(upperCase);
      passwordToGenerate.splice(indexToRemove, 1);
      generateNow(Number(passwordLengtSliderEle.value));
      console.log(passwordToGenerate);
    }
  }

  //   for number
  if (inputType === "number-input") {
    if (numberCheckBoxEle.checked) {
      passwordToGenerate.push(numbers);
      generateNow(Number(passwordLengtSliderEle.value));
      return passwordToGenerate;
    } else {
      const indexToRemove = passwordToGenerate.indexOf(numbers);
      passwordToGenerate.splice(indexToRemove, 1);
      generateNow(Number(passwordLengtSliderEle.value));
    }
  }

  //   for symbols
  if (inputType === "symbol-input") {
    if (symbolCheckBoxEle.checked) {
      passwordToGenerate.push(symbols);
      generateNow(Number(passwordLengtSliderEle.value));
      return passwordToGenerate;
    } else {
      const indexToRemove = passwordToGenerate.indexOf(symbols);
      passwordToGenerate.splice(indexToRemove, 1);
      generateNow(Number(passwordLengtSliderEle.value));
    }
  }
  console.log(passwordToGenerate);
  return passwordToGenerate;
};

export const sliderHandler = () => {
  passwordLengthInputEle.value = passwordLengtSliderEle.value;
  generateNow(Number(passwordLengthInputEle.value));
};

export const lengthInputHandler = () => {
  passwordLengtSliderEle.value = passwordLengthInputEle.value;
  generateNow(Number(passwordLengthInputEle.value));
};

// copy generate password
export function copyText() {
  const textToCopy = generatedResultEle.innerText;
  // tooltip.style.display = "block";
  tooltip.style.opacity = "1";

  setTimeout(() => {
    tooltip.style.opacity = "0";
    // tooltip.style.display = "none";
  }, 2500);
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // alert("Password has been copied to the clipboard: " + textToCopy);
    })
    .catch((err) => {
      console.error("Unable to copy text to clipboard", err);
    });
}
