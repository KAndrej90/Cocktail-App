import React from "react";
import Cocktail from './Cocktail';



export default function CocktailList ({cocktailsData, removeCocktail}) {
  
    return (
        <>
        
        {cocktailsData ?
            cocktailsData.map((cocktail)=>
                <Cocktail key={cocktail.idDrink} cocktailData={cocktail} removeCocktail={removeCocktail}/>
            )
            : <div className='noCocktails'> 
                <h1>A cocktail is an alcoholic mixed drink. Most commonly, cocktails are either a 
                    combination of spirits, or one or more spirits mixed with other ingredients such 
                    as fruit juice, flavored syrup, or cream. Cocktails vary widely across regions of 
                    the world, and many websites publish both original recipes and their own interpretations
                     of older and more famous cocktails. 
                </h1> 
            </div>
        }
        </>
    );
  }
 