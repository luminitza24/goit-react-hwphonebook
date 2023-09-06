import { Helmet } from 'react-helmet';
import { Login } from 'components/login/Login';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </div>
  );
}
