import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { AddNaver } from '../pages/AddNaver';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/add-naver" exact component={AddNaver} isPrivate />
    </Switch>
  );
}
