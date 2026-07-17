import { useState } from "react";


function validate(form){
    const errors = {}

    if(form.nombre.trim() === ""){
        errors.nombre ="El nombre es obligatorio"
    }

    if(form.email.trim() === ""){
        errors.email = "El email es obligatorio"
    }else if (!/\S+@\S+\.\S+/ .test(form.email)){
        errors.email = "email invalido"
    }else if(form.mensaje.trim() === ""){
        errors.mensaje = "El mensaje no puede estar vacio"     
    }else if (form.mensaje.trim().length < 10){
        errors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }
    return errors
}

export function useContactForm(){
    const [form, setForm] =useState({nombre:"",email:"",mensaje:""})
    const [errors, setErrors] = useState({})
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const validarErrores = validate(form)
        if(Object.keys(validarErrores).length > 0){
            setErrors(validarErrores)
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Enviado!',
                text: "Formulario enviado con exito",
                background : '#0a3d66',
                color : 'white'
            })
            setForm({nombre : "",email :"",mensaje :"" })
            setErrors({})
            console.log("Formulario enviado:",form)
        }
    }

    return {form,errors,handleChange,handleSubmit}
}



