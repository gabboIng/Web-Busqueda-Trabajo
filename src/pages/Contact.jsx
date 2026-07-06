import { useContactForm } from "../hooks/useContactForm"
export function Contact() {
const {form,errors,handleChange,handleSubmit}=useContactForm()


  return (
    <div>
      <h1>📧 Contacto</h1>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
        {errors.nombre && <span>{errors.nombre}</span>}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        {errors.email && <span>{errors.email}</span>}
        
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea name="mensaje" id="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required></textarea>
        {errors.mensaje && <span>{errors.mensaje}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}