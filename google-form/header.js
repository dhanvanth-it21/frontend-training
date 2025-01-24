import { createElement } from "./generator.js";
const navBarElements = [
  {
    tag: "nav",
    children: [
      {
        tag: "div",
        class: "nav-container",
        children: [
          {
            tag: "div",
            class: "nav-form-info",
            children: [
              {
                tag: "div",
                class: "nav-logo",
                children: [
                  {
                    tag: "i",
                    class: "fa-solid fa-clipboard-list",
                  },
                ],
              },
              {
                tag: "div",
                class: "nav-title",
                children: [
                  {
                    tag: "h1",
                    text: "Survey Time",
                  },
                  {
                    tag: "div",
                    class: "underline",
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            class: "nav-form-account",
            children: [
              {
                tag: "div",
                class: "nav-from-account-details",
                children: [
                  {
                    tag: "button",
                    class: "publish",
                    text: "Create",
                  },
                  {
                    tag: "button",
                    class: "publish",
                    text: "Discard",
                  },
                  {
                    tag: "div",
                    class: "nav-form-settings",
                    children: [
                      {
                        tag: "i",
                        class: "fa-solid fa-ellipsis-vertical",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        attributes: {
          style: "background-color: #FFF6DA;",
        },
      },
    ],
  },
];

const headingElements = [
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
                tag: "input",
                class: "form-heading-title-input",
                attributes: {
                  placeholder: "Survey Title",
                  type: "text",
                },
              },
            ],
          },
          {
            tag: "div",
            class: "form-heading-discription-div",
            children: [
              {
                tag: "input",
                class: "form-heading-discription-input",
                attributes: {
                  type: "text",
                  placeholder: "Form description",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

// here the nav bar is created and appended to the body
export const navBarInit = () => createElement(navBarElements, document.body);

// here the form heading is created and appended to the body
export const headingInit = () => createElement(headingElements, document.body);

// here only the forms title is manipulated
// export function headingFun() {
//   const formTitle = document.getElementById("form-title");
//   const underline = document.querySelector(".underline");

//   //underline event listener as block
//   formTitle.addEventListener("focus", () => {
//     underline.style.display = "block";
//     formTitle.select();
//   });

//   //underline event listener as none
//   formTitle.addEventListener("blur", () => {
//     underline.style.display = "none";
//   });

//   // initial heading of the form will be heading title
//   const formHeadingTitleInput = document.querySelector(
//     ".form-heading-title-input"
//   );
//   formHeadingTitleInput.value = formTitle.value;

//   //EL for the heading of the form for missing heading
//   formHeadingTitleInput.addEventListener("blur", () => {
//     if (formHeadingTitleInput.value === "") {
//       formHeadingTitleInput.value = formTitle.value;
//     }
//   });
// }
