// import third party packages
import React, { Component } from 'react';

// import components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// import api files
import unsplash from '../api/unsplash';

// App component
class App extends Component {

    state = {
        images: []
    };

    onSearchSubmit = async term => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

// export component
export default App;
