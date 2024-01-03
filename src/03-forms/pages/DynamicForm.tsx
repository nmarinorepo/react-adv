import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';


const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;
    
    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type==='minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value} carácteres`)
        }

        if(rule.type === 'email') {
            schema = schema.email('Email no válido')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log(values)
            }}
        >
            {(formik) => (
                <Form noValidate>
                    {
                        formJson.map(({type, name, placeholder, label, options }) => {
                            
                            if(type === 'input' || type === 'password' || type === 'email') {                    
                                return <MyTextInput key={name} type={(type as any)} name={name} label={label} placeholder={placeholder}/>
                            } else if (type === 'select') {
                                return (
                                    <MySelect key={name} label={label} name={name}>
                                        <option value="">Select an option</option>
                                        {
                                           options?.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.label}</option>
                                           )) 
                                        }
                                    </MySelect>
                                )
                            }

                            // return <span>Type: {type} no es suportado</span>
                            throw new Error(`El tipo: ${type} no es suportado`)
                        })
                    }

                    <button type="submit">Submit</button>
                </Form>                
            )}
        </Formik>
    </div>
  )
}
