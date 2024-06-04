        const nameinput = document.getElementById("nombre");
        const telinput = document.getElementById("tel");
        const emailinput = document.getElementById("email");
        const contactlist = document.getElementById("contactlist");

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
                <td>
                    <button onclick="deleteContact(this)" class="buttonBO">Eliminar</button>
                    <button onclick="editContact(this)" class="buttonED">Editar</button>
                </td>
            </tr>`;
            nameinput.value = "";
            telinput.value = "";
            emailinput.value = "";

            Swal.fire({
                title: "CORRECTO",
                text: "Elemento agregado con exito!",
                icon: "success"
            });
        }

        function deleteContact(element) {
            Swal.fire({
                title: "¿ESTAS SEGURO?",
                text: "Esta accion no se puede revertir",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borralo!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Borrado!",
                        text: "Se elimino con exito el elemento",
                        icon: "success"
                    });
                    element.closest('tr').remove();
                }
            });
        }

        function editContact(element) {
            const row = element.closest('tr');
            const name = row.cells[0].innerText;
            const tel = row.cells[1].innerText;
            const email = row.cells[2].innerText;

            nameinput.value = name;
            telinput.value = tel;
            emailinput.value = email;

            const addButton = document.querySelector("button[onclick='addContact()']");
            addButton.innerText = "Actualizar";
            addButton.onclick = function() {
                row.cells[0].innerText = nameinput.value;
                row.cells[1].innerText = telinput.value;
                row.cells[2].innerText = emailinput.value;

                addButton.innerText = "Agregar";
                addButton.onclick = addContact;

                nameinput.value = "";
                telinput.value = "";
                emailinput.value = "";

                Swal.fire({
                    title: "CORRECTO",
                    text: "Elemento actualizado con exito!",
                    icon: "success"
                });
            };
        }