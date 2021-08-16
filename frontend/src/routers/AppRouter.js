import { Route } from "react-router";

const AppRouter = () => {
    return (
        <Route exact path="/app" component={AppScreen}/>
    );
};

export default AppRouter;