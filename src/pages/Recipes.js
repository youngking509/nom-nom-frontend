import { useState } from 'react';

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
        return props.peopleRecipe.map((recipe) => (
            <div key={recipe._id} className="recipe">
                <h1> {recipe.title} </h1>
                { recipe.image && <img src={recipe.image} alt={recipe.name} />}
                <p> Ready in {recipe.readyInMinutes} minutes </p>
                <p> Instructions: {recipe.instructions}</p>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Recipes...</h1>;
    };


    return (
        <div className="recipes">
            <form className='index-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.readyInMinutes}
                    name="readyInMinutes"
                    placeholder="readyInMinutes"
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    value={newForm.instructions}
                    name="instructions"
                    placeholder="instructions"
                    onChange={handleChange}
                /> <br />
                <input type="submit" value="Create Recipe" />
            </form>
            {props.peopleRecipe ? loaded() : loading()}
        </div>
    );
}

export default Recipes;