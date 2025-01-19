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

//------------------------------ form heading functionalities -------------------------------
const formTitle = document.getElementById("form-title");
const underline = document.querySelector(".underline");

formTitle.addEventListener("focus", () => {
  underline.style.display = "block";
  formTitle.select();
});

formTitle.addEventListener("blur", () => {
  underline.style.display = "none";
});

const formHeadingTitleInput = document.querySelector(
  ".form-heading-title-input"
);
formHeadingTitleInput.value = formTitle.value;

formHeadingTitleInput.addEventListener("blur", () => {
  if (formHeadingTitleInput.value === "") {
    formHeadingTitleInput.value = formTitle.value;
  }
});

//------------------------------------------------- side menu and the active div ---------------------------------------------------
const listOfDiv = document.querySelectorAll(".form-body-container > div");
listOfDiv.forEach((div) => {
  sideMenu(div);
});

function sideMenu(div) {
  div.addEventListener("click", () => {
    //Marking the active div
    listOfDiv.forEach((div) => {
      div.classList.remove("active-box");
    });
    div.classList.add("active-box");

    //side-menu positioning
    const rect = div.getBoundingClientRect();
    const sideMenu = document.querySelector(".side-menu");
    sideMenu.style.left = `${rect.right + 10}px`;
    sideMenu.style.top = `${rect.top}px`;
    sideMenu.style.height = `${rect.height}px`;
    sideMenu.style.display = "flex";
  });
}

const addQuestion = document.querySelector(".add-question");
addQuestion.addEventListener("click", () => {
  questionContainerFun();
});

//-------------------------------------------------Question type option list----------------------------------------------

function questionTypeOptionFun() {
  const questionSelection = document.querySelector(".question-selection");
  createElement(questionTypeOptionList, questionSelection);
  questionTypeSelectionFun();
}

//--------------------------------------------------Question container----------------------------------------------------
function questionContainerFun() {
  const formBodyContainer = document.querySelector(".form-body-container");
  const div = createElement(questionContainer, formBodyContainer);
  questionTypeOptionFun();
  sideMenu(div[0]);
}

//----------------------------------------------- Question Type Selection--------------------------------------------------

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
