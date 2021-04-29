import React from "react";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat"
import Login from "./Components/Login"
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <div className="app_main">
              <h1>Welcome To The Slack-Clone</h1>
              </div>
            </Route>
          </Switch>
        </div>
          </>
        )}
      </Router>
      
    </div>
  );
}

export default App;
