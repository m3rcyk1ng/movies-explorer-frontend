import { Navigate } from 'react-router-dom'

const ProtectedRoute: React.FC<any> = ({ component: Component, ...props}) => {
  if (props.loggedIn) {
    return <Component {...props}/>
  }
  return <Navigate to="/" />
}

export default ProtectedRoute