import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
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
