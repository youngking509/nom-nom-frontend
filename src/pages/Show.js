import { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Show(props) {
    const id = props.match.params.id;
    const peopleRecipe = props.peopleRecipe;
    const eachRecipe = peopleRecipe.find(r => r._id === id);
    console.log(id);
    console.log(eachRecipe);

    const [editForm, setEditForm] = useState(eachRecipe);
    const handleChange = (evt) => {
        setEditForm({ ...editForm, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.updatePeopleRecipe(editForm, eachRecipe._id);
        props.history.push('/recipes');
    };

    const removeRecipe = () => {
        props.deletePeopleRecipe(eachRecipe._id);
        props.history.push('/recipes');
    };

    return (
        <div className="show">
            <div className="show-card">
                <div className="show-img-container">
                    { eachRecipe.image && <img src={eachRecipe.image} alt={eachRecipe.name} className='show-img'/>}
                </div>
                <div className="show-des-container">
                    <h2 className='show-title'> {eachRecipe.title} </h2>
                    <h5>Instructions:</h5>
                    <p className='show-instructions'>{eachRecipe.instructions}</p>
                    <p className='show-cookTime'> Cook Time: {eachRecipe.readyInMinutes} mins <AccessTimeIcon className='DinnerDiningIcon' /></p>
                    {/* <button id="delete" onClick={removeRecipe}>REMOVE</button> */}
                </div>
            </div>

            <form className='create-form' onSubmit={handleSubmit}>
            <h1>Update Recipe</h1>
                <section className='top-form'>
                    <fieldset className='create-f-title'>
                        <legend>Title</legend>
                        <input
                            type="text"
                            className='create-form-title'
                            value={editForm.title}
                            name="title"
                            onChange={handleChange}
                        /> 
                    </fieldset>
                    <fieldset className='create-f-img'>
                        <legend>Image</legend>
                        <input
                            type="text"
                            className='create-form-img'
                            value={editForm.image}
                            name="image"
                            onChange={handleChange}
                        /> 
                    </fieldset>
                    <fieldset className='create-f-mins'>
                        <legend>Cook Time</legend>
                        <input
                            type="text"
                            className='create-form-mins'
                            value={editForm.readyInMinutes}
                            name="readyInMinutes"
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
                            value={editForm.instructions}
                            name="instructions"
                            onChange={handleChange}
                        /> 
                    </fieldset>
                </section>
                <input type="submit" value="Update" className='create-update-btn'/>
                <button id="delete" onClick={removeRecipe} className='create-update-btn'>Delete</button>
            </form>
        </div>
    );
}

export default Show;