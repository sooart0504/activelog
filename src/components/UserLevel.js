import React, {useEffect, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';
import './UserLevel.css';


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
            <div className="rank-name">User Activity Level: {rank} </div>
            <div className="progress-to-master">Progress to Master: <ProgressBar className="progress-bar-only" animated now={progress} label={`${progress}%`} /></div>
            <Toast className="rank-toast" show={showToast} onClose={toggleToast}>
                <Toast.Header>
                    <strong className="me-auto">ActiveLog</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>Your activity level is now: {rank}. Keep it up!</Toast.Body>
            </Toast>
        </div>
    )
}

export default UserLevel;