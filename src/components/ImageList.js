// import React
import React from 'react';

// import css
import './ImageList.css';

// import ImageCard
import ImageCard from './ImageCard';

// ImageList component
const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard image={image} key={image.id}/>;
    });

    return <div className="image-list">{images}</div>;
}

// export component
export default ImageList;
