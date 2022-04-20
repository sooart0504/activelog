import React, {useState} from "react";
import { format } from "date-fns";
import './EntryForm.css';


function EntryForm(props) {

    const {input, setInput, entries, setEntries, level, setLevel, time, setTime, progress, setProgress} = props;

    // Updates the user input value
    const updateInput = (e) => {
        let current_input = e.target.value;
        let raw_time = new Date();
        let formatted_time = format(raw_time, "MMMM do yyyy, h:mm a").toString();

        setInput({input_value: current_input, input_time: formatted_time});
    }

    // Updates the list of user logs with the new input value added
    const updateArray = (input) => {
        setLevel(level + 1);
        setProgress(progress + 5);

        setEntries((existingEntries) => {
            //existingEntries automatically calls entries
            return [input, ...existingEntries];
        })
    }

    const resetInput = () => {
        setInput({input_value: "", input_time: ""});
    }

    return (
        <div className="entry-form" >
            <input id="input-box" type="textarea" value={input.input_value} placeholder="Describe your exercise" className="form-input" onChange={updateInput}/>
            <button
                className="form-button"
                onClick={() => {
                    updateArray(input)
                    resetInput()
                }}>Add Exercise</button>
        </div>
    )
}

export default EntryForm;