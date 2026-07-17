import { useContactForm } from "../hooks/useContactForm"
import style from '../components/Contact.module.css'
export function Contact() {
const {form,errors,handleChange,handleSubmit}=useContactForm()


  return (
    <div className={style.contact}>
      <div>
        <h1>Hablemos!</h1>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input className={style.input} type="text" id="nombre" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
        {errors.nombre && <span>{errors.nombre}</span>}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="ejemplo@correo.cl" value={form.email} onChange={handleChange} required />
        {errors.email && <span>{errors.email}</span>}
        
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea name="mensaje" id="mensaje" rows="4" placeholder="En que podemos ayudarte?" value={form.mensaje} onChange={handleChange} required></textarea>
        {errors.mensaje && <span>{errors.mensaje}</span>}

        <button className={style.buttonContact} type="submit">Enviar</button>
      </form>
      </div>
    </div>
  )
}