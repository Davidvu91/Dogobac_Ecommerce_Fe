import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./searchbox.css";

const SearchBox = ({ searchInput, handleSearchChange, handleSubmit }) => {
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        className="mr-2"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
      />
      <Button
        variant="dark"
        className="search-bnt"
        type="submit"
        onSubmit={handleSubmit}
      >
        Search...
      </Button>
    </Form>
  );
};

export default SearchBox;

// <Form className="d-flex">
//   <FormControl placeholder="Search" className="mr-2" />
//   <Button variant="dark" className="search-bnt">
//     Search...
//   </Button>
// </Form>
