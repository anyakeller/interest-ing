import { Home, SecondPage } from "../routes";
export const PageData = {
  "/": {
    pathname: "/",
    pageHeader: "Home",
    component: Home
  },
  "/secondPage": {
    pathname: "/secondPage",
    pageHeader: "Second Page",
    component: SecondPage
  }
};

export const PageOrder = ["/", "/secondPage"];
