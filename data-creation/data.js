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
        type: "checkbox", // Checkbox input type
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

