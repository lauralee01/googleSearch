import loadable from "loadable-components";
import Preloader from "./preloader";

//sample

export const Test = loadable(() => import("../pages/test"),{
    LoadingComponent: Preloader
});
export const HomePage = loadable(() => import("../pages/google/index"),{
    LoadingComponent: Preloader
});
export const SearchResults = loadable(() => import("../pages/google/SearchResults"),{
    LoadingComponent: Preloader
});