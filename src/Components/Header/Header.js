import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = ({ selectedIngredients, setShowMyIngredients, showMyIngredients }) => {

    //Animate star fill when an ingredient is selected 
    const [animateStar, setAnimateStar] = useState(false)
    const [isFirstRender, setIsFirstRender] = useState(false)
    useEffect(() => {
        if (isFirstRender) {
            setAnimateStar(true)
            setTimeout(() => {
                setAnimateStar(false)
            }, 500)
        } else setIsFirstRender(true)

        if (selectedIngredients.length === 0)
            setShowMyIngredients(false)
    }, [selectedIngredients])

    const onSVGClick = () => {
        if (selectedIngredients.length)
            setShowMyIngredients(!showMyIngredients)
    }

    return (
        <header className='header-container relative'>
            <div onClick={() => onSVGClick()} className='header-container_SVG'>
                <svg className='header-container_my-ingredients cursor' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 949.984 949.984" >
                    <g>
                        <g>
                            <path d="M623.393,949.092c13.899,0,25.1-11.299,25.1-25.1v-49.799c-55,19.699-113.6,30.1-173.5,30.1s-118.6-10.301-173.5-30.1
			                    v49.799c0,13.9,11.3,25.1,25.1,25.1H623.393z"/>
                            <path className='mixer' d="M882.292,115.292c-40.6-30.2-98-21.8-128.3,18.8l-180.6,242.7h228.6l99.1-133.2
			                    C931.292,202.993,922.893,145.593,882.292,115.292z"/>
                            <path d="M310.292,849.492c51.3,18.5,106.8,28.5,164.7,28.5s113.4-10,164.7-28.5c168.899-60.699,292.899-212.699,310.1-398.599
			                    c2.4-25.7-18-47.9-43.8-47.9h-123.6h-228.5h-509.9c-25.8,0-46.2,22.2-43.8,47.9C17.392,636.793,141.392,788.793,310.292,849.492z"/>
                            <polygon className={animateStar ? 'animateStar' : null} points="155.692,239.893 190.292,155.693 279.092,116.792 189.592,82.693 155.692,0.893 121.692,82.693 32.192,116.792 
			                    120.992,155.693"/>
                        </g>
                    </g>
                </svg>
            </div>
        </header>
    );
}

export default Header;