import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  push,
} from 'redux-router';

import { Route, Link } from 'react-router';
import { Provider, connect } from 'react-redux';
// import { devTools } from 'redux-devtools';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(push({ pathname: '/parent/child/custom' }));
  }

  render() {
    // Display is only used for rendering, its not a property of <Link>
    const links = [
        { pathname: '/', display: '/'},
        { pathname: '/', query: { foo: 'fooooo'}, display: '/heh'},
        { pathname: '/parent', query: { foo: 'bar' }, display: '/parent?foo=baaaar'},
        { pathname: '/parent/child', query: { bar: 'baz' }, display: '/parent/child?bar=baz'},
        { pathname: '/parent/child/123', query: { baz: 'foo' }, display: '/parent/child/123?baz=foo'}
    ].map((l, i) =>
      <p key={i}>
        <Link to={l}>{l.display}</Link>
      </p>
    );

    return (
      <div>
        <h1>App Container</h1>
        {links}

        <a href="#" onClick={this.handleClick}>
          /parent/child/custom
        </a>
        {this.props.children}
      </div>
    );
  }
}

connect((state) => ({}))(App)

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    const { params: { id }} = this.props;

    return (
      <div>
        <h2>Child</h2>
        {id && <p>{id}</p>}
      </div>
    );
  }
}

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({ createHistory })
  // devTools()
)(createStore)(reducer);

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={App}>
              init
              <Route path="parent" component={Parent}>
                <Route path="child" component={Child} />
                <Route path="child/:id" component={Child} />
              </Route>
            </Route>
          </ReduxRouter>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

