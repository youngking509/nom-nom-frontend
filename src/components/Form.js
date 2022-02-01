import { useState, useEffect } from 'react';

function Form() {

    const [formSate, setFormState] = useState({
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


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formState.searchTerm} onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default Form;