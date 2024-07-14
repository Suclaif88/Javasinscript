const jsonString = `[
    {
        "nombre": "Ana",
        "puesto": "Desarrolladora",
        "salario": 50000
    },
    {
        "nombre": "Luis",
        "puesto": "Diseñador",
        "salario": 40000
    },
    {
        "nombre": "María",
        "puesto": "Gerente",
        "salario": 60000
    }
]`;

const empleados = JSON.parse(jsonString);

let salarioTotal = 0;
empleados.forEach(empleado => {
    salarioTotal += empleado.salario;
});

const salarioPromedio = salarioTotal / empleados.length;

console.log(`El salario promedio de los empleados es: ${salarioPromedio}`);
