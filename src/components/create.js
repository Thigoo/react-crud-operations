import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();

  const postData = () => {
    axios.post(`https://65afdd452f26c3f2139bed92.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkbox
    }).then(() => {
      navigate('/read')
    })
  };

  return (
    <Form className="create-form">
      <FormField>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </FormField>
      <Button 
      type="submit"
      onClick={postData}>
      Submit
      </Button>
    </Form>
  );
}
