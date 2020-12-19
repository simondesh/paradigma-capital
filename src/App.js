//Global Style
import GlobalStyle from "./components/GlobalStyle";

//pages
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Team from "./pages/Team";
import Work from "./pages/Work";
//components
import NavBar from "./components/NavBar";

//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />

            <NavBar />
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path="/" exact>
                        <Team />
                    </Route>
                    <Route path="/work" exact>
                        <Work />
                    </Route>
                    <Route path="/join" exact>
                        <Join />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
