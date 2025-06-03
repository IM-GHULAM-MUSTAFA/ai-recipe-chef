import ClaudeRecipe from "./ClaudeRecipe";
import { useRef, useState, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from './../ai.js';

export default function () {
    const [ingredient, setIngredient] = useState(["Tomato", "Potato"]);
    const [recipeShown, setRecipeShown] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const recipesection = useRef(null);

    const items = ingredient.map((items) => <li key={items}>{items}</li>)
    const handleSubmit = (formData) => {
        const newIngredient = formData.get("inputtext");
        setIngredient(prevItem => [...prevItem, newIngredient])
    }

    useEffect(() => {
        if ((recipeShown !== "" || isLoading) && recipesection !== null) {
            recipesection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipeShown])

    // recipe button click handeler 

    async function handelClick() {
        setIsLoading(true);
        setRecipeShown("");
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredient);
            setRecipeShown(recipeMarkdown);
        } catch (error) {
            console.log("Error in generating recipe!", error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <main className="recipe-section">
            <form action={handleSubmit} className="form">
                <input
                    type="text"
                    name="inputtext"
                    id="inputtext"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    required
                />
                <input type="submit" id="inputbtn" value=" + Add ingredient" />
            </form>
            {ingredient.length < 4 ? <p className="alert-mess">Add at least 4 ingredients.</p> : null}
            {/* Rendering the section based on the input itmes  */}
            {items.length > 0 && <IngredientsList ref={recipesection} listItems={items} clickFunction={handelClick} isLoading={isLoading} />}


            {isLoading && (
                <div className="loading-container">
                    <div className="spinner-dots">
                    </div>
                    <p className="loading-text">Generating your recipe...</p>
                </div>
            )}

            {/* Data coming from API  */}
            {/* Conditional Rendering  */}
            {recipeShown && !isLoading ? <ClaudeRecipe recipe={recipeShown} /> : null}
        </main>
    )
}