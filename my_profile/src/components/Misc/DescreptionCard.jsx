import React from 'react';
import PropTypes from 'prop-types';


const Descreption = ({ data }) => (

  <div className="descriptioncard">

    
    {data.map((eachData)=>(
        
        <article>
            <div className="title">
                <h3>{eachData.title}</h3>
            </div>
            <ul className="points">
                {eachData.points.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </article>
    ))}
    
  </div>
);

Descreption.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string)
  })),
};

Descreption.defaultProps = {
  data: [],
};

export default Descreption;
