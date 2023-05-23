import React from 'react';

const ProgressBar= (props) =>{
	//console.log(props);
	return (
		<div className="progress">
                <span className="skill">{props.title} <i className="val">{props.percentage}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100" style={{width:props.width}}></div>
                </div>
              </div>
		);
};
export default ProgressBar;