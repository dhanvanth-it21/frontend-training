//creating the html-form-body json for user side
export function userJsonConverter(survey) {
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
              return markDownCheckbox(question);
            case "select":
              return markDownSelect(question);
            case "date":
              return date(question);
            case "time":
              return time(question);
            case "text":
              return text(question);
            case "number":
              return numberType(question);
            case "file":
              return imageType(question);
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
            attributes: {
              question_type: question.type,
              min_selection: question.minSelection,
              max_selection: question.maxSelection,
            },
            children: [
              (function () {
                if (question.required)
                  return {
                    tag: "span",
                    class: "requiredStar",
                    text: " *",
                  };
                else return {};
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
          name: mdo.questionId,
          value: mdo.options[key],
        },
      },
      {
        tag: "p",
        text: mdo.options[key],
      },
    ],
  }));

  const element = questionContainer(mdo);
  element.children[0].children.push({
    tag: "div",
    class: "question-options",
    children: childrenArr,
    name: mdo.questionId,
  });
  return element;
}

// checkbox question json converter
function markDownCheckbox(checkboxQuestion) {
  const childrenArr = Object.keys(checkboxQuestion.options).map((key) => ({
    tag: "label",
    children: [
      {
        tag: "input",
        attributes: {
          type: "checkbox",
          name: checkboxQuestion.questionId,
          value: checkboxQuestion.options[key],
        },
      },
      {
        tag: "p",
        text: checkboxQuestion.options[key],
      },
    ],
  }));

  const element = questionContainer(checkboxQuestion);
  element.children[0].children.push({
    tag: "div",
    class: "question-options",
    children: childrenArr,
    name: checkboxQuestion.questionId,
  });
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
      maxlength: textQuestion.maxLength,
    },
  });
  return element;
}

// number question json converter
function numberType(numberQuestion) {
  const element = questionContainer(numberQuestion);
  element.children[0].children.push({
    tag: "input",
    attributes: {
      type: "number",
      name: `${numberQuestion.questionId}`,
      class: "number-input",
      min: numberQuestion.minValue,
      max: numberQuestion.maxValue,
      placeholder: "Enter the Number",
    },
  });
  return element;
}

// image upload question json converter
function imageType(imageUploadQuestion) {
  const element = questionContainer(imageUploadQuestion);
  element.children[0].children.push({
    tag: "input",
    attributes: {
      type: "file",
      name: `${imageUploadQuestion.questionId}`,
      class: "image-upload-input",
      accept: imageUploadQuestion.accept,
    },
  });
  return element;
}

