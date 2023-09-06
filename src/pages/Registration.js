import { Helmet } from 'react-helmet';
import { Register } from 'components/register/Register';

export default function Registration() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Register />
    </div>
  );
}
