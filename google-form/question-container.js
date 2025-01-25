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
    const div = createElement(questionContainer, null);
    // const div = createElement(questionContainer, formBodyContainer);
    const activeBox = document.querySelector(".active-box");
    if(activeBox) {
      activeBox.insertAdjacentElement('afterend',div[0])
    }
    else {
      formBodyContainer.appendChild(div[0]);
    }
    activeBox.classList.remove("active-box");
    div[0].classList.add('active-box');
    sideMenuEventListener(div[0]);
    questionTypeOptionFun(div[0]);
  }


export function deleteQuestionContainerFun() {
  const activeBox = document.querySelector(".active-box");
  if(!activeBox) return;
  if(document.querySelector(".form-heading") === activeBox) return;
  const alternateActiveBox = (function(activeBox) {
    if(activeBox.nextElementSibling) {
      return activeBox.nextElementSibling;
    }
    if(activeBox.previousElementSibling) {
      return activeBox.previousElementSibling;
    }
    else {
      return document.querySelector(".form-heading");
    }
  })(activeBox)
  activeBox.remove();
  alternateActiveBox.classList.add('active-box');
}

  
  
  //-------------------------------------------------Question type option list----------------------------------------------
  
  function questionTypeOptionFun(div) {
    const questionSelection = div.querySelector(".question-selection");
    createElement(questionTypeOptionList, questionSelection);
    questionTypeSelectionFun(div);
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
  
  
  function questionTypeSelectionFun(div) {
    const questionType = div.querySelector(".question-type"); // Selected question type
    const questionTypeSelectionContainer = div.querySelector(
      ".question-type-selection-container"
    ); // Button to change the type
    const questionTypeList = div.querySelectorAll(".option"); // List of question types
    const questionTypeOptions = div.querySelector(".question-type-options"); // Div containing the list of question types
  
    //default question type
    questionType.innerHTML = questionTypeList[0].innerHTML;
    selectedQuestionType(questionType.querySelector("span").innerText, div);
  
    //showing the question type options
    questionTypeSelectionContainer.addEventListener("click", () => {
      questionTypeOptions.style.display = "flex";
    });
  
    //hiding the question type options
    div.addEventListener("click", (event) => {
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
        selectedQuestionType(qtype, div);
      });
    });
  }
  
  //navigating to question type generator
  function selectedQuestionType(qtype, div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
    const qstc = questionSelectedTypeContainer;
    qstc.innerHTML = "";
    if (qtype === "Multiple Choice") {
      createMarkDown(div);
    } else if (qtype === "Checkboxes") {
      createMarkDownCheckbox(div);
    } else if (qtype === "Drop Down") {
      createMarkDownDropDown(div);
    } else if (qtype === "Paragraph") {
      createParagraph(div);
    } else if (qtype === "Time") {
      createTime(div);
    } else if (qtype === "Date") {
      createDate(div);
    }
  }
  
  
  
  
  
  
  
  //------------------------------------------------Question Type Generation----------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------
  
  //----------- Markdown - Multiple Choice ----------------
  function createMarkDown(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdown, questionSelectedTypeContainer);
  
    const add = div.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownOption,
        div.querySelector(".markdown-options")
      );
      const closeButton = arr[0].querySelector(".markdown-option-close");
      closeButton.addEventListener("click", () => {
        arr[0].remove();
      });
    });
  }
  
  //----------- Markdown - CheckBox --------------------
  function createMarkDownCheckbox(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdownCheckbox, questionSelectedTypeContainer);
  
    const add = div.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownCheckboxOption,
        div.querySelector(".markdown-options")
      );
      const closeButton = arr[0].querySelector(".markdown-option-close");
      closeButton.addEventListener("click", () => {
        arr[0].remove();
      });
    });
  }
  
  //----------- Markdown - Drop Down ----------------
  function createMarkDownDropDown(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(markdownDropdown, questionSelectedTypeContainer);
  
    const updateSequence = () => {
      const sequenceElements = div.querySelectorAll(
        ".markdown-option .num-sequence"
      );
      sequenceElements.forEach((element, index) => {
        element.textContent = `${index + 1}.`;
      });
    };
  
    updateSequence();
  
    const add = div.querySelector(".markdown-add-option>button");
    add.addEventListener("click", () => {
      const arr = createElement(
        markdownDropdownOption,
        div.querySelector(".markdown-options")
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
  function createParagraph(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(paragraph, questionSelectedTypeContainer);
  }
  
  //---------- Time -----------------------
  function createTime(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(timeType, questionSelectedTypeContainer);
  }
  
  //--------- Date --------------------------
  function createDate(div) {
    const questionSelectedTypeContainer = div.querySelector(
      ".question-selected-type-container"
    );
  
    createElement(dateType, questionSelectedTypeContainer);
  }
  