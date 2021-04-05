import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { CreateNaver } from '../pages/CreateNaver';

import { NaverDataProvider } from '../hooks/naverData';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <NaverDataProvider>
        <Route path="/home" exact component={Home} isPrivate />
        <Route path="/add-naver" exact component={CreateNaver} isPrivate />
      </NaverDataProvider>
    </Switch>
  );
}
