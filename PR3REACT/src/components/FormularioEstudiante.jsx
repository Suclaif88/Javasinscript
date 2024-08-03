import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './FormularioEstudiante.css';

const FormularioEstudiante = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { primerCorte, segundoCorte, tercerCorte } = data;
    const notaFinal = (primerCorte * 0.35) + (segundoCorte * 0.35) + (tercerCorte * 0.30);
    const aprobado = notaFinal >= 3.0;

    Swal.fire({
      title: aprobado ? '¡Aprobaste la materia!' : 'No aprobaste la materia.',
      icon: aprobado ? 'success' : 'error',
      confirmButtonText: 'Ok'
    });
  };

  return (
    <div className="form-container">
      <form className="formulario-estudiante" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register('nombre', { required: true })} />
        {errors.nombre && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="text" placeholder="Apellidos" {...register('apellidos', { required: true })} />
        {errors.apellidos && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="number" placeholder="Teléfono" {...register('telefono', { required: true })} />
        {errors.telefono && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="number" placeholder="Identificación" {...register('identificacion', { required: true })} />
        {errors.identificacion && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="email" placeholder="Email" {...register('email', { required: true })} />
        {errors.email && <span className="error-message">Este campo es obligatorio</span>}
        
        <select {...register('nivel', { required: true })}>
          <option value="">Seleccione una opción</option>
          <option value="Técnico">Técnico</option>
          <option value="Tecnólogo">Tecnólogo</option>
          <option value="Pregrado">Pregrado</option>
          <option value="Postgrado">Postgrado</option>
        </select>
        {errors.nivel && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="text" placeholder="Nombre del Programa" {...register('nombrePrograma', { required: true })} />
        {errors.nombrePrograma && <span className="error-message">Este campo es obligatorio</span>}
        
        <input type="number" placeholder="Nota Primer Corte (35%)" {...register('primerCorte', { required: true, min: 0, max: 5 })} />
        {errors.primerCorte && <span className="error-message">Nota debe estar entre 0 y 5</span>}
        
        <input type="number" placeholder="Nota Segundo Corte (35%)" {...register('segundoCorte', { required: true, min: 0, max: 5 })} />
        {errors.segundoCorte && <span className="error-message">Nota debe estar entre 0 y 5</span>}
        
        <input type="number" placeholder="Nota Tercer Corte (30%)" {...register('tercerCorte', { required: true, min: 0, max: 5 })} />
        {errors.tercerCorte && <span className="error-message">Nota debe estar entre 0 y 5</span>}
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioEstudiante;
