import React, { useState, useEffect } from "react";
import * as constants from "../utils/constants";
import { Pagination } from "./pagination";
import _ from "lodash";
import { User } from "./user";
import { paginate } from "../utils/paginate";
import { GroupList } from "./groupList";
import API from "../api";
import { SearchStatus } from "./searchStatus";
import PropTypes from "prop-types";

export const Users = (props) => {
    const { users } = props;
    const pageSize = 4;
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data), []);
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => _.isEqual(user.profession, selectedProf))
        : users;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearAll = () => {
        setSelectedProf();
    };

    const onHandleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const renderUsersTable = () => {
        return userCrop.map((user) => (
            <User key={user._id} user={user} onDeleteUser={props.onDelete} />
        ));
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={onHandleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearAll}
                    >
                        Очистить все
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <table className="table">
                    <thead style={{ borderBottom: "5px" }}>
                        <tr>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_NAME}
                            </th>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_QUALITY}
                            </th>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_PROFESSION}
                            </th>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_MEETINGS}
                            </th>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_RATE}
                            </th>
                            <th scope="col">
                                {constants.USERS_TABLE_HEADER_LABEL_FAVORITE}
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>{renderUsersTable()}</tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    onDelete: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object)
};
