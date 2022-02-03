import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Recipes(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        title: "",
        image: "",
        readyInMinutes: "",
        instructions: "",
    });

    const handleChange = (evt) => {
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value }); 
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.createPeopleRecipe(newForm);
        setNewForm({
            name: "",
            title: "",
            image: "",
            readyInMinutes: "",
            instructions: "",
        });
    };

    const loaded = () => {
        return (
            <div className="rec-container">
                {props.peopleRecipe.map((recipe) => (
                <div key={recipe._id} className="rec">
                    { recipe.image && <img src={recipe.image} alt={recipe.name} className='rec-img'/>}
                    <div className="rec-bottom">
                        <Link to={`/recipes/${recipe._id}`} className='rec-link'>
                            <h3 className='rec-title'> {recipe.title} </h3>
                        </Link>
                        <h5>Instructions:</h5>
                        <p className='rec-description'>{recipe.instructions}</p>
                        <p className='rec-ready'> Cook Time: {recipe.readyInMinutes} mins <AccessTimeIcon className='DinnerDiningIcon' /></p>
                    </div>
                </div>
                ))}
            </div>
        );
    };
    const loading = () => {
        return <h1>Recipes...</h1>;
    };

    return (
        <div className="recipes">
            <form className='create-form' onSubmit={handleSubmit}>
            <h1>Create A Recipe</h1>
                <section className='top-form'>
                    <fieldset className='create-f-title'>
                        <legend>Title</legend>
                        <input
                            type="text"
                            className='create-form-title'
                            value={newForm.title}
                            name="title"
                            placeholder='"Veggie Burger"'
                            onChange={handleChange}
                        /> 
                    </fieldset>
                    <fieldset className='create-f-img'>
                        <legend>Image</legend>
                        <input
                            type="text"
                            className='create-form-img'
                            value={newForm.image}
                            name="image"
                            placeholder='"URL"'
                            onChange={handleChange}
                        /> 
                    </fieldset>
                    <fieldset className='create-f-mins'>
                        <legend>Cook Time</legend>
                        <input
                            type="text"
                            className='create-form-mins'
                            value={newForm.readyInMinutes}
                            name="readyInMinutes"
                            placeholder='"35"'
                            onChange={handleChange}
                        /> 
                    </fieldset>
                </section>
                <section className='form-bottom'>
                    <fieldset className='create-f-description'>
                        <legend>Instructions</legend>
                        <textarea
                            type="text"
                            className='create-form-descrpition'
                            value={newForm.instructions}
                            name="instructions"
                            placeholder="Directions..."
                            onChange={handleChange}
                        /> 
                    </fieldset>
                </section>
                <input type="submit" value="Create" className='create-update-btn'/>
            </form>
            {props.peopleRecipe ? loaded() : loading()}
        </div>
    );
}

export default Recipes;