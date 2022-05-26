const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const output = document.getElementsByClassName("list")[0];

function keypressEvent(e) {
  if (e.key === "Enter" && input.value !== "") {
    buttonClickEvent();
  }
}

function buttonClickEvent() {
  if (input.value !== "") {
    const list = document.createElement("div");
    const Xbutton = document.createElement("button");
    const checkbox = document.createElement("input");
    const text = document.createElement("p");
    output.appendChild(list);
    list.appendChild(Xbutton);
    list.appendChild(checkbox);
    list.appendChild(text);

    Xbutton.innerText = "X";

    list.className = "one";
    Xbutton.className = "Xbutton";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    text.innerText = input.value;
    input.value = "";

    Xbutton.addEventListener("click", function XbuttonClickEvent() {
      output.removeChild(list);
    });

    checkbox.addEventListener("click", function checkboxClickEvent() {
      if (checkbox.checked === true) {
        text.className = "line-through";
      } else if (checkbox.checked === false) {
        text.classList.remove("line-through");
      }
    });

    let i = 1;

    text.addEventListener("dblclick", function dbclickEvent() {
      if (i === 1) {
        i = 0;
        const modify = document.createElement("input");
        const modify_add = document.createElement("button");
        const modify_div = document.createElement("div");
        list.appendChild(modify_div);
        list.appendChild(modify_add);
        modify_div.appendChild(modify);

        modify.value = text.innerText;

        modify_div.className = "modify_div";
        modify.className = "modify";
        modify_add.className = "modify_button";
        modify_add.innerText = "+";

        modify_add.addEventListener("click", modifyFunction);

        function modifyFunction() {
          if (modify.value !== "") {
            text.innerHTML = modify.value;
            modify.value = "";
            list.removeChild(modify_div);
            list.removeChild(modify_add);
            i = 1;
          } else {
            list.removeChild(modify_div);
            list.removeChild(modify_add);
            i = 1;
          }
        }

        function Enterkye(e) {
          if (e.key === "Enter") {
            modifyFunction();
          }
        }

        window.addEventListener("keypress", Enterkye);
      }
    });
  }
}

button.addEventListener("click", buttonClickEvent);
window.addEventListener("keypress", keypressEvent);
