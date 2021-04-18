import React, {Component} from 'react';
/* search for books 
feature: user input to search, button to clear search
state:
    input
props:
    filterBooks(function)
    reset(function)
methods:
    updateInput
 */
export default class SearchBar extends Component{
    render(){
        return(<div id="searchBar">
            <input id="search" onChange={this.props.search}placeholder="search"/>
        </div>)
    }
    
}