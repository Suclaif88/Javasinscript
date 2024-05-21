function calcularPropina(){
    let total = document.getElementById('total').value;
    let propina = document.querySelector('input[name="propina"]:checked').value;
    let resultado = total * propina;
    // console.log(resultado)

    Swal.fire({
        title: "Propina Calculada",
        text: resultado,
        icon: "info"
      });
}