import React from "react";
import { SortArrow } from "../../sortArrow";
import PropTypes from "prop-types";

export const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            console.log(item);
            onSort({ path: item, order: "asc" });
        }
    };

    const renderSortArrow = (item) => {
        if (selectedSort.path === item) {
            return <SortArrow order={selectedSort.order} />;
        } else {
            return "";
        }
    };

    return (
        <thead style={{ borderBottom: "5px" }}>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {columns[column].sort &&
                            renderSortArrow(columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
