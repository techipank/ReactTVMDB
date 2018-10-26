import React,{Fragment} from 'react';
class StarRatings extends React.Component{
    constructor(props){
        super(props);
        //this.convertAvgToScale = this.convertAvgToScale.bind(this);
    }
    
    render(){
        return (
            <Fragment>
                <div>{this.props.avg +' / '+this.props.scale}</div>
            </Fragment>
        )
    }
};

export default StarRatings;