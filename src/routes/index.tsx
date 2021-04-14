import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';

import { CreateNaver } from '../pages/CreateNaver';
import { UpdateNaver } from '../pages/UpdateNaver';

import { NaverDataProvider } from '../hooks/naverData';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <NaverDataProvider>
        <>
          <Header />
          <Route path="/home" exact component={Home} isPrivate />
          <Route path="/create-naver" exact component={CreateNaver} isPrivate />
          <Route path="/edit-naver" exact component={UpdateNaver} isPrivate />
        </>
      </NaverDataProvider>
    </Switch>
  );
}
