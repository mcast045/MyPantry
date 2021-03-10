import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Recipe from './Pages/Recipe/Recipe'
import Header from './Components/Header/Header'
import MyIngredients from './Components/MyIngredients/MyIngredients'

function App() {

  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [showMyIngredients, setShowMyIngredients] = useState(false)
  const [recipes, setRecipes] = useState([])

  return (
    <div className="App">
      <div className='App-body'>
        <Header showMyIngredients={showMyIngredients} selectedIngredients={selectedIngredients} setShowMyIngredients={setShowMyIngredients} />

        <Switch>
          <Route path='/' exact render={props => <Landing {...props} setShowMyIngredients={setShowMyIngredients} setSelectedIngredients={setSelectedIngredients} selectedIngredients={selectedIngredients} setRecipes={setRecipes} recipes={recipes} />} />
          <Route path='/:id' render={props => <Recipe {...props} recipes={recipes} />} />
        </Switch>
      </div>

      {showMyIngredients && selectedIngredients.length > 0 && <MyIngredients recipes={recipes} selectedIngredients={selectedIngredients} setRecipes={setRecipes} setShowMyIngredients={setShowMyIngredients} />}
    </div>
  );
}

export default App;
