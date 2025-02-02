import { createElement } from "../generator.js";

const survey = {
  title: "Survey1",
  description: "Welcome",
  questions: [
    {
      questionId: "1",
      question: "question1",
      type: "radio",
      required: true,
      options: {
        0: "option1",
        1: "option2",
        2: "option3",
      },
    },
    {
      questionId: "2",
      question: "question2",
      type: "checkbox",
      required: true,
      minSelection: "1",
      maxSelection: "1",
      options: {
        0: "option4",
        1: "option5",
        2: "option6",
      },
    },
    {
      questionId: "3",
      question: "question3",
      type: "select",
      options: {
        0: "option7",
        1: "option8",
        2: "option9",
      },
    },
    {
      questionId: "4",
      question: "question4",
      type: "text",
      required: true,
      minLength: 10,
      maxLength: 200,
    },
    {
      questionId: "5",
      question: "question5",
      type: "date",
      startDate: "2025-02-18",
      endDate: "2025-02-26",
    },
    {
      questionId: "6",
      question: "question6",
      type: "time",
      required: true,
      startTime: "07:14",
      endTime: "17:14"
    },
  ],
};


usedPage(survey);

//user page
function usedPage(survey) {
  createElement(userJsonConverter(survey), document.body);
}

//creating the html-form-body json for user side
function userJsonConverter(survey) {
  const finalJson = [
    {
      tag: "div",
      class: "form-body-container",
      children: [
        formHeading(survey.title, survey.description),
        ...survey.questions.map((question) => {
          switch (question.type) {
            case "radio":
              return markDownOption(question);
            case "checkbox":
              return markDownOption(question);
            case "select":
              return markDownSelect(question);
            case "date":
              return date(question);
            case "time":
              return time(question);
            case "text":
              return text(question);
          }
        }),
      ],
    },
  ];
  console.log(finalJson);
  return finalJson;
}

//-----------------------------------------------------------
// code to convert proper json for each questions and including header

// structure of question container
function questionContainer(question) {
  return {
    tag: "div",
    class: "question-container container-box",
    children: [
      {
        tag: "div",
        class: "question-item",
        children: [
          {
            tag: "h2",
            class: "question-title",
            text: `${question.questionId}) ${question.question}`,
            required: `${question.required ? question.required : "false"}`,
            children: [
              (function() {
                if(question.required)
                return {
                  tag: "span",
                  class: "requiredStar",
                  text: " *",
                }
                else return {}
              })(),
            ],
          },
        ],
      },
    ],
  };
}


//-------------------------------------------------

//header json converter
function formHeading(title, description) {
  //form heading
  const element = {
    tag: "div",
    class: "form-heading container-box",
    children: [
      {
        tag: "div",
        class: "form-heading-title-div",
        children: [
          {
            tag: "h1",
            text: title,
          },
        ],
      },
      {
        tag: "div",
        class: "form-heading-discription-div",
        children: [
          {
            tag: "p",
            text: description,
          },
        ],
      },
    ],
  };
  return element;
}

// radio question json converter
function markDownOption(mdo) {
  const childrenArr = Object.keys(mdo.options).map((key) => ({
    tag: "label",
    children: [
      {
        tag: "input",
        attributes: {
          type: mdo.type,
          name: mdo.question,
          value: mdo.options[key],
        },
      },
      {
        text: mdo.options[key],
      },
    ],
  }));

  const element = questionContainer(mdo)
  element.children[0].children.push({
    tag: "div",
    class: "question-options",
    children: childrenArr,
  })
  return element;
}

// dropdown question json converter
function markDownSelect(selectQuestion) {
  const options = Object.keys(selectQuestion.options).map((key) => ({
    tag: "option",
    value: selectQuestion.options[key],
    text: selectQuestion.options[key],
  }));

  const element = questionContainer(selectQuestion);
  element.children[0].children.push({
    tag: "select",
    attributes: {
      name: selectQuestion.questionId,
      class: "dropdown",
    },
    children: options,
  });
  return element;
}

//date question json converter
function date(dateQuestion) {
  //date
  const element = questionContainer(dateQuestion);
  element.children[0].children.push({
    tag: "input",
    attributes: {
      type: "date",
      name: `${dateQuestion.questionId}`,
      class: "date-input",
      min: dateQuestion.startDate,
      max: dateQuestion.endDate,
    },
  });
  return element;
}

//time question json converter
function time(timeQuestion) {
  //time
  const element = questionContainer(timeQuestion);
  element.children[0].children.push({
    tag: "input",
    attributes: {
      type: "time",
      name: `${timeQuestion.questionId}`,
      class: "time-input",
      min: timeQuestion.startTime,
      max: timeQuestion.endTime,
    },
  });
  return element;
}

// text question json converter
function text(textQuestion) {
  //time
  const element = questionContainer(textQuestion);
  element.children[0].children.push({
    tag: "textarea",
    attributes: {
      name: `${textQuestion.questionId}`,
      class: "text-input",
      minlength: textQuestion.minLength,
      maxLength: textQuestion.maxLength,
    },
  });
  return element;
}



