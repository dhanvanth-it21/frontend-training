//question container includes input for question and dropdown for container for list of types
export const questionContainer = [
  {
    "tag": "div",
    "class": "question-container",
    "children": [
      {
        "tag": "div",
        "class": "question-selection",
        "children": [
          {
            "tag": "input",
            "type": "text",
            "placeholder": "Question"
          },
          {
            "tag": "div",
            "class": "question-type-selection-container",
            "children": [
              {
                "tag": "div",
                "class": "select-btn",
                "children": [
                  {
                    "tag": "div",
                    "class": "question-type"
                  },
                  {
                    "tag": "i",
                    "class": "fa-solid fa-caret-down"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "tag": "div",
        "class": "question-separator"
      },
      {
        "tag": "div",
        "class": "question-selected-type-container"
      }
    ]
  }
  
]

// it includes list of types of question for the container in question container
export const questionTypeOptionList = [
  {
    tag: "div",
    class: "question-type-options",
    children: [
      {
        tag: "ul",
        class: "options",
        children: [
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-circle-dot",
              },
              {
                tag: "span",
                text: "Multiple Choice",
              },
            ],
          },
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-file-lines",
              },
              {
                tag: "span",
                text: "Paragraph",
              },
            ],
          },
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-square-check",
              },
              {
                tag: "span",
                text: "Checkboxes",
              },
            ],
          },
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-square-caret-down",
              },
              {
                tag: "span",
                text: "Drop Down",
              },
            ],
          },
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-calendar-days",
              },
              {
                tag: "span",
                text: "Date",
              },
            ],
          },
          {
            tag: "li",
            class: "option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-clock",
              },
              {
                tag: "span",
                text: "Time",
              },
            ],
          },
        ],
      },
    ],
  },
];




// -------------------------------------------Question Types and its option--------------------------------------------
//radio
export const markdown = [
  {
    tag: "div",
    class: "markdown-container",
    children: [
      {
        tag: "div",
        class: "markdown-options",
        children: [
          {
            tag: "div",
            class: "markdown-option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-circle",
              },
              {
                tag: "input",
                type: "text",
                placeholder: "Option",
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "markdown-add-option",
        children: [
          {
            tag: "i",
            class: "fa-regular fa-circle",
          },
          {
            tag: "button",
            text: "Add another",
          },
        ],
      },
    ],
  },
];
export const markdownOption = [
  {
    tag: "div",
    class: "markdown-option",
    children: [
      {
        tag: "i",
        class: "fa-regular fa-circle",
      },
      {
        tag: "input",
        type: "text",
        placeholder: "Option",
      },
      {
        tag: "button",
        class: "markdown-option-close",
        children: [
          {
            tag: "i",
            class: "fa-solid fa-x",
          },
        ],
      },
    ],
  },
];
//------------------


//checkbox
export const markdownCheckbox = [
  {
    tag: "div",
    class: "markdown-container",
    children: [
      {
        tag: "div",
        class: "markdown-options",
        children: [
          {
            tag: "div",
            class: "markdown-option",
            children: [
              {
                tag: "i",
                class: "fa-regular fa-square",
              },
              {
                tag: "input",
                type: "text",
                placeholder: "Option",
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "markdown-add-option",
        children: [
          {
            tag: "i",
            class: "fa-regular fa-square",
          },
          {
            tag: "button",
            text: "Add another",
          },
        ],
      },
    ],
  },
];
export const markdownCheckboxOption = [
  {
    tag: "div",
    class: "markdown-option",
    children: [
      {
        tag: "i",
        class: "fa-regular fa-square", // This will be the checkbox icon
      },
      {
        tag: "input",
        type: "text",
        placeholder: "Option", // Placeholder for text input
      },
      {
        tag: "button",
        class: "markdown-option-close",
        children: [
          {
            tag: "i",
            class: "fa-solid fa-x", // Close button icon
          },
        ],
      },
    ],
  },
];
//---------------------


//dropdown
export const markdownDropdown = [
  {
    tag: "div",
    class: "markdown-container",
    children: [
      {
        tag: "div",
        class: "markdown-options",
        children: [
          {
            tag: "div",
            class: "markdown-option",
            children: [
              {
                tag: "p",
                class: "num-sequence",
              },
              {
                tag: "input",
                type: "text",
                placeholder: "Option",
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        class: "markdown-add-option",
        children: [
          {
            tag: "p",
            class: "num-sequence",
          },
          {
            tag: "button",
            text: "Add another",
          },
        ],
      },
    ],
  },
];
export const markdownDropdownOption = [
  {
    tag: "div",
    class: "markdown-option",
    children: [
      {
        tag: "p",
        class: "num-sequence",
      },
      {
        tag: "input",
        type: "text",
        placeholder: "Option", // Placeholder for text input
      },
      {
        tag: "button",
        class: "markdown-option-close",
        children: [
          {
            tag: "i",
            class: "fa-solid fa-x", // Close button icon
          },
        ],
      },
    ],
  },
];


//paragraph
export const paragraph = [
  {
    tag: "div",
    class: "paragraph-container",
    children: [
      {
        tag: "textarea",
        class: "paragraph-textarea",
        placeholder: "Paragraph text",
        disabled: true,
      },
    ],
  },
];
//------------------


//time
export const timeType = [
  {
    tag: "div",
    class: "time-type-container",
    children: [
      {
        tag: "input",
        type: "time",
        class: "time-type",
      },
    ],
  },
];
//----------------


//data
export const dateType = [
  {
    tag: "div",
    class: "date-type-container",
    children: [
      {
        tag: "input",
        type: "date",
        class: "date-type",
    },
],
},
];



