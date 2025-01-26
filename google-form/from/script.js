const eg = {
  title: "Survey1",
  description: "Welcome",
  questions: [
    {
      question: "question1",
      type: "radio",
      options: {
        0: "option1",
        1: "option2",
        2: "option3",
      },
    },
    {
      question: "question2",
      type: "checkbox",
      options: {
        0: "option4",
        1: "option5",
        2: "option6",
      },
    },
    {
      question: "question3",
      type: "selection",
      options: {
        0: "option7",
        1: "option8",
        2: "option9",
      },
    },
    {
      question: "question4",
      type: "text",
    },
    {
      question: "question5",
      type: "date",
    },
    {
      question: "question6",
      type: "time",
    },
  ],
};

[
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

document.querySelector(".form-heading-title-div h1").textContent = eg.title;
document.querySelector(".form-heading-discription-div p").textContent =
  eg.description;
