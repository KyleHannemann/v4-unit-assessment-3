import React, {Component} from 'react';
/* display shelf, current books selected
feature: clear books selected, remove book
props:
    shelf
    clearShelf(function)
*/
export default class Shelf extends Component{
    render(){
        let removeBook = this.props.removeBook;
        let shelf = this.props.shelf.map(function(book){
            return (<div className="shelfItem" key={book.id}>
                <span>{book.title}</span>
                <button data-id={book.id} onClick={removeBook}>x</button>
            </div>)
        })
        return(<div id="shelf">
            <h3 id="shelfTitle">Your Shelf</h3>
            <button id="clearShelf"onClick={this.props.clearShelf}>clear shelf</button>
            {shelf}
            
            
        </div>)
    }
}