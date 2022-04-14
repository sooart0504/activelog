import React, {useState} from "react";

function UserLevel(props) {
    const {level, setLevel} = props;

    return (
        <div>
            User Level: {level}
        </div>
    )
}

export default UserLevel;