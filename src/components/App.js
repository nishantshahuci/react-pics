// import third party packages
import React, { Component } from 'react';
import axios from 'axios';

// import components
import SearchBar from './SearchBar';

// App component
class App extends Component {

    state = {
        images: []
    };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID ee9ec586465abec23382f90c74a5ee5b65229cace6881716f33c593728c93f08'
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

// export component
export default App;
