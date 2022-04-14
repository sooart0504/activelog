import React, {useState} from "react";
import LogEntry from "./LogEntry";

function EntryForm(props) {

    // const [input, setInput] = useState("");
    const {input, setInput, entries, setEntries} = props;

    const updateInput = (e) => {
        setInput(e.target.value);


    }

    const updateArray = (wordinput) => {
        setEntries((existingEntries) => {
            //existingEntries automatically calls entries
            return [wordinput, ...existingEntries];
        })
        // setEntries([input, ...entries])

    }

    return (
        <div className="entry-form">
            <input type="text" value={input} placeholder="Describe your exercise" className="form-input" onChange={updateInput}/>
            <button className="form-button" onClick={() => {updateArray(input)}}>Add Exercise</button>
            {/*<EntryList input={input} setInput={setInput} />*/}
        </div>
    )
}

export default EntryForm;