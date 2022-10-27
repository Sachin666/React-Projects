import { Component } from 'react'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState(() => {
      return {monsters: users}
    }))
  }

   onSearchChange = (e) => {
      const searchField = e.target.value.toLowerCase() 
       this.setState(() => {
         return { searchField }
       })
  }

    render(){
      const { monsters, searchField } = this.state
      const { onSearchChange } = this;
      const filterMonster = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField)
      })
      return(
        <div className='App'>
          <h1 className='app-title'>Monster Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange} 
                      placeholder="search monsters" 
                      className='search-box'
                      />
          <CardList monsters={filterMonster}/>
        </div>
      )
    }
}



export default App;
