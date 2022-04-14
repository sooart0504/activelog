import React from "react";
import './App.css';
import EntryList from "./components/EntryList";
import UserLevel from "./components/UserLevel";
import EntryForm from "./components/EntryForm";
import {useState} from "react";


function App() {
    const [level, setLevel] = useState("Novice");
    const [input, setInput] = useState("");
    const [entries, setEntries] = useState(["walking", "yoga", "swimming"]);
    const [reset, setReset] = useState("False");

    function deleteEntryitem (indexNum) {
        let newArray = entries;

        newArray.splice(indexNum, 1)

        setEntries(() => {
            // newArray = existingValue.splice(indexNum, 1)
            return newArray;
        })
    }

    function presentEntries () {
        console.log(entries)
        let entriesList = [];

        // entriesList.push(<ul>);
        entries.map((entry, i) => {

            entriesList.push(<li key={i}>{entry} <button>Edit</button> <button onClick={() => {deleteEntryitem(i)}}>Delete</button></li>)
        })


        return entriesList;
    }

  return (
    <>
      <div className="activelog-app">
        <h1>Activelog App</h1>
          {/* User Level: {level} */}
          <UserLevel level={level} setLevel={setLevel} />
          <EntryList entries={entries} setEntries={setEntries} />
          <EntryForm input={input} setInput={setInput} entries={entries} setEntries={setEntries} />
          {/*{input}*/}
          {presentEntries()}
          {/*{entries}*/}
      </div>
    </>
  );
}

export default App;
