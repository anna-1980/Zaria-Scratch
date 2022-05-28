import React from 'react'
import { useEffect, useState} from 'react';


const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 80){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })

    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavious: "smooth"
        })
    }

  return (
    <div className='container'>
         {
             backToTopButton && (
                <button onClick={scrollUp}> Back to top</button>
             )
         }
        
    </div>
  )
}

export default BackToTopButton