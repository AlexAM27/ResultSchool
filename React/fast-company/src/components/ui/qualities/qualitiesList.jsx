import React from "react";
import { Qualitie } from "./qualitie";
import PropTypes from "prop-types";

export const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Qualitie key={quality._id} {...quality} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};
