import React from 'react';
import Tableheader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, onSort, sortColumn}) => { 
        return (
      <table className="table">
        <Tableheader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={data} columns={columns} />
      </table>
    );
}
 
export default Table;