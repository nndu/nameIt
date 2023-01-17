import React from "react";
import './app.css';
import Header from "./Header/Header";
import ResultsContainer from "./ResultsContainer/ResultsContainer.jsx";
import SearchBox from "./SearchBox/SearchBox";

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name it!',
            headerExpanded: true,
            suggestedNames: []
        };
    }
    handelInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],

        });
    }

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handelInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;