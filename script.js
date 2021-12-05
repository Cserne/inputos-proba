const formElement = (type, name, title) => {
    return `
        <div>
            <label>${title}</label>
            <input type="${type}" name="${name}">
        </div>
    `
};

const inputElement = `
    <form id="form">
        ${formElement("text", "firstName", "Keresztneved")}
        ${formElement("file", "profilePicture", "Fényképed")}
        ${formElement("checkbox", "subscription", "Szeretnél-e feliratkozni?")}
        ${formElement("text", "notes", "Megjegyzés:")}
        <button>Elküldés</button>
    </form>
`
submitForm = (event) => {
    event.preventDefault();
    event.target.classList.add("submitted")
}

const inputUpdate = (event) => {
    document.getElementById("inputValue").innerHTML = event.target.value;
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", inputElement);
    root.insertAdjacentHTML("beforeend", `
        <div id="inputValue"></div>
    `)

    const form = document.getElementById("form");
    form.addEventListener("submit", submitForm);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputUpdate);
    }
}

window.addEventListener("load", loadEvent);