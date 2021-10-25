import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './page/login';
import { Guide } from './page/guide';
import { List } from './page/list';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
					<Route exact path="/" component={Login}/>
					<Route exact path="/guide" component={Guide} />
					<Route exact path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
