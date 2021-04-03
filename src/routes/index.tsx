import { Switch } from 'react-router-dom';
import { Route } from './Route';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" exact component={Home} isPrivate />
    </Switch>
  );
}
