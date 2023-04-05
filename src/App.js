import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import image from './icons8.png';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  
const MY_ID = "74eedbb8";
const MY_KEY = "3200cb9719576420358e552e858514af";
/*const query = {wordSubmitted};  - надо посмотреть как это можно прописать*/

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('avocado');

useEffect( () => { 
  const getFood = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits)

  }
  getFood();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
<div className="App">

  <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
  </div>

  <div className="container">
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
      </input>
    </form>
  </div>


  <div className="container">
    <button onClick={finalSearch} className='btn'>
      <img src={image} className='icons' alt='icon'/>
    </button>
  </div>

  <div className="conty">
    {myRecipes.map(element => (
    <MyRecipesComponent 
    label={element.recipe.label} 
    image={element.recipe.image} 
    calories={element.recipe.calories} 
    ingredients={element.recipe.ingredientLines}
    totalTime={element.recipe.totalTime}
    />
    ))} 
  </div>
 

</div>
);
}

export default App;
