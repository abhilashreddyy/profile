import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <div className = "degree-content">
        <p className="school"><a href={data.link}>{data.school}</a></p> 
        <p id="date">{data.start_date + "-" + data.end_date}</p>
       
      </div>
      
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired
  }).isRequired,
};

export default Degree;
