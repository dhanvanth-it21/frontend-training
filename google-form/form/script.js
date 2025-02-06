import { createElement } from "../generator.js";
import { userJsonConverter } from "./user-json-converter.js";

const survey = {
  title: "Survey Time",
  description: "a sample to test the user preview",
  questions: [
    {
      questionId: 1,
      question: "Question1 - MC",
      type: "radio",
      required: true,
      options: {
        0: "MC-1.",
        1: "MC-2.",
        2: "MC-3.",
      },
    },
    {
      questionId: 2,
      question: "Question1 - CB",
      type: "checkbox",
      required: false,
      minSelection: "2",
      maxSelection: "2",
      options: {
        0: "CB-1.",
        1: "CB-2.",
        2: "CB-3.",
      },
    },
    {
      questionId: 3,
      question: "Question3 - DD",
      type: "select",
      required: true,
      options: {
        0: "DD-1.",
        1: "DD-2.",
        2: "DD-3.",
      },
    },
    {
      questionId: 4,
      question: "Question4 - para",
      type: "text",
      required: false,
      minLength: "5",
      maxLength: "10",
    },
    {
      questionId: 5,
      question: "Question5 - Number",
      type: "number",
      required: true,
      minValue: "100",
      maxValue: "200",
    },
    {
      questionId: 6,
      question: "Question6 - date",
      type: "date",
      required: false,
      startDate: "2025-02-01",
      endDate: "2025-02-20",
    },
    {
      questionId: 7,
      question: "Question7 - time",
      type: "time",
      required: true,
      startTime: "00:00",
      endTime: "06:00",
    },
    {
      questionId: 8,
      question: "Question8 - time",
      type: "file",
      required: false,
      accept: ".jpeg, .png, ",
    },
  ],
};

// const survey = {
//   "title": "Multiple choice question",
//   "description": "check for multiple choice question",
//   "questions": [
//     {
//       "questionId": 1,
//       "question": "Question 1",
//       "type": "radio",
//       "required": false,
//       "options": {
//         "0": "option 1",
//         "1": "option 2",
//         "2": "option 3"
//       }
//     }
//   ]
// }

userPage(survey);

//user page
function userPage(survey) {
  createElement(userJsonConverter(survey), document.body);
}

//-------------------------------adding the constrains to the user question and answer
// checking for the validation error are persent and return the error message
const submitButton = document.querySelector(".submit");
submitButton.addEventListener('click',validatorForUser)
// validatorForUser();

//-----------------------------------validation-------------------------------------->start-----------


//(validation-helper) : radio question
function radioQuestionConstrain(questionContainer, question) {
  const isRequired = question.getAttribute("required") === "true";
  if (isRequired) {
    //handling the input to be checked
    const noAns = Array.from(questionContainer.querySelectorAll(
      "div.question-options > label > input"
    )).filter((tag) => tag.checked === true).length;
    if (noAns === 0) return "This question is required";
  }
  return null;
}

//(validation-helper) : checkbox question
function checkBoxQuestionConstrain(questionContainer, question) {
  const isRequired = question.getAttribute("required") === "true";
  if (isRequired) {
    //handling the input to be checked
    const noAns = Array.from(questionContainer.querySelectorAll(
      "div.question-options > label > input"
    )).filter((tag) =>  tag.checked === true).length;
    if(noAns === 0) return "This question is required";

  }
  const minSelection = parseInt(question.getAttribute("min_selection"));
  const maxSelection = parseInt(question.getAttribute("max_selection"));
  const noAns = Array.from(questionContainer.querySelectorAll(
    "div.question-options > label > input"
  )).filter((tag) =>  tag.checked === true).length;
  if(!(noAns >= minSelection && noAns <= maxSelection)) {
    if(minSelection === maxSelection) return `${minSelection} and only must be checked`;
    return `Checked  option should between ${minSelection} and ${maxSelection}`
  }

  return null;
}

//(error-helper) : returns a "p-tag" element with the error text and class as "error"
function errorText(text) {
  const error = document.createElement("p");
  error.className = "error";
  error.textContent = text;
  return error;
}

//(error-helper) :  Remove  previous error messages with the provided place
function removeError(place = document) {
  const previousError = place.querySelectorAll(".error");
  previousError.forEach((error) => {
    error.remove();
  });
}

//(error-helper) : applying the error message to the respective container
function apllyErrorMessage(questionContainer, errorMessage) {
  const qeustionItem = questionContainer.querySelector(".question-item");
  const errorTag = errorText(errorMessage);
  qeustionItem.insertAdjacentElement("afterend", errorTag);
  errorTag.innerText = `*${errorMessage}`;
}

// (((main))) -----> complete validation for the user page
function validatorForUser() {
  removeError();
  const questionArr = document.querySelectorAll(".question-container");
  //traversing each question for validation
  questionArr.forEach((questionContainer) => {
    //handling with different type of tyes of input
    const question = questionContainer.querySelector("div.question-item > h2");
    const questionType = question.getAttribute("question_type");
    let errorMessage = null;
    // switch case to identify the question type
    switch (questionType) {
      case "radio": {
        errorMessage = radioQuestionConstrain(questionContainer, question);
        break;
      }
      case "checkbox": {
        errorMessage = checkBoxQuestionConstrain(questionContainer, question);
        break;
      }
    }
    //calling for errormessage to be displayed in FE
    if (errorMessage) {
      apllyErrorMessage(questionContainer, errorMessage);
    }
  });
}

//-----------------------------------validation-------------------------------------->end-----------
