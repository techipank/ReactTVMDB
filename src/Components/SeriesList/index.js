import React from 'react'
import Series from '../Series'
import {showListAction} from '../../Actions'
import {connect} from 'react-redux'
class SeriesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shows:[]
        };
    }
    componentDidMount(){
        this.props.showListAction()
    }
    render(){
        const showList = this.props.shows.map((show)=> {
            return(
                <Series key={show.id} showData={show}/>
            );
        });
        return(
            <div className="container">
                <div className="row py-3">
                    {showList}
                </div>
            </div>
        );
    }
    
    //console.log('showlist',showList)
    
    
}
function mapStateToProps(state){
    return {
      shows:state.shows.showList||[]
    }
}
export default connect(mapStateToProps,{showListAction})(SeriesList);