// Import dependencies
import { createElement } from "./generator.js";
import {
  markdownOption,
  markdown,
  markdownCheckboxOption,
  markdownCheckbox,
  markdownDropdown,
  markdownDropdownOption,
  paragraph,
  timeType,
  dateType,
  questionTypeOptionList,
  questionContainer,
} from "./data.js";
import { sideMenuEventListener } from "./sidemenu.js";
//--------------------------------------------------Question container----------------------------------------------------
export function questionContainerFun() {
    const formBodyContainer = document.querySelector(".form-body-container");
    const div = createElement(questionContainer, formBodyContainer);
    sideMenuEventListener(div[0]);
    questionTypeOptionFun();
  }
  
  
  //-------------------------------------------------Question type option list----------------------------------------------
  
  function questionTypeOptionFun() {
    const questionSelection = document.querySelector(".question-selection");
    createElement(questionTypeOptionList, questionSelection);
    questionTypeSelectionFun();
  }
  
  
  //----------------------------------------------- Question Type Selection--------------------------------------------------
  
  /*
  here a dropdown is there, which contains the list of question-types.
  by default the first element in the list will be the question-type
  and allowing the admin to dynamically choice the question type form the dropdown
  this dropdown also contains the show/hide functionality accordingly.
  By selecting the question dynamically , again the particular question-type will be selected
  and their respective option will be loaded
  */
  
  
  function questionTypeSelectionFun() {
    const questionType = document.querySelector(".question-type"); // Selected question type
    const questionTypeSelectionContainer = document.querySelector(
      ".question-type-selection-container"
    ); // Button to change the type
    const questionTypeList = document.querySelectorAll(".option"); // List of question types
    const questionTypeOptions = document.querySelector(".question-type-options"); // Div containing the list of question types
  
    //default question type
    questionType.innerHTML = questionTypeList[0].innerHTML;
    selectedQuestionType(questionType.querySelector("span").innerText);
  
    //showing the question type options
    questionTypeSelectionContainer.addEventListener("click", () => {
      questionTypeOptions.style.display = "flex";
    });
  
    //hiding the question type options
    document.addEventListener("click", (event) => {
      if (
        !questionTypeSelectionContainer.contains(event.target) &&
        !questionTypeOptions.contains(event.target)
      ) {
        questionTypeOptions.style.display = "none";
      }
    });
  
    //selecting the question type
    questionTypeList.forEach((option) => {
      option.addEventListener("click", () => {
        questionType.innerHTML = option.innerHTML;
        questionTypeOptions.style.display = "none";
        const qtype = questionType.querySelector("span").innerText;
        selectedQuestionType(qtype);
      });
    });
  }
  
  //navigating to question type generator
  function selectedQuestionType(qtype) {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
    questionSelectedTypeContainer.innerHTML = "";
    if (qtype === "Multiple Choice") {
      createMarkDown();
    } else if (qtype === "Checkboxes") {
      createMarkDownCheckbox();
    } else if (qtype === "Drop Down") {
      createMarkDownDropDown();
    } else if (qtype === "Paragraph") {
      createParagraph();
    } else if (qtype === "Time") {
      createTime();
    } else if (qtype === "Date") {
      createDate();
    }
  }
  
  
  
  
  
  
  
  //------------------------------------------------Question Type Generation----------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------
  
  //----------- Markdown - Multiple Choice ----------------
  function createMarkDown() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdown, questionSelectedTypeContainer);
  
    const add = document.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownOption,
        document.querySelector(".markdown-options")
      );
      const closeButton = arr[0].querySelector(".markdown-option-close");
      closeButton.addEventListener("click", () => {
        arr[0].remove();
      });
    });
  }
  
  //----------- Markdown - CheckBox --------------------
  function createMarkDownCheckbox() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdownCheckbox, questionSelectedTypeContainer);
  
    const add = document.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownCheckboxOption,
        document.querySelector(".markdown-options")
      );
      const closeButton = arr[0].querySelector(".markdown-option-close");
      closeButton.addEventListener("click", () => {
        arr[0].remove();
      });
    });
  }
  
  //----------- Markdown - Drop Down ----------------
  function createMarkDownDropDown() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdownDropdown, questionSelectedTypeContainer);
  
    const updateSequence = () => {
      const sequenceElements = document.querySelectorAll(
        ".markdown-option .num-sequence"
      );
      sequenceElements.forEach((element, index) => {
        element.textContent = `${index + 1}.`;
      });
    };
  
    updateSequence();
  
    const add = document.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownDropdownOption,
        document.querySelector(".markdown-options")
      );
      updateSequence();
      const closeButton = arr[0].querySelector(".markdown-option-close");
      closeButton.addEventListener("click", () => {
        arr[0].remove();
        updateSequence();
      });
    });
  }
  
  //--------- Paragraph -----------------------
  function createParagraph() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(paragraph, questionSelectedTypeContainer);
  }
  
  //---------- Time -----------------------
  function createTime() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(timeType, questionSelectedTypeContainer);
  }
  
  //--------- Date --------------------------
  function createDate() {
    const questionSelectedTypeContainer = document.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(dateType, questionSelectedTypeContainer);
  }
  