import { createElement } from "../generator.js";
import { navBarElements, headingElements } from "./data.js";
import { convertToJson } from "./form-json.js";
// here the nav bar is created and appended to the body
export const navBarInit = () => createElement(navBarElements, document.body);

// here the form heading is created and appended to the body
export const headingInit = () => createElement(headingElements, document.body);

export function completeValidation() {
  // Remove previous error messages
  const previousError = document.querySelectorAll(".error");
  previousError.forEach((error) => {
    error.remove();
  });
  const fhv = formHeadingValidation();
  const qcv = questionContainersValidation();
  if (fhv && qcv) {
    const json = convertToJson();
  }
}
function errorText(text) {
  const error = document.createElement("p");
  error.className = "error";
  error.textContent = text;
  return error;
}

// form heading validation
function formHeadingValidation() {
  const formHeading = document.querySelector(".form-heading");
  const formTitle = formHeading.querySelector(".form-heading-title-input");

  // Now validating the form title
  const errorMessage = titleValidationMessage(formTitle.value);
  if (errorMessage) {
    formTitle.insertAdjacentElement("afterend", errorText(errorMessage));
    return false;
  }
  return true;
}

function titleValidationMessage(value) {
  if (value === "") {
    return "*Title is required";
  } else if (value.length < 5) {
    return "*Title must be at least 5 characters";
  } else if (value.length > 100) {
    return "*Title must be less than 100 characters";
  } else if (!/^[a-zA-Z0-9 .,!@#$%^&*()_+=-]*$/.test(value)) {
    return "*Allowed only commonly used special characters";
  }
  return null;
}

// question container validation

function questionContainersValidation() {
  const questionContainers = document.querySelectorAll(".question-container");

  //validation if not question is found
  if (questionContainers.length === 0) {
    document
      .querySelector(".form-body-container")
      .appendChild(errorText("*At least one question is required"));
    return false;
  }
  let isCorrect = true;
  // validation for each question container
  questionContainers.forEach((qc) => {
    // validation for question
    const question = qc.querySelector(".question-selection>textarea");
    const questionErrorMessage = questionValidationMessage(question.value);
    if (questionErrorMessage) {
      qc.querySelector(".question-selection").insertAdjacentElement(
        "afterend",
        errorText(questionErrorMessage)
      );
    }
    // validation for the question type
    const questionTypeErrorMessage = questionTypeValidationMessage(
      qc.querySelector(".question-selected-type-container")
    );
    if (questionTypeErrorMessage) {
      qc.querySelector(
        ".question-selected-type-container"
      ).insertAdjacentElement("afterend", errorText(questionTypeErrorMessage));
    }
    if (isCorrect && (questionErrorMessage || questionTypeErrorMessage)) {
      isCorrect = false;
    }
  });
  return isCorrect;
}

function questionValidationMessage(value) {
  if (value === "") {
    return "*Question is required";
  } else if (value.length < 5) {
    return "*Question must be at least 5 characters";
  } else if (value.length > 2000) {
    return "*Question must be less than 2000 characters";
  } else if (!/^[a-zA-Z0-9 .,!@#$%^&*()_+=-]*$/.test(value)) {
    return "*Allowed only commonly used special characters";
  }
  return null;
}

function questionTypeValidationMessage(questionTypeContainer) {
  // if it contains the markdown container the the validation
  if (questionTypeContainer.querySelector(".markdown-container")) {
    const qtc = questionTypeContainer.querySelector(".markdown-container");
    const markdownOptions = qtc.querySelectorAll(".markdown-option");
    let errorMessage = null;
    // taking each option and checking the validation
    markdownOptions.forEach((option) => {
      const value = option.querySelector("input").value;
      if (value === "") {
        errorMessage = "*Option is empty";
      } else if (value.length < 5) {
        errorMessage = "*Option must be at least 5 characters";
      } else if (value.length > 200) {
        errorMessage = "*Option must be less than 100 characters";
      } else if (!/^[a-zA-Z0-9 .,!@#$%^&*()_+=-]*$/.test(value)) {
        errorMessage = "*Allowed only commonly used special characters";
      }
    });
    return errorMessage;
  }
  //other type validation need to be done
}
