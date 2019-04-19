import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import HomePage from '../../pages/HomePage'
import TagPage from '../../pages/SingTagPage'
import Header from '../../componetns/Header/component'
import Footer from '../../componetns/Footer/component'
import NotFoundPage from '../../pages/NotFoundPage'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div className="wrapper">
      <Header />
        <Switch>
          <Route path="/" component={HomePage}  exact />
          <Route path="/tag/:id" component={TagPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  
  export default AppRouter;



  