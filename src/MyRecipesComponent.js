import picOne from './picOne.png';

function MyRecipesComponent({label, image, calories, ingredients, totalTime}) {
return(<div className="co">
  <div className="container">
    <h2>{label}</h2>
    </div>
    <div className="container">
    <img className="tasty" src={image} alt="pic"/>
    </div>

<ul className="list">
    <h3>Ingredients:</h3>
{ingredients.map(ingredient => (
    <li> <img src={picOne} className="icon" alt=""/>
    {ingredient}</li>
))}
</ul>

    <div className="container">
    <h3>{calories.toFixed()} calories</h3>
    </div>

    <div className="container">
    <h3>Cooking time: {totalTime} minuts</h3>
    </div>
  
</div>
)
}

export default MyRecipesComponent;

/*key={ingredient.id}*/