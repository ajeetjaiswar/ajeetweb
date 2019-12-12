import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GameChanger from '../../Cards/GameChanger/GameChanger';
// responsive breakpoints starts
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        paritialVisibilityGutter: 200,
    },
    largeDesptop: {
        breakpoint: { max: 3000, min: 1920 },
        items: 4,
        paritialVisibilityGutter: 200
    },
    desktop: {
        breakpoint: { max: 1920, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 100
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        paritialVisibilityGutter: 60,

    },
};
// ends

const ReactMultiCarousel = (props) => {
    return (
        <Carousel responsive={responsive}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // infinite={true}
            autoPlaySpeed={2000}
            partialVisbile="right"
            // gutter={20}
            swipeable={true}
            draggable={false}
        // centerMode={true}
        >
            {
                props.data.map((data, key) => {
                    return (
                        <>
                            <GameChanger {...data} key={key} toggleModal={props.toggleModal} />
                        </>
                    )
                })
            }
        </Carousel>
    );
};

export default ReactMultiCarousel;