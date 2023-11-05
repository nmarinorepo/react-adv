import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1 } from "../01-lazyload/pages";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(()=> import(/*webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(()=> import(/*webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]