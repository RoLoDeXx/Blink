import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Status = ({ domainInfo }) => {
  return (
    <div className="mt-3">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="font-weight-bold">Field</TableCell>
              <TableCell className="font-weight-bold">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Country of origin
              </TableCell>
              <TableCell>{domainInfo.administrativeContact.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Organisation
              </TableCell>
              <TableCell>
                {domainInfo.administrativeContact.organization}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Domain Name
              </TableCell>
              <TableCell>{domainInfo.domainName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Registered On
              </TableCell>
              <TableCell>{domainInfo.createdDateNormalized}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Domain Age
              </TableCell>
              <TableCell>{domainInfo.estimatedDomainAge + " days"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Last updated on
              </TableCell>
              <TableCell>{domainInfo.updatedDate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Status;
