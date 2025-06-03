import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FaqComponent from './../Components/FaqComponent.jsx';


export default function FAQ() {


    return (
        <>
            <Header />
            <section className="faq-para">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here you'll find answers to the most common questions about using our recipe generation app. Whether you're wondering how to enter your ingredients, customize your results, or troubleshoot a recipe suggestion, this FAQ section is here to guide you. Recipe Chef is designed to be simple—just enter the ingredients you have, and we’ll create a delicious recipe in seconds. Explore the topics below to make the most of your cooking experience!
                </p>
            </section>
            <section className="faq-section">
                <FaqComponent  question={"What is Recipe Chef?"} answer={"Recipe Chef is a smart cooking assistant that uses artificial intelligence to help you generate recipes, plan meals, and get cooking , dietary preferences, and lifestyle."} />
                <FaqComponent  question={"How do I generate a recipe in the Recipe section?"} answer={"Simply go to the Recipe section, enter the ingredients you have, then click “Get a recipe.” Recipe Chef will instantly create a personalized recipe based on your input."} />
                <FaqComponent  question={"How does Recipe Chef create recipes?"} answer={"Recipe Chef analyzes your selected ingredients to generate personalized recipes using advanced language models."} />
                <FaqComponent  question={"Can I get recipes using only the ingredients I have at home?"} answer={"Yes! Just enter the ingredients you have, and Recipe Chef will generate recipes you can make using those items."} />
                <FaqComponent question={"Is Recipe Chef free to use?"} answer={"Yes, Recipe Chef is completely free to use. All features including meal planning, recipe generation, are available at no cost."} />
            </section>
            <Footer />
        </>
    )
}