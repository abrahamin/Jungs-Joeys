import React from "react";
import { Link } from "react-router-dom";


export default function Question() {
    return (
      
      <div>
        <ul className="collection">
          <li className="collection-item avatar">
               <h3>
                My Posts 
              </h3>
              <Link to="/" className="secondary-content">
                <i className="material-icons"></i>
              </Link>
          </li>
          </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">folder</i>
            <span className="title">Username:</span>
            <p>
              Topic:
            </p>
            <p>
              Question:
            </p>
            <p>
              <Link to="/">See Comments</Link>
            </p>
            <Link to="/" className="secondary-content"><i className="material-icons">grade</i></Link>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">folder</i>
            <span className="title">Username - 2:</span>
            <p>
              Topic -2 :
            </p>
            <p>
              Question - 2 :
            </p>
            <p>
              <Link to="/">See Comments</Link>
            </p>
            <Link to="/" className="secondary-content"><i className="material-icons">grade</i></Link>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">folder</i>
            <span className="title">Username - 3:</span>
            <p>
              Topic - 3 :
            </p>
            <p>
              Question - 3 :
            </p>
            <p>
              <Link to="/">See Comments</Link>
            </p>
            <Link to="/" className="secondary-content"><i className="material-icons">grade</i></Link>
          </li>
      </ul>
      </div>
    
    );
  }