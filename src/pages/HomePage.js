import React, { useState } from "react";
import data from '../mock-data.json';
// import Member from "../components/Member";
import "./HomePage.css";

export default function HomePage() {

  const [contacts, setContacts] = useState(data);

  return (
    <div className="home--page">
      <h1 style={{ color: "white" }}> Members Account List</h1>
      <div className="filter">
        <select>
          <option value="" selected="selected" className="activity">ACTIVITY STATUS</option>
          <option> All Members</option>
          <option> Active Members</option>
          <option> Non-Active Members</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th> NAME </th>
            <th> EMAIL </th>
            <th> PHONE NUMBER </th>
            <th> MEMBERSHIP STATUS </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.membershipStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
