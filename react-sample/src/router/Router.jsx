import { Home } from "../Home"
import { Page1Routers } from "./Page1Routers"
import { Page2Routers } from "./Page2Routers"
import { Page404 } from "../Page404";
import { Switch, Route} from "react-router-dom";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route
                path="/page1"
                render={({ match:{ url }})=> (
                <Switch>
                    {Page1Routers.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={`${url}${route.path}`}>
                        {route.children}
                    </Route>
                    ))}
                </Switch>)} />
            <Route
                path="/page2"
                render={({ match:{ url }})=> (
                <Switch>
                    {Page2Routers.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={`${url}${route.path}`}>
                        {route.children}
                    </Route>
                    ))}
            </Switch>)} />
            <Route path="/*">
                <Page404 />
            </Route>
        </Switch>
    );
};
