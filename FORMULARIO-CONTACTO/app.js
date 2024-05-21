const nameinput = document.getElementById("nombre");
const telinput = document.getElementById("tel");
const emailinput = document.getElementById("email");
const contactlist = document.getElementById("contactTable");

function addContact() {
    const name = nameinput.value;
    const tel = telinput.value;
    const email = emailinput.value;
    const contact = {
        name: name,
        tel: tel,
        email: email
    };
    contactlist.innerHTML += `<tr>
    <td>${contact.name}</td>
    <td>${contact.tel}</td>
    <td>${contact.email}</td>
    <td><button onclick="deleteContact(this)">Eliminar</button></td>
    </tr>`;
    nameinput.value = "";
    telinput.value = "";
    emailinput.value = "";
}

function deleteContact(element) {
    element.parentElement.parentElement.remove();
}
