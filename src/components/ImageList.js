// import React
import React from 'react';

// ImageList component
const ImageList = (props) => {
    const images = props.images.map(image => {
        return <img src={image.urls.regular} />;
    });

    return <div>{images}</div>;
}

// export component
export default ImageList;
