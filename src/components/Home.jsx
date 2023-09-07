import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card';
import { useFormik } from 'formik';
import * as yup from 'yup';



const Home = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: 'Admin'
    }
    const onSubmit = (values) => {

    }
    const validation = yup.object({
        firstName: yup.string().required('required'),
        lastName: yup.string().required('required'),
        email: yup.string().email('invalid input format').required('required'),
        password: yup.string().required('required'),
    })
    // const customValidate = 
    const formik = useFormik({
        initialValues, onSubmit, validate :values => {
            let errors = {}
            if (!values.firstName) {
                errors.firstName = 'required'
            }
            if (!values.lastName) {
                errors.lastName = 'required'
            }
            if (!values.password) {
                errors.password = 'required'
            }
            if (!values.email) {
                errors.email = 'required'
            } 
            return errors
        }
    })
    console.log('formik.values', formik.values)

    console.log('formik.errors', formik)
    console.log('formik.touched', formik.touched)
    return (
        <div className='container'>
            <div className='w-50 m-auto mt-5 text-start'>
                <Card className=''>
                    <form onSubmit={formik.handleSubmit}>
                        {/* <div className="row"> */}
                        <div className="mb-3">
                            <label htmlFor="firstName">First name</label>
                            <div className="input-group">
                                <input type="text" className={formik.touched.firstName &&  formik.errors.firstName? "form-control is-invalid " : "form-control"} name='firstName' id="firstName" placeholder="First name"   {...formik.getFieldProps('firstName')} />
                                {formik.touched.firstName  && formik.errors.firstName? <div className="invalid-feedback">
                                    {formik.errors.firstName}
                                </div> : null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <div className="input-group">
                                <input type="text" className={formik.touched.lastName  &&  formik.errors.lastName? "form-control is-invalid " : "form-control"} id="lastName" placeholder="Last name" name='lastName' {...formik.getFieldProps('lastName')} />
                                {formik.touched.lastName  &&  formik.errors.lastName? <div className="invalid-feedback">
                                    {formik.errors.lastName}
                                </div> : null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <div className="input-group">
                                <input type="text" className={formik.touched.email &&  formik.errors.email? "form-control is-invalid " : "form-control"} id="email" name='Email' placeholder="Email"{...formik.getFieldProps('email')} />
                                {formik.touched.email &&  formik.errors.email ? <div className="invalid-feedback">
                                    {formik.errors.email}
                                </div> : null}
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <div className="row"> */}
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={formik.touched.password &&  formik.errors.password ? "form-control is-invalid " : "form-control"} id="password" name="password" placeholder="Password" {...formik.getFieldProps('password')} />
                            {formik.touched.password  &&  formik.errors.password? <div className="invalid-feedback">
                                {formik.errors.password}
                            </div> : null}
                        </div>
                        <div className='mb-3'>
                        <label className='mb-3'>Select UserType</label>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="userType1" name="userType" className="custom-control-input" checked={formik.values.userType === "Admin"} value="Admin" onChange={() => formik.setFieldValue("userType", "Admin")} />
                                <label className="custom-control-label" htmlFor="userType1">Admin</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="userType2" name="userType" className="custom-control-input" checked={formik.values.userType === "Customer"} value="Customer" onChange={() => formik.setFieldValue("userType", "Customer")} />
                                <label className="custom-control-label" htmlFor="userType2">Customer</label>
                            </div>
                        </div>
                        {/* </div> */}
                        <Button className="btn btn-primary" type="submit">Submit form</Button>
                    </form>
                </Card>

            </div>



        </div>
    )
}

export default Home