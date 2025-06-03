import img3 from './../Images/2002.i039.010_chatbot_messenger_ai_isometric_set-15.jpg';


import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();
    // Registration Info
    
    function registrationInfo(e){
        e.preventDefault();

        const formele = e.currentTarget;
        const formData = new FormData(formele)
        const fname = formData.get("firstName")
        const lname = formData.get("lastName")
        const emial = formData.get("email")
        const password = formData.get("password")

        console.log(fname);
        console.log(lname);
        console.log(emial);
        console.log(password);

        formele.reset();

        navigate('/chef');
    }
    return (
        <>
            <main className="sign-Container">
                <section className="sign-form">
                    <div className="registration-title">
                        <h2>Recipe Chef</h2>
                        <p>Your Smart Kitchen Assistant</p>
                    </div>
                    <form onSubmit={registrationInfo}id="registration">
                    
                            <input type="text" name="firstName" id="firstName" placeholder="First Name" autoComplete="given-name" required/>
                            <input type="text" name="lastName" id="lastName" autoComplete="family-name" placeholder="Last Name" />
                        <input type="email" name="email" id="email" placeholder="Enter your email" required autoComplete="email"/>
                        <input type="password" name="password" id="password" autoComplete="password" placeholder="Type Password" required/>
                        <button >Register</button>
                    </form>
                </section>
                <section className="sign-img">
                    <img src={img3} alt="image" />
                </section>
            </main>
        </>
    )
}