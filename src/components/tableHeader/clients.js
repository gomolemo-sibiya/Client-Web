import React, { useState } from "react";
// New
import {useDispatch} from "react-redux"
// New
import { Link } from "react-router-dom";
import { loadClientUserStart, searchClientUserStart, sortClientUserStart } from "../../redux/action/client_actions";
import './tblStyles.css';


const ClientHeader = () => {
  const [sortValue, setSortValue] = useState("");
  const sortOption = ["Name", "Email", "Phone", "Address", "Status"];
  //End New
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchClientUserStart(searchTerm));
    setSearchTerm("");
  }
  //End New
  const onSortChange = (e) => {
    let sortValue = e.target.value
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    if (sortOption.includes(sortValue)){
      setSortValue(e.target.value);
      dispatch(sortClientUserStart(e.target.value));
    } else {
      dispatch(loadClientUserStart());
      setSortValue("");
    }
  }

  return (
    <>
      <div className="mainContainer">
        <div className="section-title">
          Manage Clients
        </div>
          <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="form-control form-item input" 
                placeholder="Search Name" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button type="submit" className="searchBtn form-item">
                Search
              </button>

            <button 
              className="resetBtn form-item"
              color="dark" 
              style={{marginLeft: "4px"}}
              onClick={() => 
                dispatch(loadClientUserStart({start: 0, end: 4, currentPage: 0}))
              }
            >
                Reset
            </button>

            <Link to="/add-client" className="addLink form-item">
              Add Driver
            </Link>

          </form>
          
          {/* new */}
      </div>
    </>
  );
};

export default ClientHeader;