import React from "react";
import Emoji from "./Emoji";
import emojipedias from "../emojipedia";

function smile(emo){
    return (
        <Emoji key={emo.id} id={emo.id} emoji={emo.emoji} name={emo.name} meaning={emo.meaning} />);
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedias.map(smile)}
            </dl>
        </div>
    );
}

export default App;
