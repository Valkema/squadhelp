import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import BrowserHistory from './browserHistory';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import PrivateHoc from './components/PrivateHoc/PrivateHoc';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import OnlyNotAuthorizedUserHoc from './components/OnlyNotAuthorizedUserHoc/OnlyNotAuthorizedUserHoc';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import CONSTANTS from './constants';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
//import TransactionPage from './pages/TransactionPage/TransactionPage';

class App extends Component {

  render() {
  const {history} = this.props;

    return (
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route history={history} exact path="/" component={Home} />
          <Route history={history} exact path="/how-it-works" component={HowItWorks} />
          <Route history={history} exact path="/login" component={OnlyNotAuthorizedUserHoc(LoginPage)} />
          <Route history={history} exact path="/registration" component={OnlyNotAuthorizedUserHoc(RegistrationPage)} />
          <Route history={history} exact path="/payment" component={PrivateHoc(Payment)} />
          <Route history={history} exact path="/start-contest" component={PrivateHoc(StartContestPage)} />
          <Route
            history={history}
            exact
            path="/startContest/nameContest"
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            history={history}
            exact
            path="/startContest/taglineContest"
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            history={history}
            exact
            path="/startContest/logoContest"
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route history={history} exact path="/dashboard" component={PrivateHoc(Dashboard)} />
          <Route history={history} exact path="/contest/:id" component={ContestPage} />
          <Route history={history} exact path="/account" component={PrivateHoc(UserProfile)} />
          <Route history={history} component={NotFound} />
        </Switch>
        <ChatContainer />
    </Router>
    );
  }
}

export default App;
