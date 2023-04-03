const form = document.querySelector(".main-form");
const table = document.createElement("table");

form.addEventListener("submit", function (event) {
event.preventDefault();

const formData = new FormData(event.target);
const formDataObject = Object.fromEntries(formData);

Object.entries(formDataObject).forEach(([key, value]) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = `${key}: ${value}`;
    tr.appendChild(td);

    table.appendChild(tr);
});
form.style.display = "none";
document.body.appendChild(table);
});


