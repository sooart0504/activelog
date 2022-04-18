import { useState, useEffect} from "react";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

import UserLevel from "./components/UserLevel";
import EntryForm from "./components/EntryForm";


function App() {
    const [level, setLevel] = useState(0);
    const [rank, setRank] = useState("");
    const [input, setInput] = useState({input_value: "", input_time: ""});
    // const [input, setInput] = useState("");
    const [entries, setEntries] = useState([]);
    const [reset, setReset] = useState("False");
    const [time, setTime] = useState("");

    // Update the list of user logs with the chosen log removed
    function deleteEntryitem (indexNum) {
        let newArray = entries;
        newArray.splice(indexNum, 1)

        setLevel(level - 1);

        return setEntries([...newArray]);
    }

    // Display the list of user logs in a card (bootstrap)
    function presentEntries () {
        let entriesList = [];

        entries.map((entry, i) => {
            const currentTime = new Date().toString();

            entriesList.push(
                <div className="card-container" key={i}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{entry.time_value}</Card.Title>
                            <Card.Text>{entry.input_value}</Card.Text>
                            {/*<Card.Title>{currentTime}</Card.Title>*/}
                            {/*<Card.Text>{entry}</Card.Text>*/}
                            <Button onClick={() => {}}><MdEdit /></Button> <Button onClick={() => {deleteEntryitem(i)}}><MdDelete /></Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })

        return entriesList;
    }

    function resetData () {
        return
    }

    useEffect(() => {
        if (level <= 3) {
            setRank("Novice");
        } else if (3 < level && level <= 8) {
            setRank("Beginner");
        } else if (8 < level && level <= 13) {
            setRank("Intermediate");
        } else if (13 < level && level <= 19) {
            setRank("Advanced");
        } else if (19 < level && level <= 26) {
            setRank("Expert");
        } else {
            setRank("Master");
        }
    }, [level]);

  return (
      <div className="activelog-app">
        <h1>Activelog App</h1>

          {/* User Level: {level} */}
          <UserLevel rank={rank} setRank={setRank} />

          {/*<EntryList entries={entries} setEntries={setEntries} />*/}

          {/* Display input box and Add button */}
          <EntryForm input={input} setInput={setInput} entries={entries} setEntries={setEntries} level={level} setLevel={setLevel} time={time} setTime={setTime} />

          {/* Display button for Resetting user data */}
          <button onClick={resetData()}>Reset User Data</button>

          {/* Display the list of all logs saved */}
          {presentEntries()}
      </div>
  );
}

export default App;
