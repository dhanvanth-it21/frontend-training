export const marks = {
  english: 0,
  tamil: 0,
  maths: 0,
  science: 0,
  history: 0,
};

export const stats = {
  totalMark: 0,
  avgMark: 0,
  minMark: 0,
  maxMark: 0,
  percentage: 0,
};

export const elements = [
  {
    tag: "h1",
    text: "Mark details",
  },
  {
    tag: "div",
    class: "container",
    children: [
      {
        tag: "div",
        class: "input-container",
        children: [
          {
            tag: "form",
            children: [
              {
                tag: "ul",
                class: "subject-marks",
                children: [
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "english" },
                        text: "English Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "english",
                          name: "english",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "tamil" },
                        text: "Tamil Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "tamil",
                          name: "tamil",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "maths" },
                        text: "Maths Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "maths",
                          name: "maths",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "science" },
                        text: "Science Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "science",
                          name: "science",
                        },
                      },
                    ],
                  },
                  {
                    tag: "li",
                    children: [
                      {
                        tag: "label",
                        attributes: { for: "history" },
                        text: "History Mark : ",
                      },
                      {
                        tag: "input",
                        attributes: {
                          type: "number",
                          id: "history",
                          name: "history",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "button",
                attributes: { type: "submit", id: "submit-mark" },
                text: "Submit",
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "outer-container",
        children: [
          {
            tag: "ul",
            children: [
              {
                tag: "li",
                children: [
                  {
                    tag: "h3",
                    text: "Total Mark : ",
                    children: [
                      {
                        tag: "span",
                        attributes: { id: "total-mark" },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "h3",
                    text: "Avg Mark : ",
                    children: [
                      {
                        tag: "span",
                        attributes: { id: "avg-mark" },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "h3",
                    text: "Lowest Mark : ",
                    children: [
                      {
                        tag: "span",
                        attributes: { id: "min-mark" },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "h3",
                    text: "Highest Mark : ",
                    children: [
                      {
                        tag: "span",
                        attributes: { id: "max-mark" },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "li",
                children: [
                  {
                    tag: "h3",
                    text: "Percentage : ",
                    children: [
                      {
                        tag: "span",
                        attributes: { id: "percentage" },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

