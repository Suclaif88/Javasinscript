document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
        {
            pregunta: '¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?',
            opciones: ['push()', 'append()', 'addToEnd()', 'insertLast()'],
            respuesta: 0
        },
        {
            pregunta: '¿Cuál de las siguientes no es una estructura de control en JavaScript?',
            opciones: ['if-else', 'switch-case', 'while', 'loop'],
            respuesta: 3
        },
        {
            pregunta: '¿Cuál de las siguientes no es una forma de declarar una variable en JavaScript?',
            opciones: ['let', 'var', 'int', 'const'],
            respuesta: 2
        },
        {
            pregunta: '¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?',
            opciones: ['remove()', 'pop()', 'deleteLast()', 'spliceLast()'],
            respuesta: 1
        },
        {
            pregunta: '¿Cuál es la forma correcta de comentar una sola línea en JavaScript?',
            opciones: ['// Comentario', '/* Comentario */', '<!-- Comentario -->', '/** Comentario */'],
            respuesta: 0
        },
        {
            pregunta: '¿Qué función se utiliza para obtener la longitud de un array en JavaScript?',
            opciones: ['length()', 'size()', 'getSize()', 'count()'],
            respuesta: 0
        },
        {
            pregunta: '¿Qué método se utiliza para convertir un string a minúsculas en JavaScript?',
            opciones: ['toLower()', 'lowerCase()', 'toLowerCase()', 'convertToLower()'],
            respuesta: 2
        },
        {
            pregunta: '¿Cuál de los siguientes no es un tipo de dato primitivo en JavaScript?',
            opciones: ['string', 'number', 'array', 'boolean'],
            respuesta: 2
        },
        {
            pregunta: '¿Qué operador se utiliza para concatenar dos strings en JavaScript?',
            opciones: ['+', '&', '||', '-'],
            respuesta: 0
        },
        {
            pregunta: '¿Cuál es el resultado de 10 + 5 + "3" en JavaScript?',
            opciones: ['23', '153', '103', '15'],
            respuesta: 1
        }
    ];
    
    let preguntasAleatorias = [];
    let indicePreguntaActual = 0;
    let puntaje = 0;

    const elementoPregunta = document.getElementById('question');
    const elementoOpciones = document.getElementById('options');
    const botonSiguiente = document.getElementById('next-btn');
    const contenedorResultado = document.getElementById('result-container');
    const contenedorQuiz = document.getElementById('question-container');
    const elementoPuntaje = document.getElementById('score');
    const botonReiniciar = document.getElementById('restart-btn');

    function comenzarQuiz() {
        preguntasAleatorias = preguntas.sort(() => Math.random() - 0.5);
        contenedorQuiz.classList.remove('hidden');
        contenedorResultado.classList.add('hidden');
        mostrarPregunta();
    }

    function mostrarPregunta() {
        const preguntaActual = preguntasAleatorias[indicePreguntaActual];
        elementoPregunta.textContent = preguntaActual.pregunta;
        elementoOpciones.innerHTML = '';
        preguntaActual.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.textContent = opcion;
            boton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'w-full', 'transition', 'duration-300');
            boton.addEventListener('click', () => manejarClicOpcion(boton, index));
            elementoOpciones.appendChild(boton);
        });
    }

    function manejarClicOpcion(boton, indiceSeleccionado) {
        const esCorrecta = indiceSeleccionado === preguntasAleatorias[indicePreguntaActual].respuesta;
        if (esCorrecta) {
            boton.classList.replace('bg-blue-500', 'bg-green-500');
            puntaje++;
            Swal.fire('¡Correcto!', '¡Ganaste un punto!', 'success');
        } else {
            boton.classList.replace('bg-blue-500', 'bg-red-500');
            Swal.fire('Incorrecto', '¡Esa no es la respuesta correcta!', 'error');
            
            const respuestaCorrectaIndex = preguntasAleatorias[indicePreguntaActual].respuesta;
            const opciones = elementoOpciones.querySelectorAll('button');
            opciones[respuestaCorrectaIndex].classList.replace('bg-blue-500', 'bg-green-500');
        }

        deshabilitarOpciones();
        botonSiguiente.classList.remove('hidden');
    }

    function deshabilitarOpciones() {
        elementoOpciones.querySelectorAll('button').forEach(boton => {
            boton.disabled = true;
        });
    }

    function mostrarResultado() {
        contenedorQuiz.classList.add('hidden');
        contenedorResultado.classList.remove('hidden');
        elementoPuntaje.textContent = `Tu puntaje es ${puntaje} de ${preguntasAleatorias.length}`;
    }

    botonSiguiente.addEventListener('click', () => {
        if (indicePreguntaActual < preguntasAleatorias.length - 1) {
            indicePreguntaActual++;
            mostrarPregunta();
            botonSiguiente.classList.add('hidden');
        } else {
            mostrarResultado();
        }
    });

    botonReiniciar.addEventListener('click', comenzarQuiz);

    comenzarQuiz();
});

