import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from '../../layout/defaultLayout/footer/Footer';
import Headings from '../common/Headings/Headings/Headings';
import { fetchPowerReads } from '../../../actions/ArticlesAction';
import ReactHtmlParser from 'react-html-parser';
import RouterConstants from '../../../constants/routerConstants';

class PageNotFound extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPowerReads());
    }

    goToHome = () => {
        this.props.history.push(RouterConstants.landing)
    }

    render() {
        let powerReads = this.props.article.items.powerReads ? this.props.article.items.powerReads.Trending.slice(0, 3).map(
            (element, index) => {
                let media = this.props.article.items.powerReads.Media.find(o => o.id === element.featured_media);
                let catidslist = this.props.article.items.powerReads.Categories.map(e => { return e.id });
                let catid = (element.categories).filter(function (obj) { return catidslist.indexOf(obj) !== -1; });
                let catObj = this.props.article.items.powerReads.Categories.find(o => o.id === catid[0]);
                let catname = catObj ? catObj.name : '';
                var today = new Date(Date.parse(element.date)).toLocaleDateString('en-GB', {
                    month: 'short',
                    day: 'numeric',
                });
                let articleUrl = window.location.href;
                articleUrl = element.link
                return (
                    <div className="col-md-4" key={index}>
                        <a href={articleUrl} target="_blank">
                            <div className="landing-card">
                                <div className="image-wrapper">
                                    <img src={media ? media.mediadetails.td_265x198 ? media.mediadetails.td_265x198.source_url : media.sourceurlImage ? media.sourceurlImage : null : null} alt="img" />
                                </div>
                                <Headings
                                    HeadingClass="landing-card-header"
                                    tagName="h3"
                                    head={catname}
                                    description={ReactHtmlParser(element.title)}
                                    readingTime={true}
                                    date={today}
                                    timeToRead={element.readingTime}
                                />
                            </div>
                        </a>
                    </div>)
            }
        ) : null;
        return (
            <div className="page-not-found">

                <div className='page-not-found-404'>
                    <div className="container">
                        <div className="Header-404">
                            404
                        </div>
                        <div className="Description-404">
                            "Oops! The page you’re looking for doesn’t exist.
                        </div>
                        <div className="button-row-404">
                            <button className="button-404" onClick={this.goToHome}>
                                Back Home
                        </button>
                        </div>
                    </div>

                </div>
                <div className='power-reads-404'>
                    <div className="container">
                        <div className="row">
                            {powerReads}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        );
    }
}
const mapStateToProps = state => ({
    article: state.articleReducer
});

export default connect(mapStateToProps)(PageNotFound);
