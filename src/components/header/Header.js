import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { Links } from '../links/Links';
import { useAuth } from 'hooks';
import './Header.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Links />}
    </header>
  );
};
