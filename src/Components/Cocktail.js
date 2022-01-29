import React from "react";
import { useState } from "react";

export default function Koktels ({cocktailData, removeCocktail}) {
    const [cocktailInfo, setCocktailInfo] = useState( '');
    const [isMoreDetailsActive, setIsMoreDetailsActive] = useState(false);
    let urlId ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const getCocktailInfo =(id)=>{
        let urlCocktailId = urlId + id;
        let completeUrl= urlCocktailId;
    
        if(!cocktailInfo){
            fetch(completeUrl)
            .then(response => response.json())
            .then(cocktailIdData => setCocktailInfo(cocktailIdData.drinks[0]))
            console.log(cocktailInfo);
        } 
        else {
            setCocktailInfo('')
        }   
    }

    const handleClick =(id)=>{
        removeCocktail(id)  
    }

    return (
        <>
        <ul >  
            <li key={cocktailData.idDrink} className='cocktailCard'>
                <button className='deleteBtn' onClick={()=>handleClick(cocktailData.idDrink)}> X </button>
                <h3>{cocktailData.strDrink}</h3>
                <p><span>Type:</span> {cocktailData.strAlcoholic}</p>
                <p><span>Category:</span> {cocktailData.strCategory}</p>
                {isMoreDetailsActive &&
                    <div className='moreDetails'>
                        <img src={cocktailInfo.strDrinkThumb} alt={cocktailData.strDrink} ></img>
                        <p><span>Served in:</span> {cocktailInfo.strGlass}</p>
                        <p><span>Instructions:</span> {cocktailInfo.strInstructions}</p>
                    </div>
                }
                <button className="btn" onClick={()=>{
                    getCocktailInfo(cocktailData.idDrink)
                    setIsMoreDetailsActive(!isMoreDetailsActive)
                    }
                }> {isMoreDetailsActive ? 'Hide details' :'Show more details'}</button>
            </li> 
        </ul>
        </>
    )
    
}
 