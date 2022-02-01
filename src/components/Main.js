//import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
// import pages
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Videos from "../pages/Videos";

// async await the Backend, 
// Create recipes using fetch pass as props into the recipies route
// Update recipes using fetch pass as props into show by id route
// Delete recipes using fetch pass as props into show by id route

function Main() {
    const [peopleRecipe, setPeopleRecipe] = useState(null);
    // const URL = 'https://nom-nom-api-22.herokuapp.com/';
    const URL = 'http://localhost:4000/recipes/';

    const getPeopleRecipe = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeopleRecipe(data);
    };

    const createPeopleRecipe = async(recipe) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(recipe)
        });
        getPeopleRecipe();
    };

    const updatePeopleRecipe = async (recipe, id) => {
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(recipe),
        });
        getPeopleRecipe();
    };

    const deletePeopleRecipe = async id => {
        await fetch(URL + id, {
          method: "DELETE",
        })
        getPeopleRecipe();
    };

    useEffect(() => getPeopleRecipe(), []);


    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/recipes">
                    <Recipes peopleRecipe={peopleRecipe} createPeopleRecipe={createPeopleRecipe} />
                </Route>
                {/* path to recipes id pass render props */}
                {/* <Route path="/recipes/:id" peopleRecipe={peopleRecipe} updatePeopleRecipe={updatePeopleRecipe} deletePeopleRecipe={deletePeopleRecipe} {...rp} /> */}
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