const botonBrag = document.getElementById('brag-btn');
const gifContainer = document.getElementById('gif-container');

botonBrag.addEventListener('click', () => {
    gifContainer.classList.toggle('hidden');
    if (!gifContainer.classList.contains('hidden')) {
        gifContainer.style.display = 'flex';
        gifContainer.style.justifyContent = 'center';
        gifContainer.style.alignItems = 'center';
    } else {
        gifContainer.removeAttribute('style');
    }
});




/*
La Z y la L
Todo empezó como en la rueda de la fortuna
Si tú te quitas una prenda, yo también me quito una (Randy Man)
Poquito a poco, poco a poquito
Se fue quedando sin ropa (Ave María)
Poquito a poco, poco a poquito
Me fui acercando a su boca (Zion)
Una fanática normal como ninguna (Dile Z)
Ella me come, pero yo soy quién la desayuna (Soy yo)
Poquito a poco, poco a poquito
Se fue acercando a mi boca
Poquito a poco, poco a poquito
Le fue subiendo la nota (¡Olé!)
Ay, ¿Por qué será? (Piel morena)
Que me tiene loco (Mamacita)
Ella sabe hacerlo todo bien poquito a poco (Oye)
Ay, ¿Por qué será?
Que me tiene loco
Ella sabe hacerlo todo bien poquito a poco
Papapará, pararapapará (Vamo')
Poquito a poco
Papapará, pararapapará
Poquito a poco
Papapará, pararapapará
Poquito a poco
Papapará, pararapapará-rará
Me volví adicto a tu cintura en un segundo
Y voy sintiendo que ella es parte de mi mundo (Randy Man)
Me tiene loco alborota'o, no dejo de pensar en ella
Creo que estoy enamorao' (Picante)
Porque me tiene viendo las estrellas
Así, así, poquito a poco se fue quitando la ropa
Así, así, poquito a poco le fue subiendo la nota
Así, así, poquito a poco me fue quitando la ropa
Así, así, poquito a poco le fue subiendo
Ay, ¿Por qué será?
Que me tiene loco
Ella sabe hacerlo todo bien poquito a poco (Me tiene loco)
Ay, ¿Por qué será?
Que me tiene loco
Ella sabe hacerlo todo bien poquito a poco (Uno, dos, tres, oye)
Papapará, pararapapará
Poquito a poco
Papapará, pararapapará (Randy Man)
Poquito a poco
Papapará, pararapapará
Poquito a poco
Papapará, pararapapará-rará
Poquito a poco
Mira, una mezcla perfecta (Boni)
¡Gente de Zona!
La Z y la L
Me tiene loco
Ay pero nena, por ti me sofoco
Ay pero nena, tú me tienes loco
(Mamacita)
Poquito a poco
*/