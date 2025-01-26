function convert() {
    const survey = {};
    const formTitle = document.querySelector(".form-heading-title-input");
    const formDescription = document.querySelector(".form-heading-discription-input");
    survey.title = formTitle.value;
    survey.description = formDescription.value;
  
    const questionsContainers = document.querySelectorAll(".question-container");
    const questions = [];
    questionsContainers.forEach((questionContainer) => {
      const questionText = questionContainer.querySelector(".question-selection>textarea").value;
      const questionType = getType(questionContainer.querySelector(".question-type>span").textContent);
      const question = {
        question: questionText,
        type: questionType
      };
  
      if (questionType === "radio" || questionType === "checkbox" || questionType === "selection") {
        const options = {};
        const optionsList = questionContainer.querySelectorAll(".markdown-option");
        optionsList.forEach((option, index) => {
          options[index] = option.querySelector("input").value;
        });
        question.options = options;
      }
  
      questions.push(question);
    });
    survey.questions = questions;
    return survey;
  }
  
  export function convertToJson() {
    const survey = convert();
    console.log(JSON.stringify(survey, null, 2));
    return survey;
  }
  
  function getType(type) {
    switch (type) {
      case "Multiple Choice":
        return "radio";
      case "Checkboxes":
        return "checkbox";
      case "Drop Down":
        return "selection";
      case "Date":
        return "date";
      case "Time":
        return "time";
      case "Paragraph":
        return "text";
      default:
        return "text";
    }
  }







const eg =   [
    {
      tag: "div",
      class: "form-body-container",
      children: [
        {
          tag: "div",
          class: "form-heading container-box",
          children: [
            {
              tag: "div",
              class: "form-heading-title-div",
              children: [
                {
                  tag: "h1",
                  text: "Survey Title",
                },
              ],
            },
            {
              tag: "div",
              class: "form-heading-discription-div",
              children: [
                {
                  tag: "p",
                  text: "Form description (optional)",
                },
              ],
            },
          ],
        },
        {
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
                  text: "What is your favorite color?",
                },
                {
                  tag: "div",
                  class: "question-options",
                  children: [
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "radio",
                            name: "question1",
                            value: "option1",
                          },
                        },
                        {
                          text: "Option 1",
                        },
                      ],
                    },
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "radio",
                            name: "question1",
                            value: "option2",
                          },
                        },
                        {
                          text: "Option 2",
                        },
                      ],
                    },
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "radio",
                            name: "question1",
                            value: "option3",
                          },
                        },
                        {
                          text: "Option 3",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
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
                  text: "Question 2",
                },
                {
                  tag: "div",
                  class: "question-options",
                  children: [
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "checkbox",
                            name: "question2",
                            value: "option4",
                          },
                        },
                        {
                          text: "Option 4",
                        },
                      ],
                    },
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "checkbox",
                            name: "question2",
                            value: "option5",
                          },
                        },
                        {
                          text: "Option 5",
                        },
                      ],
                    },
                    {
                      tag: "label",
                      children: [
                        {
                          tag: "input",
                          attributes: {
                            type: "checkbox",
                            name: "question2",
                            value: "option6",
                          },
                        },
                        {
                          text: "Option 6",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
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
                  text: "Question 3",
                },
                {
                  tag: "select",
                  attributes: {
                    name: "question3",
                    class: "dropdown",
                  },
                  children: [
                    {
                      tag: "option",
                      attributes: {
                        value: "option7",
                      },
                      text: "Option 7",
                    },
                    {
                      tag: "option",
                      attributes: {
                        value: "option8",
                      },
                      text: "Option 8",
                    },
                    {
                      tag: "option",
                      attributes: {
                        value: "option9",
                      },
                      text: "Option 9",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
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
                  text: "Question 4",
                },
                {
                  tag: "textarea",
                  attributes: {
                    name: "question4",
                    class: "text-input",
                  },
                },
              ],
            },
          ],
        },
        {
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
                  text: "Question 5",
                },
                {
                  tag: "input",
                  attributes: {
                    type: "date",
                    name: "question5",
                    class: "date-input",
                  },
                },
              ],
            },
          ],
        },
        {
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
                  text: "Question 6",
                },
                {
                  tag: "input",
                  attributes: {
                    type: "time",
                    name: "question6",
                    class: "time-input",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];