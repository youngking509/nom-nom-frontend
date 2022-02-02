import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={`/recipes/${recipe._id}`}>
                        <h3 className='rec-title'> {recipe.title} </h3>
                    </Link>
                    <h4>Instructions:</h4>
                    <p className='rec-description'>{recipe.instructions}</p>
                    <p className='rec-ready'> Ready in {recipe.readyInMinutes} minutes </p>
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
                <h3>Create A Recipe</h3>
                <section className='top-form'>
                    <fieldset className='create-f-title'>
                        <legend>Title</legend>
                        <input
                            type="text"
                            className='create-form-title'
                            value={newForm.title}
                            name="title"
                            placeholder="title"
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
                            placeholder="image URL"
                            onChange={handleChange}
                        /> 
                    </fieldset>
                    <fieldset className='create-f-mins'>
                        <legend>Ready In</legend>
                        <input
                            type="text"
                            className='create-form-mins'
                            value={newForm.readyInMinutes}
                            name="readyInMinutes"
                            placeholder="readyInMinutes"
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
                            placeholder="instructions"
                            onChange={handleChange}
                        /> 
                    </fieldset>
                </section>
                <input type="submit" value="Create Recipe" />
            </form>
            {props.peopleRecipe ? loaded() : loading()}
        </div>
    );
}

export default Recipes;