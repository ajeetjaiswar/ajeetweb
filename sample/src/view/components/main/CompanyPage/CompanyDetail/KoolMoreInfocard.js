import React from 'react';
import {
    DelhiIcon,
    MumbaiIcon,
    PuneIcon,
    ChennaiIcon,
    HydrabdadIcon,
    BangloreIcon,
    DefaultLocation
} from '../../../../../assets/images';

var locationDict = {
    "hyderabad": HydrabdadIcon,
    "mumbai": MumbaiIcon,
    "chennai": ChennaiIcon,
    "pune": PuneIcon,
    "new delhi": DelhiIcon,
    "bengaluru": BangloreIcon
}

const renderOfficeLost = (officeList = []) => {
    return officeList.map((data, index) => {
        return (
            <div className="col-md-3 mb-4 col-6">
                <img src={locationDict[data.toLowerCase()] ? locationDict[data.toLowerCase()] : DefaultLocation} className="location-pic d-flex justify-content-center" alt="office-icon"/>
                <span className="d-flex justify-content-center mt-2">
                    <h4>{data}</h4>
                </span>
            </div>
        )
    })
}


const KoolMoreInfocard = (props) => {
    let { data } = props;
    return (
        <div>

            {data.benefits && <div className="companyscore-wrapper">

                <div className="koolscore-header">
                    <h3>Benefit</h3>
                </div>
                <div className="more-info-wrapper d-flex">
                    <div className="para-content">
                        <p>
                            Development interventions focus heavily on experience-based development.
                            We believe in developing 70% of the skill through on-the-job assignments
                    </p>
                    </div>
                    <img src={'https://picsum.photos/200/300'} className="moreinfo-image" alt="more-info"/>

                </div>
            </div>}

            {data.whatMakesUsDifferent && <div className="companyscore-wrapper">
                <div className="koolscore-header">
                    <h3>What Makes US Different?</h3>
                </div>
                <div className="more-info-wrapper d-flex">
                    <div className="para-content">
                        <p>
                            Marico offers employees the freedom to experiment.
                            They offer the freedom to create one's own career path instead of following a pre determined course.
                        </p>
                    </div>
                    <img src={'https://picsum.photos/200/300'} className="moreinfo-image" alt="more-info"/>

                </div>

            </div>}

            {
                data.otherlocations && data.otherlocations.length > 0 ?
                    <div className="companyscore-wrapper">
                        <div className="koolscore-header mb-4">
                            <h3>Offices</h3>
                        </div>
                        <div className="row">
                            {renderOfficeLost(data.otherlocations)}
                        </div>
                    </div>
                    :
                    null
            }
            <div style={{ marginTop: '30px' }}>
                <p className='contact-to-add-info'>
                    If you want to add/change any details on this page,

                </p>
                <p className='contact-to-add-info'>
                    Write to us at <a className='mail-to-kk active' href="mailto:care@koolkanya.com">
                        care@koolkanya.com
                 </a>
                </p>
            </div>
        </div>
    );
};

export default KoolMoreInfocard;
