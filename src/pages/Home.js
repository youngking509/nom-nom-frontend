// async await the spoonacular API and pass the info in the section 
import { useState, useEffect } from 'react';

function Home() {
    const apiKey = '4dc09cfe49ba42d4a768ccef738b15bb';
    
    // title, image, if else vegetarian or vegan, readyInMinutes, instructions, dishTypes
    
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const getRecipe = async() => {
        const URL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`;
        const response = await fetch(URL);
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
        console.log(recipes);
    };
    
    useEffect(() => {getRecipe()}, []);
    
    if(loading === false) {
        return (
            <div className='home'>
                {
                    recipes.map((recipe, i) => (
                        <div key={i}>
                            <h3> {recipe.title} </h3>
                            <img src={recipe.image} alt={recipe.title} />
                            <h3> Ready in {recipe.readyInMinutes} minutes </h3>
                        </div>
                    ))
                }
            </div>
        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default Home;