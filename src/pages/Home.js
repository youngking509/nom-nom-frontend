// async await the spoonacular API and pass the info in the section 
import { useState, useEffect } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
//import SearchIcon from '@mui/icons-material/Search';

function Home() {
    const apiKey = '7b50685c1e6147f3ad68fad5e24e9fcd';
    
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
        console.log(data);
        setLoading(false);
    };


    useEffect(() => {getRecipe('pasta')}, []);
    
    if(loading === false) {
        return (
            <div className='home'>
                <section className="api-search">
                    <div className='api-form'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={formState.searchTerm} onChange={handleChange} placeholder='Search for "pasta"' className='api-input'/>
                            {/* <input type="submit" value="submit" className="api-search-btn" /> */}
                            {/* <button className="api-search-btn">
                                <SearchIcon />
                            </button> */}
                        </form>
                    </div>

                {
                    recipes.map((recipe, i) => (
                        <div key={i} className='api-card'>
                            <img src={recipe.image} alt={recipe.title} className='api-img'/>
                            <h3 className='api-title'> <RestaurantIcon className='RestaurantIcon'/> {recipe.title} </h3>
                            <div className='api-instructions'> Instructions: {recipe.instructions.replaceAll('<li>', ' ').replaceAll('</li>', ' ').replaceAll('<ol>', ' ').replaceAll('</ol>', ' ')}</div>
                            <p className='api-ready'> Ready in {recipe.readyInMinutes} min <DinnerDiningIcon className='DinnerDiningIcon' /></p>
                        </div>
                    ))
                }
                </section>
            </div>
        );
    } else {
        return <h1>Loading...</h1>
    }
}
export default Home;