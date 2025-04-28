import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Leads, Login, Profile, Registration } from './pages'
function App() {
  const ProtectedRout = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Autenticação necessária')
      // Se o usuário não estiver logado ele será redirecionado para a página de Login
      return <Navigate to="/" replace />
    }
    // Este return Outlet significa que se o usuário estiver logado ele ficará onde está
    return <Outlet />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectedRout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
