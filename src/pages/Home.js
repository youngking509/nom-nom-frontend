// async await the spoonacular API and pass the info in the section 
import { useState, useEffect } from 'react';

function Home() {
    const apiKey = '4dc09cfe49ba42d4a768ccef738b15bb';
    
    // title, image, if else vegetarian or vegan, readyInMinutes, instructions, dishTypes
    
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formState, setFormState] = useState({
        searchTerm: "",
    });
    const handleChange = (evt) => {
        setFormState({searchTerm: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getRecipe(formState.searchTerm);
        setFormState({ searchTerm: "" });
    };
    
    const getRecipe = async(searchTerm) => {
        const URL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=${searchTerm}`;
        const response = await fetch(URL);
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
    };


    useEffect(() => {getRecipe('pasta')}, []);
    
    if(loading === false) {
        return (
            <div className='home'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={formState.searchTerm} onChange={handleChange} />
                    <input type="submit" value="submit" />
                </form>

                {
                    recipes.map((recipe, i) => (
                        <div key={i}>
                            <h3> {recipe.title} </h3>
                            <img src={recipe.image} alt={recipe.title} />
                            <p> Ready in {recipe.readyInMinutes} minutes </p>
                            <p> Instructions: {recipe.instructions}</p>
                            <p> {recipe.vegetarian}</p>
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