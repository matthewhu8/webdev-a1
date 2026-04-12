"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FormControl } from "react-bootstrap";
import * as client from "../client";
import PeopleTable from "../../courses/[cid]/people/Table";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsersByRole = async (selectedRole: string) => {
    setRole(selectedRole);
    if (selectedRole) {
      const filtered = await client.findUsersByRole(selectedRole);
      setUsers(filtered);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (partialName: string) => {
    setName(partialName);
    if (partialName) {
      const filtered = await client.findUsersByPartialName(partialName);
      setUsers(filtered);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `newuser${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  return (
    <div>
      <h3>Users</h3>
      <div className="d-flex mb-2">
        <FormControl
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="float-start w-25 me-2 wd-filter-by-name"
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select float-start w-25 wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="FACULTY">Faculty</option>
          <option value="TA">Assistants</option>
          <option value="ADMIN">Administrators</option>
        </select>
        <button onClick={createUser} className="float-end btn btn-danger ms-auto wd-add-people">
          <FaPlus className="me-2" />
          People
        </button>
      </div>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
