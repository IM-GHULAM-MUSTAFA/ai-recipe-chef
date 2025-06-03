import Header from "../Components/Header"
import Footer from "../Components/Footer"
export default function Chef() {
    return (
        <>
            <Header />
            <div className="home-img-container"></div>
            <div className="home-info">
                <h1>Welcome to Recipe Chef!</h1>
                <p>Recipe Chef is your ultimate cooking assistant! Whether you're a professional chef or just someone looking to whip up a quick meal, our AI-powered recipe generator helps you find the best recipes based on the ingredients you have.</p>
                <p><span className="boldletter color-text">No more wasting food</span>—just enter what’s in your fridge, and AI Chef will suggest delicious dishes instantly!</p>
                <h2>How It Works? (Step-by-Step Guide)</h2>
                <ul>
                    <li><span className="boldletter">Step 1</span>: Enter Your Ingredients</li>
                    <p>Start by typing in the ingredients you have at home (e.g., “chicken, garlic, tomato”). No need to plan ahead—just use what’s in your kitchen!.</p>
                    <li><span className="boldletter">Step 2</span>: Click ‘Get a Recipes’</li>
                    <p>With one click, our intelligent AI Chef analyzes your ingredients and searches for the best recipe matches.</p>
                    <li><span className="boldletter">Step 3</span>: Let AI Chef Find the Perfect Recipe</li>
                    <p>Recipe Chef dives into its digital cookbook and recommends recipes tailored to what you have. Each suggestion comes with step-by-step instructions, prep time, and serving size—customized just for you.</p>
                    <li><span className="boldletter">Step 4</span>: Start Cooking!</li>
                    <p>Grab your apron and follow the guided steps to bring your dish to life—no stress, just delicious results.</p>
                    <li><span className="boldletter">Bonus</span>: Save & Share Recipes</li>
                    <p>Love what you made? Save your favorites or share your creations with friends and family in just a click.</p>
                </ul>
            </div>
            <Footer/>
        </>
    )
}