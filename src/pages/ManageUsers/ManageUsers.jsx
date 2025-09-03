import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Tables/Table";
import { API } from "../../services/Api";
import { jwtDecode } from "jwt-decode";
import sign from "jwt-encode";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { userData, getLoginUser, setAdmin, setTeacher } =
    useContext(AuthContext);
  const navigator = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await API.auth.allUsers();
      const users = response.data.map((user) => {
        return jwtDecode(user.accessToken);
      });
      setAllUsers(users);
      setFilteredUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const encodeJWT = (userData) => {
    const secret = "your-256-bit-secret";
    return sign(userData, secret);
  };

  const handleUpdateSave = async (updatedUserData) => {
    try {
      const { accessToken, ...restUserData } = updatedUserData;

      const isCurrentUserUpdated = updatedUserData.id === userData.id;

      const newAccessToken = encodeJWT({
        ...restUserData,
        role: updatedUserData.role,
      });

      await API.auth.updateUser(updatedUserData.id, {
        accessToken: newAccessToken,
      });

      if (isCurrentUserUpdated) {
        if (localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", newAccessToken);
        } else if (sessionStorage.getItem("accessToken")) {
          sessionStorage.setItem("accessToken", newAccessToken);
        }
        getLoginUser();
        if (updatedUserData.role === "admin") {
          setAdmin(true);
          setTeacher(true);
        } else if (updatedUserData.role.role === "teacher") {
          setTeacher(true);
          setAdmin(false);
        } else {
          setAdmin(false);
          setTeacher(false);
          navigator("/");
        }
      }

      const response = await API.auth.allUsers();
      setAllUsers(response.data);
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(allUsers)
    } else {
      const filteredUsers = allUsers.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredUsers)
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  
  const headers = ["ID", "Name", "Surname", "Email", "Semester", "Role"];

  return (
    <>
      <div className="table-container mx-auto">
        <div className="SearchTitle d-flex">
          <input
            type="text"
            className="form-control p-1 m-1"
            placeholder="Search User email.."
            value={searchTerm}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="buttons d-flex">
            <button
              type="button"
              className="btn btn-secondary p-2 me-1 my-1"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
        </div>
        <Table
          Headers={headers}
          Datas={filteredUsers}
          handleUpdateSave={handleUpdateSave}
          Container={false}
          Actionbtn={"ManageUsers"}
        />
      </div>
    </>
  );
};

export default ManageUsers;
