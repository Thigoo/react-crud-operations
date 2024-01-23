import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);  

  const navigate = useNavigate();

  const updateApiData = () => {
    axios.put(`https://65afdd452f26c3f2139bed92.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      checkbox
    }).then(() => {
      navigate('/read')
    })
  };

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  return (
    <div>
      <Form className="create-form">
        <FormField>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </FormField>
        <FormField>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
            checked={checkbox}
          />
        </FormField>
        <Button 
        type="submit"
        onClick={updateApiData}>
        Submit
        </Button>
      </Form>
    </div>
  );
}

export default Update;
