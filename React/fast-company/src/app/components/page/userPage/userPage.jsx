import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import UserCard from "./userInfoCards/userCard";
import QualitiesCard from "./userInfoCards/qualitiesCard";
import MeetingsCard from "./userInfoCards/meetingsCard";
// import { Link } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            // <div>
            //     <h1> {user.name}</h1>
            //     <h2>Профессия: {user.profession.name}</h2>
            //     <QualitiesList qualities={user.qualities} />
            //     <p>completedMeetings: {user.completedMeetings}</p>
            //     <h2>Rate: {user.rate}</h2>
            //     <Link to={`/users/${userId}/edit`}>
            //         <button> Изменить</button>
            //     </Link>
            // </div>
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard
                            name={user.name}
                            profession={user.profession.name}
                            rate={user.rate}
                        />
                        <QualitiesCard qualities={user.qualities} />
                        <MeetingsCard meetings={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">comments</div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
