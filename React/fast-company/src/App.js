import React from "react";
import { Users } from "./components/users";
import NavBar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Login from "./layouts/login";

export const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/login"} component={Login} />
                <Route path={"/users/:userId?"} component={Users} />
            </Switch>
        </>
    );
};
