import { createElement } from "./generator.js";
const navBarElements = [
    {
      "tag": "nav",
      "children": [
        {
          "tag": "div",
          "class": "nav-container",
          "children": [
            {
              "tag": "div",
              "class": "nav-form-info",
              "children": [
                {
                  "tag": "div",
                  "class": "nav-logo",
                  "children": [
                    {
                      "tag": "img",
                      "attributes": {
                        "src": "images/gf.png",
                        "alt": "Google Logo"
                      }
                    }
                  ]
                },
                {
                  "tag": "div",
                  "class": "nav-title",
                  "children": [
                    {
                      "tag": "input",
                      "attributes": {
                        "type": "text",
                        "value": "Untitled form",
                        "id": "form-title"
                      }
                    },
                    {
                      "tag": "div",
                      "class": "underline"
                    }
                  ]
                }
              ]
            },
            {
              "tag": "div",
              "class": "nav-form-account",
              "children": [
                {
                  "tag": "div",
                  "class": "nav-from-account-details",
                  "children": [
                    {
                      "tag": "button",
                      "class": "publish",
                      "text": "Publish"
                    },
                    {
                      "tag": "div",
                      "class": "nav-form-settings",
                      "children": [
                        {
                          "tag": "i",
                          "class": "fa-solid fa-ellipsis-vertical"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "tag": "div",
          "class": "nav-pages",
          "children": [
            {
              "tag": "input",
              "class": "page-selection",
              "attributes": {
                "type": "radio",
                "id": "questions",
                "name": "nav-page",
                "checked": ""
              }
            },
            {
              "tag": "label",
              "class": "page-selection",
              "attributes": {
                "for": "questions"
              },
              "text": "Questions"
            },
            {
              "tag": "input",
              "class": "page-selection",
              "attributes": {
                "type": "radio",
                "id": "responses",
                "name": "nav-page"
              }
            },
            {
              "tag": "label",
              "class": "page-selection",
              "attributes": {
                "for": "responses"
              },
              "text": "Responses"
            },
            {
              "tag": "input",
              "class": "page-selection",
              "attributes": {
                "type": "radio",
                "id": "settings",
                "name": "nav-page"
              }
            },
            {
              "tag": "label",
              "class": "page-selection",
              "attributes": {
                "for": "settings"
              },
              "text": "Settings"
            }
          ]
        }
      ]
    }
  ]

const headingElements = [
    {
      "tag": "div",
      "class": "form-body-container",
      "children": [
        {
          "tag": "div",
          "class": "form-heading",
          "children": [
            {
              "tag": "div",
              "class": "form-heading-title-div",
              "children": [
                {
                  "tag": "input",
                  "class": "form-heading-title-input",
                  "attributes": {
                    "type": "text"
                  }
                }
              ]
            },
            {
              "tag": "div",
              "class": "form-heading-discription-div",
              "children": [
                {
                  "tag": "input",
                  "class": "form-heading-discription-input",
                  "attributes": {
                    "type": "text",
                    "placeholder": "Form description"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]




// here the nav bar is created and appended to the body
export const navBarInit = () => createElement(navBarElements,document.body);


// here the form heading is created and appended to the body
export const headingInit = () => createElement(headingElements,document.body);




// here only the forms title is manipulated
export function headingFun() {
    const formTitle = document.getElementById("form-title");
const underline = document.querySelector(".underline");

//underline event listener as block
formTitle.addEventListener("focus", () => {
    underline.style.display = "block";
    formTitle.select();
});

//underline event listener as none
formTitle.addEventListener("blur", () => {
  underline.style.display = "none";
});


// initial heading of the form will be heading title 
const formHeadingTitleInput = document.querySelector(
  ".form-heading-title-input"
);
formHeadingTitleInput.value = formTitle.value;


//EL for the heading of the form for missing heading
formHeadingTitleInput.addEventListener("blur", () => {
  if (formHeadingTitleInput.value === "") {
    formHeadingTitleInput.value = formTitle.value;
  }
});
}