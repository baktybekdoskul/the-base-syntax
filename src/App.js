import React, {useState} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

const App = props => {
    const [usernameState, setUsernameState] = useState('Berik');
    const torehan = 'Torehan';
    const usernameHandler = (event) => {
        setUsernameState(event.target.value);
    }


    return (
        <div className="App">
            <UserOutput username={usernameState}/>
            <UserOutput username={torehan}/>
            <UserInput usernameChange={usernameHandler} username={usernameState}/>
        </div>
    );
}

export default App;
