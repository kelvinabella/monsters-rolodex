import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFilter: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monsters: response }));
  }

  handleChange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={"search monster"}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
