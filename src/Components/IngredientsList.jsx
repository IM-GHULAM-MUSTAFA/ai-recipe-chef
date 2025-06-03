export default function (props) {
    return (
        <section className="ingredientSection">
            <h2>Ingredients on hand</h2>
            <ul className="ingredients-list" aria-live="polite">{props.listItems}</ul>
            { props.listItems.length > 3 &&
                <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.clickFunction} disabled={props.isLoading}>Get a recipe</button>
                </div>
            }
        </section>
    )
}