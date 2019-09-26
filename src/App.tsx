import * as React from "react";

export default class App extends React.Component<{}, {}> {
    state = {
        currentPiece: "X"
    }

    render() {
        return renderPlayer(this.state.currentPiece);
    }
}

export const renderPlayer = (piece: string) => {
    return <h1>Hello Player {piece}!</h1>;
}