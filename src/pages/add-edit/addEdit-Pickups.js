import React, { useState, useEffect } from "react";
import { MDBValidation, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createPickUpStart, updatePickUpStart } from "../../redux/action/pickup_actions";
import { 
    Container,
    Heading,
    Wrapper,
    Input,
    Submit
} from "./style.js";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  status: "",
};


const AddEditPickUps = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { users } = useSelector((state) => state.data);
  const { name, email, phone, address, status } = formValue;
  const [ editMode, setEditMode] = useState(false);
  const [ statusErrorMsg, setStatusErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }
  }, [id]);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!status){
      setStatusErrorMsg("Please provide a Status");
    }
    if (name && email && phone && address && status) {
      if (!editMode) {
        dispatch(createPickUpStart(formValue));
        toast.success("User Added Successfully");
        setTimeout(() => navigate("/recycling-pickups"), 500);
      } else {
        dispatch(updatePickUpStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Updated Successfully");
        setTimeout(() => navigate("/recycling-pickups"), 500);
      }
    }
  };

  return (
    <Container>
        <MDBValidation noValidate onSubmit={handleSubmit} style={{ display: 'block'}}>
            <Wrapper>
                <Heading>
                    {editMode ? "Update User Detail" : "Add User Detail"}
                </Heading>

                <label>Initials</label>
                <Input
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={onChange}
                    required
                    label="Name"
                    validation="Please provide a name."
                    invalid
                />

                <label>Email</label>
                <Input
                    value={email || ""}
                    name="email"
                    onChange={onChange}
                    required
                    label="Email"
                    type="email"
                    validation="Please provide an email."
                    invalid
                />

                <label>Phone</label>
                <Input
                    value={phone || ""}
                    name="phone"
                    onChange={onChange}
                    required
                    label="Phone"
                    type="number"
                    validation="Please provide a phone no."
                    invalid
                />

                <Input
                    value={address || ""}
                    name="address"
                    type="text"
                    onChange={onChange}
                    required
                    label="Address"
                    validation="Please provide an address"
                    invalid
                />

                <Submit>
                    <MDBBtn className="addBtn" style={{ marginRight: "10px" }} type="submit">
                        {editMode ? "Update" : "Add"}
                    </MDBBtn>
                    <MDBBtn className="backBtn" onClick={() => navigate("/recycling-pickups")} color="danger">
                        Go Back
                    </MDBBtn>
                </Submit>
            </Wrapper>
        </MDBValidation>
    </Container>
  );
};

export default AddEditPickUps;
