import { Page2 } from "../Page2";
import { Urlparameter } from "../ Urlparameter"

export const Page2Routers = [
    {
        path: '/',
        exact: true,
        children: <Page2 />
    },
    {
        path: '/:id',
        exact: false,
        children: <Urlparameter />
    },
];
