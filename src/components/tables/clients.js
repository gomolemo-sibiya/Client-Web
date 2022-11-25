import React, { useEffect, useState } from "react";
import {
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
  //New
  //New End
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ClientHeader from "../tableHeader/clients";

import { 
  deleteClientUserStart,
  filterClientUserStart,
  loadClientUserStart,
  sortClientUserStart
} from "../../redux/action/client_actions";

import { 
  Eye, 
  TrashSimple, 
  PencilSimple, 
  PaperPlaneTilt,
  CaretRight,
  CaretLeft
} from "phosphor-react";
import "../../redux/actions";
import './style.css';

const Clients = () => {
     //New = error
    const { clientUsers, loading, error, pageLimit, currentPage, paginationMode } = useSelector((state) => state.data);
    //New
    const dispatch = useDispatch();
    const [sortValue, setSortValue] = useState("");
    const sortOption = ["Id", "Initials", "Name", "Email", "Phone", "Password"];

    //New End
    useEffect(() => {
        dispatch(loadClientUserStart({start: 0, end: 6, currentPage: 0}));
    }, []);
    
    useEffect(() => error && toast.error(error), [error]);
 
    if (loading) {
        return (
        <MDBSpinner style={{ marginTop: "150px" }} role="status">
            <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        );
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure that you wanted to delete user ?")) {
          dispatch(deleteClientUserStart(id));
          toast.success("User Delete Successfully");
          setTimeout(() => 
            dispatch(loadClientUserStart({start: 0, end: 6, currentPage: 0})),  200
          ); 
        }
    };

    const onFilterChange = (value) => {
        dispatch(filterClientUserStart(value));
    }
    
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

    const renderPagination = () => {
        if(currentPage === 0){
          return(
            <div className="pagination">
              <div>
                <div>1</div>
              </div>
              <div>
                <button 
                  onClick={() => 
                    dispatch(loadClientUserStart({start: 6, end: 12, currentPage: 1}))
                  }>
                    <CaretRight size={20} />
                  </button>
              </div>
            </div>
          )
        } else if(currentPage < pageLimit -1 && clientUsers.length === pageLimit){
          return (
            <div className="pagination">
              <div>
                <button
                  onClick={() => 
                    dispatch(
                      loadClientUserStart({
                        start: (currentPage - 1) * 6, 
                        end: currentPage * 6, 
                        currentPage: -1
                      })
                    )
                  }
                >
                  <CaretLeft size={20} />
                </button>
              </div>
    
              <div>
                <div>{currentPage + 1}</div>
              </div>
              
              <div>
                <button
                  onClick={() => 
                    dispatch(
                      loadClientUserStart({
                        start: (currentPage + 1) * 6, 
                        end: (currentPage + 2) * 6,
                        currentPage: 1
                      })
                    )
                  }
                  >
                    <CaretRight size={20} />
                </button>
              </div>
            </div>
          )
        } else {
          return (
            <div className="pagination">
              <div>
                <button
                  onClick={() => 
                    dispatch(
                      loadClientUserStart({
                        start: (currentPage - 1) * 6, 
                        end: currentPage * 6,
                        currentPage: -1
                      })
                    )
                  }
                >
                  <CaretLeft size={20} />
                </button>
              </div>
              <div>
                <div>{currentPage + 1}</div>
              </div>
            </div>
          )
        }
    }
    return (
        <div className="container" >
          <div className="tblWrapper">
            <ClientHeader />
            <table>
              <thead>
                <tr className="heading">
                  <th scope="col" style={{width: '20px'}}>No.</th>
                  <th scope="col" style={{width: '20px'}}>Initial</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Password</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clientUsers.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center mb-0">No Data Found</td>
                    </tr>
                  ) : (
                    clientUsers.map((item, index) => (
                    <tr>
                      <th scope="row" style={{width: '20px'}}>{index + 1}</th>
                      <td style={{width: '20px'}}>{item.initials}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          className="action delete"
                          tag="a"
                          color="none"
                          onClick={() => handleDelete(item.id)}
                        >
                          {" "}
                          <MDBTooltip title="Delete" tag="a">
                            <TrashSimple size={16} color={"red"}/>
                          </MDBTooltip>

                        </button>
                        <Link to={`/edit-client/${item.id}`} className="action edit">
                          <MDBTooltip title="Edit" tag="none">
                            <PencilSimple size={16} color={"#3DCBB1"}/>
                          </MDBTooltip>
                        </Link>

                        <Link to={`/userInfo/${item.id}`} className="action view">
                          <MDBTooltip title="View" tag="none">
                            <Eye size={16} color={"black"}/>
                          </MDBTooltip>
                        </Link>
                      </td>
                    </tr>
                )))}
              </tbody>  
            </table>
            { paginationMode ? (
              <div className="footer">
                <div className="exportBtn">
                  <button className="icon">
                      <PaperPlaneTilt /> 
                      <span>Export</span> 
                  </button>
                </div>
                <div>{renderPagination()}</div>
              </div>
              ) : null
            }
          </div>
    </div>
    )
}

export default Clients