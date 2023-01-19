import React, { useState, useEffect } from "react";
import { Pagination } from "./pagination";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import { GroupList } from "./groupList";
import API from "../api";
import { SearchStatus } from "./searchStatus";
import { UsersTable } from "./usersTable";
import PropTypes from "prop-types";

export const Users = ({ users, onDelete, onToggleBookMark }) => {
    const pageSize = 12;
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

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
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearAll = () => {
        setSelectedProf();
    };

    const onHandleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
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
                {count > 0 && (
                    <UsersTable
                        users={userCrop}
                        onDelete={onDelete}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        onToggleBookMark={onToggleBookMark}
                    />
                )}
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
    users: PropTypes.arrayOf(PropTypes.object),
    onToggleBookMark: PropTypes.func.isRequired
};
