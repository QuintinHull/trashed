import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import configureStore from "./store";

import HomePage from "./components/HomePage";
import AreaView from "./components/AreaView";
import EventView from "./components/EventView";
import SearchResult from "./components/SearchResult";
import ItemView from "./components/ItemView";
import TypeView from "./components/TypeView";
import SingleItemView from "./components/SingleItemView";

const store = configureStore();

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <NavBar setAuthenticated={setAuthenticated} />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <ProtectedRoute
            path="/users"
            exact={true}
            authenticated={authenticated}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>
          <ProtectedRoute
            path="/home"
            exact={true}
            authenticated={authenticated}
          >
            <HomePage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setShowLogin={setShowLogin}
              setShowSignUp={setShowSignUp}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/area/:id"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <AreaView />
          </ProtectedRoute>
          <ProtectedRoute
            path="/event/:id"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <EventView />
          </ProtectedRoute>
          <ProtectedRoute
            path="/locate"
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SearchResult />
          </ProtectedRoute>
          <ProtectedRoute
            path="/type"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <TypeView />
          </ProtectedRoute>
          <ProtectedRoute
            path="/type/:id"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <ItemView />
          </ProtectedRoute>
          <ProtectedRoute
            path="/item/:id"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SingleItemView />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
