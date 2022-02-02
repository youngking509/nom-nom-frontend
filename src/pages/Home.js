// async await the spoonacular API and pass the info in the section 
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import SearchIcon from '@mui/icons-material/Search';

function Home() {
    const apiKey = '4dc09cfe49ba42d4a768ccef738b15bb';
    
    // title, image, if else vegetarian or vegan, readyInMinutes, instructions, dishTypes
    
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formState, setFormState] = useState({
        searchTerm: "",
    });
    const [toggle, setToggle] = useState(false);

    const handleChange = (evt) => {
        setFormState({searchTerm: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getRecipe(formState.searchTerm);
        setFormState({ searchTerm: "" });
    };
    
    const getRecipe = async(searchTerm) => {
        const URL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4&tags=${searchTerm}`;
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
                            <div className="instructions-title">
                                <h5>Instructions:</h5>
                                <button onClick={() => setToggle(!toggle)} className='VisibilityIcon'>
                                    <VisibilityIcon />
                                </button>
                            </div>
                            <div className='api-instructions'>  
                            {toggle && (recipe.instructions.replaceAll('<li>', ' ').replaceAll('</li>', ' ').replaceAll('<ol>', ' ').replaceAll('</ol>', ' '))}
                            </div>
                            <p className='api-ready'> Ready in {recipe.readyInMinutes} min <AccessTimeIcon className='DinnerDiningIcon' /></p>
                        </div>
                    ))
                }
                </section>
                <Link to="/videos" className='home-videos-title'>
                <h1>VIDEOS</h1>
                </Link>
                <div className="home-videos-container">
                    <div className="video1-home">
                        <iframe width="760" height="450" src="https://www.youtube.com/embed/-JkcZRBUNtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video1-home"></iframe>
                </div>
                    <div className="video2-home">
                        <iframe width="760" height="450" src="https://www.youtube.com/embed/TdwrGGv-T6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video2-home"></iframe>
                </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>
    }
}
export default Home;