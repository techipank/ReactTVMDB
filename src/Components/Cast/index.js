import React from 'react';
import PropTypes from 'prop-types';
const Cast = (props) => {
    const person = props.person;
    console.log(person);
    return(
        <div className="col-sm-2 d-inline-block text-center pb-3 ">
            <div className="text-center w-100">
                {person && person.image && <img alt={person.name} src={person.image.medium} className="image-thumbnail w-100"/>}
                {(!person || !person.image) && 
                    <div class="default-cast-image border w-100"></div>         
                }
            </div>
            <div className="text-uppercase small text-truncate text-info">
                {person.name}
            </div>
        </div>
    )
}
Cast.PropTypes = {
    person:PropTypes.object
}
export default Cast;