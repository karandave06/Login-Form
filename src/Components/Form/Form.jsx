import React from 'react'
import './form.scss'
import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas'

const Form = () => {

  const initialValues = {
    username:"" ,
    email: " ",
    password: " ",
    Conformpassword: " "
  }

 const {values,errors,handleBlur,handleChange,handleSubmit,touched} =  useFormik({
    initialValues : initialValues,
    validationSchema:signUpSchema,
    
    onSubmit:(values,action)=>{
      console.log(values,action)

      action.resetForm();
     
    }
  })
  console.log()
  return (
    <>
<section>
  <div className="imgbox">
<img src="https://wallpaperset.com/w/full/c/1/a/263199.jpg" alt="" />
  </div>

  <div className="contentbox">

<div className="formbox">

  <h2>Login</h2>

  <form onSubmit={handleSubmit}>

    <div className="input">
      <span>Username</span>
      
      <input type="text" name='username' id='username' autoComplete='off'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {errors.username && touched.username  ?  <p className='form-error'>{errors.username}</p> : null}

    </div>

    <div className="input">
      <span>Email</span>
      <input type="email" name='email' id='email' autoComplete='off'
      value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      {errors.email && touched.email ? <p className='form-error'> {errors.email}</p> :null}

    </div>

    <div className="input">
      <span>Password</span>
      <input type="text" id='password' name='password' autoComplete='off'

value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password &&  touched.password ? <p className='form-error'>{errors.password}</p>:null}

    </div>

     <div className="input">
      <span>Confirm Password</span>
      <input type="text" id='confirmpassword' name='Conformpassword' autoComplete='off'

value={values.Conformpassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.Conformpassword && touched.Conformpassword ? <p className='form-error'>{errors.Conformpassword}</p>:null}

    </div>

  


    <div className="remember">
      <label><input type="checkbox" />Remember me</label>
    </div>

    
  <div className="input">
<input type="submit" value={'submit'} className='btn' />
  </div>

    <div className="input">
      <p>Don't have an account? <a href="#">Sign Up</a></p>
    </div>

  </form>
</div>
  </div>

</section>
    </>
  )
}

export default Form
