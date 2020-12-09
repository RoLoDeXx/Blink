import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Status from "./Status";

const App = () => {
  const [domainInfo, setDomainInfo] = useState({});
  const [query, setQuery] = useState("");
  const getInfo = async () => {
    let info = await axios.get(`${process.env.REACT_APP_BASE}`, {
      params: {
        apiKey: process.env.REACT_APP_KEY,
        outputFormat: "JSON",
        domainName: query,
      },
    });
    setDomainInfo(info.data.WhoisRecord);
    console.log(info.data.WhoisRecord);
  };

  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
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

      {domainInfo.domainName === undefined ? null : (
        <div>
          <h1 className="display-4 mt-4">Status</h1>
          <Status domainInfo={domainInfo} />
        </div>
      )}
    </div>
  );
};

export default App;
