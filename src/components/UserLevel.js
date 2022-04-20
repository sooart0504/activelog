import React, {useEffect, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';


function UserLevel(props) {
    const {rank, setRank, progress, setProgress} = props;
    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    useEffect(() => {
        if (rank !== "Novice 🏃") {
            setShowToast(true);
        } else {
            setShowToast(false);
        }
    }, [rank]);

    return (
        <div className="user-progress">
            <div>User Activity Level: {rank} </div>
            <Toast show={showToast} onClose={toggleToast}>
                <Toast.Header>
                    {/*<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />*/}
                    <strong className="me-auto">ActiveLog</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>Your activity level is now: {rank}. Keep it up!</Toast.Body>
            </Toast>
            <div>Progress to Master: <ProgressBar animated now={progress} label={`${progress}%`} /></div>
        </div>
    )
}

export default UserLevel;