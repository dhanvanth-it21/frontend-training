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
      required: false,
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
      minSelection: "1",
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
      required: false,
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
      required: false,
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
      required: false,
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

