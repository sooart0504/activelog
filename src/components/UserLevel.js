import React, {useState} from "react";

function UserLevel(props) {
    const {rank, setRank} = props;

    return (
        <div>
            User Activity Level: {rank}
        </div>
    )
}

export default UserLevel;