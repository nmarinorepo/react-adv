import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  
  const {formData, onChange, resetForm, isValidEmail, name, email, password1, password2} = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div>
        <h1>Register page</h1>
        <form noValidate onSubmit={(evento)=>onSubmit(evento)}>
            <input 
                type="text"
                placeholder="Name"
                name='name'
                value = {name}
                onChange = {onChange}
                className={`${name.trim().length<=0 && 'has-error'}`}
            />
            { name.trim().length<=0 && <span>Este campo es obligatorio</span>}

            <input 
                type="email"
                placeholder="Email"
                name='email'
                value = {email}
                onChange = {onChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es válido</span>}

            <input 
                type="password"
                placeholder="Password"
                name='password1'
                value = {password1}
                onChange = {(evento)=>onChange(evento)}
            />
            { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 carácteres</span>}

            <input 
                type="password"
                placeholder="Repeat Password"
                name='password2'
                value = {password2}
                onChange = {onChange}
            />
            { password2.trim().length<=0 && <span>Este campo es obligatorio</span>}
            { password2.trim().length>0 && password1 !== password2 && <span>Las contraseñas tienen que ser iguales</span>}

            <button type="submit">Create</button>
            <button onClick={resetForm} type="button">Reset form</button>
        </form>
    </div>
  )
}
