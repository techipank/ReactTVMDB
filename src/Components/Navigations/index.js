import React,{Fragment} from 'react';
import {typeAheadSearchAction} from '../../Actions';
import {connect} from 'react-redux';
import TypeAheadSuggestions from '../TypeAheadSuggestions';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import {Link} from 'react-router-dom';

class Navigations extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'searchTerm':'',
            'suggestions':[],
            'isLoading':false
        }
        this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
        this.onPressSearchEnter = this.onPressSearchEnter.bind(this);
        this.suggestItems = this.suggestItems.bind(this);
    }
    onChangeSearchTerm(term){
        this.props.typeAheadSearchAction(term);
    }
    onPressSearchEnter(e){
        console.log(e.target.value);
    }
    suggestItems(suggestion,props){
        return (
            <TypeAheadSuggestions show={suggestion.show} key={suggestion.show.id} routeOnSelect={this.routeOnSelect}/>
        )
    }
    suggestFilter = (option,props) => {
        return (
            option.show.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
        );
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg text-light fixed-top">
                <Link to="/" className="navbar-brand">TV Shows</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-50 mx-auto">
                    <Fragment>
                        <AsyncTypeahead
                            {...this.props}
                            labelKey={(option) => {return option.show.name}}
                            onSearch={this.onChangeSearchTerm}
                            placeholder="Search for TV show"
                            renderMenuItemChildren={this.suggestItems}
                            options={this.props.suggestions}
                            minLength={2}
                            filterBy={this.suggestFilter}
                            useCache={false}
                        />
                    </Fragment>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state=>{
    console.log('mapStateToProps',state)
    return {
        suggestions:state.shows.suggestions || [],
        isLoading:false
    }
}
export default connect(mapStateToProps,{typeAheadSearchAction})(Navigations);