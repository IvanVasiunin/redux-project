import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Header from './Header';
import Auth from './Auth';
import UserProfile from './UserProfile';

function App() {
  const auth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
    </Fragment>
  );
}

export default App;
