import React from 'react';

const KoolCompanyCard = (props) => {
    let {data} = props;
    let {name,about} = data;
    // let gallery=[
    //     {url:"https://picsum.photos/200/300"},
    //     {url:"https://picsum.photos/id/237/200/300"},
    //     {url:"https://picsum.photos/seed/picsum/200/300"},
    //     {url:"https://picsum.photos/200/300"}]
    return (
        <div>
            <div className="companyscore-wrapper">
                <div className="koolscore-header">
                    <h3>
                        About {name}
                    </h3>
                </div>
                <div className="koolabout-body">
                    <p>{about}</p>
                </div>
            </div>

            {/* <div className="companyscore-wrapper">
                <div className="koolscore-header">
                    <h3>Gallery</h3>
                    <div className="row mt-3">
                    {gallery.map(function (item, index) {
                        return (
                            <img src={item.url} className="company-gallery col-6"/>
                            )})
                    }
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default KoolCompanyCard;
