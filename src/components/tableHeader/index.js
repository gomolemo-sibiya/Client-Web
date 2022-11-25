import React, { useState } from "react";
// New
import {useDispatch} from "react-redux"
// New
import { Link } from "react-router-dom";
import { sortUserStart } from "../../redux/actions";
import { loadUsersStart, searchUserStart } from "../../redux/actions";
import './tblStyles.css';

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const sortOption = ["Name", "Email", "Phone", "Address", "Status"];
  //End New
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUserStart(searchTerm));
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
      dispatch(sortUserStart(e.target.value));
    } else {
      dispatch(loadUsersStart());
      setSortValue("");
    }
  }
  return (
    <>
      <div className="mainContainer">
        <div className="section-title">
          Manage Drivers
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
                dispatch(loadUsersStart({start: 0, end: 4, currentPage: 0}))
              }
            >
                Reset
            </button>
            <select
                value={sortValue}
                onChange={onSortChange}
                className="filterBtn form-item"
              >
                <option>Filter</option>
                {sortOption.map((item, index) => (
                  <option value={item.toLowerCase()} key={index}>{item}</option>
                ))}
            </select>

            <Link to="/add" className="addLink form-item">
              Add Driver

            </Link>

          </form>
          
          {/* new */}
      </div>
    </>
  );
};

export default Header;
              