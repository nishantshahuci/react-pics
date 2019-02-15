// import React
import React, { Component } from 'react';

// SearchBar component
class SearchBar extends Component {

    state = {
        term: ''
    };

    onFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

// export component
export default SearchBar;
