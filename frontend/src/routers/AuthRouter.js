import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

import AppRouter from "./AppRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            dispatch(login(user.uid, user.displayName));
        });
    }, [dispatch]);
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <AppRouter/>
            </Switch>
        </Router>
    );
};

export default AuthRouter;