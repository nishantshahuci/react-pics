// import React
import React, { Component } from 'react';

// ImageCard component
class ImageCard extends Component {
    render() {
        const {description, urls} = this.props.image;
        return (
            <div>
                <img alt={description} src={urls.regular}/>
            </div>
        )
    }
}

// export component
export default ImageCard;
