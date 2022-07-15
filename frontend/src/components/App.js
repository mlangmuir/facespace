import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import SignInPage from "./SignInPage";
import Profile from "./Profile";
import ScrollToTop from "./ScrollToTop";
import UserNotFound from "./UserNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/sign-in">
          <SignInPage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/:id">
          <Profile />
        </Route>
        <Route path="*">
          <UserNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
