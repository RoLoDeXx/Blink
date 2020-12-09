import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const App = () => {
  const [query, setQuery] = useState("");
  const getInfo = async () => {
    let info = await axios.get(`${process.env.REACT_APP_BASE}`, {
      params: {
        apiKey: process.env.REACT_APP_KEY,
        outputFormat: "JSON",
        domainName: query,
      },
    });
    console.log(info);
  };

  return (
    <div className="d-flex justify-content-around mt-5">
      <TextField
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        variant="outlined"
        label="URL"
        className="w-75 text-left"
      />
      <Button variant="outlined" color="primary" onClick={getInfo}>
        Test
      </Button>
    </div>
  );
};

export default App;
