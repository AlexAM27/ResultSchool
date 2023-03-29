import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import EditUserPage from "./components/page/editUserPage";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <ProfessionProvider>
                    <Route
                        path="/users/:userId/edit"
                        component={EditUserPage}
                    />
                    <Route path="/users/:userId?" component={Users} />
                    <Route path="/login/:type?" component={Login} />
                </ProfessionProvider>

                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;
