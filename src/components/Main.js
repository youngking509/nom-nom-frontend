//import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import pages
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Videos from "../pages/Videos";

// async await the Backend, 
// Create recipes using fetch pass as props into the recipies route
// Update recipes using fetch pass as props into show by id route
// Delete recipes using fetch pass as props into show by id route



function Main() {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/recipes">
                    <Recipes />
                </Route>
                {/* path to recipes id pass render props */}
                <Route path="/recipes/:id" />
                <Route exact path="/videos">
                    <Videos />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;