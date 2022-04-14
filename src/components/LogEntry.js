import React, {useState} from "react";
import EntryForm from "./EntryForm";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';


const LogEntry = (props) => {
    const {entries, input} = props;

    // return input.map((input) => (
    //     <>
    //         <div key={input.id}>
    //             {input.text}
    //         </div>
    //         <div className="interact-icons">
    //             <MdDelete className="delete-icon" />
    //             {/* onClick={() => removeEntry(entry.id)}*/}
    //             <MdEdit className="edit-icon" />
    //         </div>
    //     </>
    //     )
    // )

}

export default LogEntry;