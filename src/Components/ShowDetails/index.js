import React,{Component,Fragment} from 'react';
import {getShowDetails} from '../../Actions'
import {connect} from 'react-redux'
import Cast from '../Cast';

class ShowDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : null,
            loader:true
        }
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getShowDetails(id);
        this.setState({loader:false})
    }
    render(){
        const showDetails = this.props.showDetails;
        return(
            <Fragment>
            {showDetails &&  
                <div className="container py-2">
                    <div className="row text-white">
                        <div className="col-sm-3">
                            <img src={showDetails.image.medium} width="100%" className="mb-2" alt={showDetails.name}/>
                            <div>
                                <div className="w-50 text-left float-left">
                                    Premiered
                                </div>
                                <div className="w-50 text-right float-right">
                                    {showDetails.premiered}
                                </div>
                            </div>
                            <div>
                                <div className="w-50 text-left float-left">
                                    Run Time
                                </div>
                                <div className="w-50 text-right float-right">
                                    {showDetails.runtime}
                                </div>
                            </div>
                            <div>
                                <div className="w-50 text-left float-left">
                                    Status
                                </div>
                                <div className="w-50 text-right float-right">
                                    {showDetails.status}
                                </div>
                            </div>
                            
                            <div>
                                <div className="w-50 text-left float-left">
                                    Language
                                </div>
                                <div className="w-50 text-right float-right">
                                    {showDetails.language}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 text-light" >
                            <h1>{showDetails.name}</h1>
                            <p>Rating: {showDetails.rating.average}</p>
                            <h3>Synopsis</h3>
                            <div dangerouslySetInnerHTML={{__html:showDetails.summary}}></div>
                            <h3>Cast</h3>
                            {showDetails._embedded.cast && showDetails._embedded.cast.map((cast)=>{
                                return <Cast person={cast.person}/>;
                            })}
                            
                        </div>
                    </div>  
                </div>
            }
            </Fragment>
        )
    }
};
function mapStateToProps(state){
    // console.log('map state show details',state)
    return {
        showDetails:state.shows.showDetails||null
    }
}
export default connect(mapStateToProps,{getShowDetails})(ShowDetails);