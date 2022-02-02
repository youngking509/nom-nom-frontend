import { useState } from 'react';

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
        props.history.push('/');
    };

    const removeRecipe = () => {
        props.deletePeopleRecipe(eachRecipe._id);
        props.history.push('/');
    };

    return (
        <div className="show">
            <h1> {eachRecipe.title} </h1>
            { eachRecipe.image && <img src={eachRecipe.image} alt={eachRecipe.name} />}
            <p> Ready in {eachRecipe.readyInMinutes} minutes </p>
            <p> Instructions: {eachRecipe.instructions}</p>
            <button id="delete" onClick={removeRecipe}>REMOVE</button>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={editForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
                />
                <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
                />
                <input
                type="text"
                value={editForm.readyInMinutes}
                name="readyInMinutes"
                placeholder="readyInMinutes"
                onChange={handleChange}
                />
                <input
                type="text"
                value={editForm.instructions}
                name="instructions"
                placeholder="instructions"
                onChange={handleChange}
                />
                <input type="submit" value="Update Recipe" />
            </form>
        </div>
    );
}

export default Show;