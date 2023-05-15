
import { useFormik } from "formik";
import * as yup from 'yup';

export default function YupValidation(){

const formik = useFormik({
    initialValues: {
        UserName:'',
        Email:'',
        Age:0,
    },
    validationSchema:yup.object({
        UserName : yup.string()
                        .required("Username Required")
                        .min(4,'Name too short')
                        .max(12,'Name too long'),
        Email: yup.string()
                .required('Email Required')
                .email('Invalid Email'),
        Age : yup.number('Input values must be number')
                .required('Age is required')
            

    }),
    onSubmit:values=>{
        alert(JSON.stringify(values))
    }
})

    

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Registration Form</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" {...formik.getFieldProps("UserName")}  type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>

                    <dt>Age</dt>
                    <dd><input name="Age" {...formik.getFieldProps("Age")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>

                    <dt>Email</dt>
                    <dd><input name="Email" {...formik.getFieldProps("Email")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
{/* 
                    <dt>Mobile</dt>
                    <dd><input name="Mobile"  {...formik.getFieldProps("Mobile")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd> */}


                </dl>
                <button>Registration</button>
            </form>
        </div>
    )
}