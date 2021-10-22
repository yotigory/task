import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './page/login';
import { Guide } from './page/guide';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
					<Route exact path="/" component={Login}/>
          <Route exact path="/guide" component={Guide} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
