import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useContext(UserContext);
  // const history = useHistory();
  console.log(users);

  // const handleRemoveBtn = () => {
  //   console.log('clicked');
  //   history.push("/remove");
  // }
  return (
    <div>
      <Button variant="primary">Create User</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Button className="action-btn" variant="primary">
                  Read
                </Button>
                <Button className="action-btn" variant="info">
                  Edit
                </Button>

                <Link to={"/remove/"+user.id}>
                  <Button className="action-btn" variant="danger">
                    Remove
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
