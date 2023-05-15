import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without callBack

    const validateWithoutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallBack.current++;
    }, [validateWithoutCallBack]);

    // With callBack

    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithoutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render withoutCallBack: {withoutCallBack.current}</p>
            <p>Render withCallBack: {withCallBack.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
