import { useState, useEffect} from "react";
import { MdAdd } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { v4 as uniqueId } from 'uuid';

import UserLevel from "./components/UserLevel";
import EntryForm from "./components/EntryForm";


function App() {
    const [level, setLevel] = useState(0);
    const [rank, setRank] = useState("");
    const [input, setInput] = useState({input_value: "", input_time: ""});
    const [entries, setEntries] = useState([]);
    const [progress, setProgress] = useState(0);
    const [time, setTime] = useState("");
    const [saved, setSaved] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    // Update the list of user logs with the chosen log removed
    function deleteEntryitem (indexNum) {
        let newArray = entries;
        newArray.splice(indexNum, 1)

        setLevel(level - 1);
        setProgress(progress - 5);

        return setEntries([...newArray]);
    }

    function deleteSaveditem (indexNum) {
        let newArray = saved;
        newArray.splice(indexNum, 1)

        return setSaved([...newArray]);
    }

    function saveExercise (entry) {
        const found = saved.some(ent => ent.input_value === entry.input_value);

        if (!found) {
            let newArray = saved;

            entry.id = uniqueId();

            console.log(entry);

            return setSaved([entry, ...newArray]);
        } else {
            setShowAlert(true);
        }
    }

    function AlertMessage () {
        if (showAlert) {
            return (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>Oh snap! An error occured! </Alert.Heading>
                    <p>
                        You already have a saved exercise under the same description! See under "Saved Exercises" to add this item to your exercise log! :)
                    </p>
                </Alert>
            )
        }
    }

    // Display the list of user logs in a card (bootstrap)
    function presentEntries () {
        let entriesList = [];

        entries.map((entry, i) => {
            entriesList.push(
                <div className="card-container" key={i}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{entry.input_time}</Card.Title>
                            <Card.Text>{entry.input_value}</Card.Text>
                            <Button onClick={() => {saveExercise(entry)}}>Save</Button> <Button onClick={() => {deleteEntryitem(i)}}><MdDelete /></Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })

        return entriesList;
    }

    function presentSaved () {
        let savedList = [];

        saved.map((entry, i) => {
            savedList.push(
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{entry.input_value}</Card.Title>
                            <Card.Text>Exercise created on {entry.input_time}</Card.Text>
                            <Button onClick={() => {addSavedToArray(entry, entry.id)}}><MdAdd /></Button> <Button onClick={() => {deleteSaveditem(i)}}><MdDelete /></Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })

        return savedList;
    }

    const addSavedToArray = (entry) => {
        setLevel(level + 1);
        setProgress(progress + 5);

        setEntries((existingEntries) => {
            //existingEntries automatically calls entries
            return [entry, ...existingEntries];
        })
    }

    const resetData = () => {
        setEntries([]);
        setLevel(0);
    }

    useEffect(() => {
        if (level <= 2) {
            setRank("Novice 🏃");
        } else if (2 < level && level <= 6) {
            setRank("Beginner 🏃🏃");
        } else if (6 < level && level <= 10) {
            setRank("Intermediate 🏃🏃🏃");
        } else if (10 < level && level <= 14) {
            setRank("Advanced 💪");
        } else if (14 < level && level <= 19) {
            setRank("Expert 💪💪");
        } else {
            setRank("Master 💪💪💪");
        }
    }, [level]);

  return (
      <div className="activelog-app">
        <h1>Activelog App</h1>

          {/* User Level: {level} */}
          <UserLevel rank={rank} setRank={setRank} progress={progress} setProgress={setProgress}/>

          {/*<EntryList entries={entries} setEntries={setEntries} />*/}

          {/* Display input box and Add button */}
          <EntryForm input={input} setInput={setInput} entries={entries} setEntries={setEntries} level={level} setLevel={setLevel} time={time} setTime={setTime} progress={progress} setProgress={setProgress}/>

          {AlertMessage()}

          {/* Display the list of all logs saved */}
          {presentEntries()}

          <h2>Saved Exercises</h2>
          {presentSaved()}

          {/* Display button for Resetting user data */}
          <button onClick={() => {resetData()}}>Reset User Data</button>
      </div>
  );
}

export default App;
