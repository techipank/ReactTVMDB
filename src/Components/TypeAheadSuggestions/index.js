import React from 'react';

class TypeAheadSuggestions extends React.Component{
    constructor(props){
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick(e){
        e.preventDefault();
        window.location.href = `/show/${this.props.show.id}`;
    }
    render(){return (
            <div className="w-100 border-bottom" onClick={this.handelClick}>
                {this.props.show.name}
            </div>
        
    )}
};
export default TypeAheadSuggestions;