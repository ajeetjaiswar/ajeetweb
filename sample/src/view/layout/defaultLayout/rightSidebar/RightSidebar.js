import React, { PureComponent } from 'react';
import RSBHead from './RSBCommonCard/RSBHead';
import TalkToKoolKanyaBody from './RSBCommonCard/TalkToKoolKanyaBody';
import PopularQuestionBody from './RSBCommonCard/PopularQuestionBody';
import talkToKoolKanya from '../../../data/talkToKoolkanya';
import popularQuestion from '../../../data/popularQuestion';

class RightSidebar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            talkToKoolKanya: talkToKoolKanya,
            popularQuestion: popularQuestion
        }
    }

    render() {
        return (
            <div className="right-sidebar sticky-top">
                <div className="d-none d-sm-block">
                    <div className="card-wrapper d-block d-sm-">
                        <RSBHead headingText="Talk to koolkanya" />
                        <TalkToKoolKanyaBody talkToKool={this.state.talkToKoolKanya} />
                    </div>
                    <div className="card-wrapper">
                        <RSBHead headingText="Popular Questions" />
                        <PopularQuestionBody popularQuestion={this.state.popularQuestion} />
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSidebar;