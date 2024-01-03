import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';


export const RegisterFormikPage = () => {
  

  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
              name: '',
              email: '',
              password1: '',
              password2: ''
            }}
            onSubmit={(values) => {
              console.log(values)
            }}            
            validationSchema={
              Yup.object({
                name: Yup.string()
                                  .min(2, 'Debe tener al menos 2 carácteres')
                                  .max(15, 'Debe tener 15 carácteres o menos')
                                  .required('Requerido'),                
                email: Yup.string()
                                  .email('El correo no tiene un formato válido')                                
                                  .required('Requerido'),
                password1: Yup.string()
                                  .min(6, 'Debe tener al menos 6 carácteres')
                                  .required('Requerido'),
                password2: Yup.string()
                                  .oneOf([Yup.ref('password1')], 'Las contraseñas tienen que ser iguales')
                                  .required('Requerido')
              })
            }>
            {({handleReset}) => (
                <Form>

                  <MyTextInput label="Name" name="name" placeholder='Nico'/>

                  <MyTextInput label="Email Address" name="email" placeholder='loquesea@gmail.com' type="email"/>

                  <MyTextInput label="Password" name="password1" placeholder='******' type='password'/>

                  <MyTextInput label="Repeat Password" name="password2" placeholder='******' type='password'/>
                  <button type="submit">Create</button>

                  <button type="button" onClick={handleReset}>Reset Form</button>
                </Form>  
              )
            }
           </Formik>
    </div>
  )
}
