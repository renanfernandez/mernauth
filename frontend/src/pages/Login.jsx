import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state)=> state.auth)

  const submitHandler =  async (e) => {
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      console.log(error?.data?.message || error.error)
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={submitHandler}>
        <div className="form-input-control">
          <label className="form-label">E-mail: <input  className='form-input' type="email" value={ email } onChange={ (e) => setEmail(e.target.value)} /></label>
        </div>
        <div className="form-input-control">
          <label className="form-label">Senha: <input className='form-input' type="password" value={ password } onChange={ (e) => setPassword(e.target.value)}/></label>
        </div>
        <button className="btn btn-primary" type="submit">
          Entrar
        </button>     

        <p>
          Não tem uma conta? <Link to='/cadastrar'>Cadastre-se</Link>
        </p>
      </form>
    </main>
  )
}

export default Login