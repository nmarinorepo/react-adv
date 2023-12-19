import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'
import { MyCheckbox, MySelect, MyTextInput } from '../components';


export const FormikAbstraction = () => {
   
   return (
    <div>
           <h1>Formik Abstraction</h1>   

           <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              terms: false,
              jobType: ''
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
            validationSchema={
              Yup.object({
                firstName: Yup.string()
                                  .max(15, 'Debe tener 15 carácteres o menos')
                                  .required('Requerido'),
                lastName: Yup.string()
                                  .max(15, 'Debe tener 15 carácteres o menos')
                                  .required('Requerido'),
                email: Yup.string()
                                  .email('El correo no tiene un formato válido')                                
                                  .required('Requerido'),
                terms: Yup.boolean()
                                  .oneOf([true], 'Debe aceptar las condiciones'),
                jobType: Yup.string()
                                  .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                  .required('Requerido')
              })
            }>
            {(formik) => (
                <Form>

                  <MyTextInput label="First Name" name="firstName" placeholder='Nico'/>
                  
                  <MyTextInput label="Last Name" name="lastName" placeholder='Marino'/>

                  <MyTextInput label="Email Address" name="email" placeholder='loquesea@gmail.com' type="email"/>

                  <MySelect label="Job Type" name="jobType">
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">IT Senior</option>
                    <option value="it-jr">IT Junior</option>
                  </MySelect>

                  <MyCheckbox label="Terms and conditions" name="terms"/>
             
                  <button type="submit">Submit</button>
                </Form>  
              )
            }
           </Formik>           
    </div>
  )
}
