import React, {useState} from "react";
import EntryForm from "./EntryForm";
import LogEntry from "./LogEntry";

function EntryList(props) {
    const {entries, setEntries} = props;

    // const addEntry = (entry) => {
    //     // Updates the entries list including the new entry
    //     const newEntry = [entry, ...entries];
    //     setEntries(newEntry);
    //
    //     console.log(...entries);
    //
    //     props.onSubmit({
    //         id: Math.floor(Math.random() * 100000),
    //         value: input
    //     });
    //
    //     setInput("");
    // }
    //
    // const ActivateReset = () => {
    //     setReset("True");
    // }
    //
    // const ResetChecker = (bool) => {
    //     if(bool == "True") {
    //         // TODO: Delete all entries and return UserLevel to default
    //
    //         // Set reset back to false
    //         setReset("False");
    //     }
    // }

    return (
        <div>
            {/*{entries}*/}
            {/*<EntryForm onSubmit={addEntry} />*/}
            {/*<LogEntry entries={entries} />*/}

            {/*<button className="reset-button" onClick={ActivateReset}>Reset User Data</button>*/}
        </div>
    )
}

export default EntryList;