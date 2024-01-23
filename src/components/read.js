import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from "semantic-ui-react";

export function Read() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  }

  const onDelete = async (id) => {
    await axios.delete(`https://65afdd452f26c3f2139bed92.mockapi.io/fakeData/${id}`);
    getData();
  }

  const getData = () => {
    axios
      .get(`https://65afdd452f26c3f2139bed92.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  }

  useEffect(() => {
    axios
      .get(`https://65afdd452f26c3f2139bed92.mockapi.io/fakeData`)
      .then((res) => {
        setAPIData(res.data);
      });
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>Checked</TableHeaderCell>
            <TableHeaderCell>Update</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {APIData.map((data) => {
            return (
              <TableRow>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.checkbox ? "Checked" : "Unchecked"}</TableCell>
                <Link to='/update'>
                  <TableCell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </TableCell>
                </Link>
                <TableCell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Read;
