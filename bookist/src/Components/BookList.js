import React, {Component} from 'react';
/*display the list of books (picture and title)
feature: add to shelf
props:
     books 
     addToShelf(function)
      */
export default class BookList extends Component{
    render(){
        let addToShelf = this.props.addToShelf;
        let books = this.props.displayedBooks.map(function(book){
            return(<div className="book" key={book.id}>
                <button className="bookBut"data-id={book.id} onClick={addToShelf}>+</button>
                <img src={book.img} alt={book.title}></img>
                <div className="title">{book.title}</div>
                <div className="author">By: {book.author}</div>
            </div>)
        })

        return(<div id="bookList">
            {books}
        </div>)
    }
}