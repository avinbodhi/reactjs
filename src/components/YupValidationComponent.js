import {useFormik,Formik,Field,ErrorMessage,Form} from 'formik';
import * as yup from 'yup';





export default function YupValidationComponent()

{


    return (
        <div className="container-fluid">
        <h2>Registration Form</h2>
        <Formik initialValues={
            {
                UserName:'',
                Email:'',
                Age:0,
                City:''
            }
        }
        validationSchema={
            yup.object({
                    UserName : yup.string().required('Name is required'),
                    Email : yup.string().email('InvalidEmail').required("Enter email"),
                    Age : yup.string().required("Enter Age"),
                    City : yup.string()


            })
        }
        onSubmit={
            values=>{
                alert(JSON.stringify(values));
            }
        }

        
        >
       {
           props => 
            <Form>
                <div>
                <dl>
                    <dt>Username</dt>
                    <dd><Field name="UserName" type="text"></Field></dd>
                    <dd className='text-danger'><ErrorMessage name='UserName'></ErrorMessage></dd>
                   
                    <dt>Email</dt>
                    <dd><Field name="Email" type="text"></Field></dd>
                    <dd className='text-danger'><ErrorMessage name='Email'></ErrorMessage></dd>
    
                    <dt>Age</dt>
                    <dd><Field name="Age" type="text"></Field></dd>
                    <dd className='text-danger'><ErrorMessage name='Age'></ErrorMessage></dd>
    
                    <dt>City    </dt>
                    <dd><Field name="City" as="select">
    
                    <option>
                            Delhi
                        </option>
                        <option>
                            Hyderabad
                        </option>
                    </Field>
    
                    </dd>
                    <dd className='text-danger'><ErrorMessage name='City'></ErrorMessage></dd>
    
    
                </dl>
                <button disabled={props.isValid?false:true}>Register</button>
                </div>
            </Form> 
           
       }
       
        </Formik>
        </div>
    );
};