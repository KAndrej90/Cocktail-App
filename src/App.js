import './App.css';
import {useState} from 'react';
import Input from './Components/Input';
import CocktailList from './Components/CocktailList';
import SocialMedia from './Components/SocialMedia';




function App() {
  const [data, setData]= useState([]);

  const getCocktail= (name)=>{
    let url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    let newCocktailName = name;
    let urlKoktels = url + newCocktailName;
    
    fetch(urlKoktels)
      .then(response => response.json())
      .then(cocktailData => setData(cocktailData))
  }

  const removeCocktail =(id)=>{
    const newCocktailList = data.drinks.filter(x => x.idDrink !== id);
    setData({drinks:newCocktailList});    
  }

      return (
    <>
      <main>
        <nav>
          <div>
          <h1>Search for your favorite cocktail</h1>
          <Input newName={getCocktail} /> 
          </div>
          <SocialMedia/>
        </nav>
        <section className='listSection'>
          <CocktailList cocktailsData={data.drinks} removeCocktail={(id)=> removeCocktail(id)}/>
        </section> 
      </main>
      </>
  );
}
export default App;
