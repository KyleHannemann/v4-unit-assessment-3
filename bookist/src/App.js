import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import React, { Component } from 'react';
import Data from './Data/data';
/*state: 
  books, 
  shelf
methods:
    addToShelf  > BookList
    clearShelf  > Shelf
    filterBooks > SearchBar
    reset       >SearchBar
*/
class App extends Component {
  constructor(){
    super();
    this.state = {
      library: Data,
      shelf: [],
      displayedBooks: Data,
    };
  this.addToShelf = this.addToShelf.bind(this);
  this.search = this.search.bind(this);
  this.removeBook = this.removeBook.bind(this);
  this.clearShelf = this.clearShelf.bind(this)
  }
  clearShelf(){
    this.setState({shelf: []})
    this.setState({displayedBooks: Data})
  }
  search(e){
    let search = e.target.value.toUpperCase();
    let shelf = this.state.shelf;
    let library = this.state.library.filter(function(book){
        for (var i = 0; i < shelf.length; i++){
          if (shelf[i].title === book.title){return null;}
        }
        return book;});
    let searchResults = library.filter(function(book){
      if (book.title.toUpperCase().includes(search) || book.author.toUpperCase().includes(search)){
        return book;
      }
      else{return null;}
    })
    this.setState({
      displayedBooks: searchResults
    })
  }
  addToShelf(e){
    let id = parseInt(e.target.dataset.id);
    let shelf = this.state.shelf;
    for (var i = 0; i < this.state.library.length; i++){
      if (this.state.library[i].id === id){
        shelf.push(this.state.library[i]);
        break;
      }
    }
    this.setState({
      shelf: shelf
    })
    let newDisplay = this.state.displayedBooks.filter(function(book){
      if (book.id === id){
        return null;
      }
      else{return book;}
    })
    this.setState({displayedBooks: newDisplay})
   
  }
  removeBook(e){
    console.log(e.target.dataset.id)
    let id = parseInt(e.target.dataset.id);
    let displayedBooks = this.state.displayedBooks;
    for (var i = 0; i < this.state.library.length; i++){
      if (this.state.library[i].id === id){
        displayedBooks.push(this.state.library[i]);
        break;
      }
    }
    this.setState({displayedBooks: displayedBooks})
    let newShelf = this.state.shelf.filter(function(el){
      if (el.id === id){ return null; }
      else{return el}
    });
    this.setState({shelf: newShelf})

  }
  
  render(){
  return (
    <div className="App">
      <Header />
      <SearchBar search={this.search}/>
      <Shelf clearShelf={this.clearShelf} shelf={this.state.shelf} removeBook={this.removeBook}/>
      <BookList addToShelf={this.addToShelf}displayedBooks={this.state.displayedBooks}/>
    </div>
  )
  }
}

export default App;
