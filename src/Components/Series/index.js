import React from 'react';
import {Link} from 'react-router-dom';

const Series = ({showData}) =>{
    return (
        <div className="col-sm-4 col-md-2 mb-3">
        <div className="card bg-transparent border-0">
            <img src={showData.image.medium} alt={showData.name} className="card-img-top"/>
            <div className="card-body text-center text-capitalize">
                <Link to={'/show/'+showData.id} 
                    data-toggle="tooltip" 
                    tooltip-direction="top"
                    title={showData.name}
                    className="lead"
                >{showData.name}</Link>
                {showData.rating && showData.rating.average &&
                    <p class="text-white text-muted"><em>{'(' +showData.rating.average+' / 10)'}</em></p>
                }
            </div>
        </div>
        </div>
    )
}
export default Series