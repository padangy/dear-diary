import React, { useState, useEffect } from 'react';
import { AdviceAPI } from '../../services/AdviceAPI';

const RandomAdvice = () => {
    const [advice, setAdvice] = useState("");

    async function handleClick() {
        const adviceAPI = await AdviceAPI()
        // console.log(adviceAPI)

        const wisdom = (adviceAPI.data.slip.advice)  
        setAdvice(wisdom)        
    }

    useEffect(() => {
        handleClick();
    }, [])

    return (
        <div>          
          <h1 className="advice-title">Random Advice</h1>
          <div className="advice-button">
            <button onClick={() => handleClick()}>Get Some Advice!</button>
          </div>
          <div className="advice-message">                
            <h2>{advice}</h2>    
          </div>
        </div>
    )
}

export default RandomAdvice;