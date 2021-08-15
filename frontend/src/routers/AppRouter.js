import { Route } from "react-router";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <Route exact path="/login" component={Login}/>
    );
};

export default AppRouter;