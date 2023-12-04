import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLogoutMutation } from "../slices/usersApiSlice"
import { clearCredentials } from "../slices/authSlice"
import logo from '../assets/logo.png'


const Header = () => {
  const { userInfo } = useSelector((state)=> state.auth)

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="header-site">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Header Logo" />
        </Link>
      </div>
      <div className="header-menu">
        <nav className="header-actions">
          { userInfo ? (
            <>
              <Link className="header-user" to='/profile'>Bem vindo, {userInfo.name}</Link>
              <Link className="btn btn-outline" onClick={logoutHandler}>Sair</Link>
            </>
          ) : (
            <>
              <Link className="btn btn-outline" to="/entrar"> Entrar </Link>
              <Link className="btn btn-primary" to="/cadastrar">Cadastrar</Link>    
            </>
          ) }
               
        </nav>
      </div>
    </header>
  )
}

export default Header