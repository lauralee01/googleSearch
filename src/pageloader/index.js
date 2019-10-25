import loadable from "loadable-components";
import Preloader from "./preloader";

//sample

export const Test = loadable(() => import("../pages/test"),{
    LoadingComponent: Preloader
});
