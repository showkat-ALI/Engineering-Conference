import React from 'react';
import './Engineers.css'
// all the engineer are shown here 
const Engineers = (props) => {
const{age,company,designation,field,image,name,networth,salary}=props.engineer
    return (
        <div className="col  ">
    <div className="card h-100 align-items-center text-center engineer-showcase ">
      <img src={image} className="card-img-top engineer-image rounded-circle mt-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ">Name: {name}</h5>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Field: {field}</p>
        <p className="card-text">Company: {company}</p>
        <p className="card-text">Designation: {designation}</p>
        <p className="card-text">Salary: ${salary}</p>
        <p className="card-text">Net worth: {networth}</p>
        <button className="btn select-button" onClick= {()=>props.addtoCart(props.engineer)}><i className="fas fa-vote-yea"></i> Select</button>

      </div>
    </div>
  </div>
    );
};

export default Engineers;