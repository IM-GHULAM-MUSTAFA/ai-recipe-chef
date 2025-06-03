import Markdown from 'react-markdown'
export default function (props) {
    return (
        <section className="suggested-recipe">
            <article className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Claude recommends: </h2>
                <Markdown>{props.recipe}</Markdown>
            </article>
        </section>
    )
}