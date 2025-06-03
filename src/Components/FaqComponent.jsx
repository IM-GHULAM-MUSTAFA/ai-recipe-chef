import { useState } from 'react';
import addIcon from './../Images/add_icon.png';
import minusIcon from './../Images/minus_icon.png';
export default function ({question,answer}){
    const [img, setImg] = useState(false)

    function btnchange() {
        setImg(prevValue => !prevValue) 
    }
    return (
        <div>
                <div className="qs-ans">
                    <div className="ques-icon">
                        <div className="question">{question}</div>
                        <div className="ar-icon" onClick={btnchange}>
                            {img ? <img src={minusIcon} alt="plus Icon" /> :
                                <img src={addIcon} alt="plus Icon" />}
                        </div>
                    </div>
                    {img ? <div className="answer">{answer}</div> : null}
                </div>
            </div>
    )
}