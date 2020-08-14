import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from './components/Home';
import Display from './components/Display';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import NotFound from './components/NotFound';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/display" component={Display} />
          <Route path="/test2" component={PieChart} />
          <Route path="/test3" component={BarChart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
