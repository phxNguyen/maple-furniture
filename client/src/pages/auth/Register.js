import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    //
  }

  const registerForm = () =>{
    return <form onSubmit={handleSubmit}>
      <input
        type='email' className='form-control mb-2'
        value = {email} autoFocus onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit' className='btn btn-primary mt-1'> Register</button>
    </form>
  }


  return (
    <>
      <div className='container p-5' >
        <div className='row'>
          <div className='col-md-6 offset-md-6'>
            <h3>Register</h3>
            <p>{registerForm()}</p>

          </div>

        </div>

      </div>
    </>
  )
}

export default Register