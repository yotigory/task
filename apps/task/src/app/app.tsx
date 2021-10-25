import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './page/login';
import { Guide } from './page/guide';
import { List } from './page/list';
import { Set } from './page/set';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
					<Route exact path="/" component={Login}/>
					<Route exact path="/guide" component={Guide} />
					<Route exact path="/list" component={List} />
					<Route exact path="/set" component={Set} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
