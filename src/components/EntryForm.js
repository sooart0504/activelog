import React, {useState} from "react";

function EntryForm(props) {

    const {input, setInput, entries, setEntries, level, setLevel, time, setTime} = props;

    // Updates the user input value
    const updateInput = (e) => {
        let current_input = e.target.value;
        let current_time = new Date().toString();
        setInput({input_value: current_input, input_time: current_time});

        console.log(current_input);
    }
    // const updateInput = (e) => {
    //     setInput(e.target.value);
    // }

    // Updates the list of user logs with the new input value added
    const updateArray = (inputs) => {
        setLevel(level + 1);

        setEntries((existingEntries) => {
            //existingEntries automatically calls entries
            return [inputs, ...existingEntries];
        })

        console.log(entries);
    }

    return (
        <div className="entry-form">
            <input type="text" value={input} placeholder="Describe your exercise" className="form-input" onChange={updateInput}/>
            <button className="form-button" onClick={() => {updateArray(input)}}>Add Exercise</button>
        </div>
    )
}

export default EntryForm;