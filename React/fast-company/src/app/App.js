import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import EditUserPage from "./components/page/editUserPage";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";
import AuthProvider from "./hooks/useAuth";

function App() {
    return (
        <div>
            <AuthProvider>
                <NavBar />

                <ProfessionProvider>
                    <QualitiesProvider>
                        <Switch>
                            <Route
                                path="/users/:userId/edit"
                                component={EditUserPage}
                            />
                            <Route path="/users/:userId?" component={Users} />
                            <Route path="/login/:type?" component={Login} />
                            <Route path="/" exact component={Main} />
                            <Redirect to="/" />
                        </Switch>
                    </QualitiesProvider>
                </ProfessionProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
