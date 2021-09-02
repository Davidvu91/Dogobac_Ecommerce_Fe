import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./searchbox.css";

const SearchBox = ({ searchInput, handleSearchChange, handleSubmit }) => {
  return (
    <Form className="d-flex">
      <FormControl placeholder="Search" className="mr-2" />
      <Button variant="dark" className="search-bnt">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
