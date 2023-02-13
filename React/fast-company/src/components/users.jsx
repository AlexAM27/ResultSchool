import React, { useState, useEffect } from "react";
import { Pagination } from "./pagination";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import { GroupList } from "./groupList";
import API from "../api";
import { SearchStatus } from "./searchStatus";
import { UsersTable } from "./usersTable";
import { useParams } from "react-router-dom";
import User from "./user";

export const Users = () => {
    const pageSize = 6;
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    const [users, setUsersList] = useState();
    const params = useParams();
    const { userId } = params;

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsersList(data);
        });
    }, []);

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data), []);
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleDelete = (userId) => {
        setUsersList(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsersList(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
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

        if (userId) {
            return (
                <div style={{ marginLeft: "10px" }}>
                    <User id={userId} />
                </div>
            );
        }

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
                            onDelete={handleDelete}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onToggleBookMark={handleToggleBookMark}
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
    }
    return "loading...";
};
