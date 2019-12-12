import React, { Component } from 'react';
import { WrapperCard, PageHeading, } from '../../common';
import { feed } from '../../../data/feed';
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { createPost } from "../../../../services/postServices";
import { Loader } from "../../../../assets/SvgIcon";
import ReactPlayer from "react-player";
import { random, slice } from "lodash"
import {hashify, urlify} from "../../../../helpers/helperFunction";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: feed,
            imagePath: '',
            docPreview: "",
            assets: [],
            loader: false,
            responseMessage: "",
            caption: "",
            real_Content: "",
            imageData: [],
            videoData: [],
        }
    }

    renderCard() {
        let feedLen = this.state.feed.length;
        let first = random(1, feedLen);
        let second = random(1, feedLen);
        if (first === second) {
            let firstData = slice(this.state.feed, 0, first);
            let secondData = slice(this.state.feed, first, feedLen + 1);
            let firstView = firstData.map((feed, key) => {
                // console.log('feedData----------->', feed)
                return (
                    <WrapperCard data={feed} dataKey={key} />
                )
            })
            let mobileTalkToKoolkanya = <p>heello</p>
            let mobilePopularQuestion = <p>heello2</p>
            let secondView = secondData.map((feed, key) => {
                // console.log('feedData----------->', feed)
                return (
                    <WrapperCard data={feed} dataKey={key} />
                )
            })
            return (
                <>
                    {firstView}
                    {mobileTalkToKoolkanya}
                    {mobilePopularQuestion}
                    {secondView}
                </>
            )
        } else {
            let firstData = slice(this.state.feed, 0, first);
            let secondData = slice(this.state.feed, first, second);
            let thirdData = slice(this.state.feed, second, feedLen + 1);
            let firstView = firstData.map((feed, key) => {
                // console.log('feedData----------->', feed)
                return (
                    <WrapperCard data={feed} dataKey={key} />
                )
            })
            let mobileTalkToKoolkanya = <p>Talk to Koolkanya</p>
            let mobilePopularQuestion = <p>Popular Question</p>
            let secondView = secondData.map((feed, key) => {
                // console.log('feedData----------->', feed)
                return (
                    <WrapperCard data={feed} dataKey={key} />
                )
            })
            let thirdView = thirdData.map((feed, key) => {
                // console.log('feedData----------->', feed)
                return (
                    <WrapperCard data={feed} dataKey={key} />
                )
            })
            return (
                <>
                    {firstView}
                    {mobileTalkToKoolkanya}
                    {secondView}
                    {mobilePopularQuestion}
                    {thirdView}
                </>
            )
        }
    }

    // handleChange = (e) => {
    //     const files = e.target.files
    //     const CLOUDINARY_UPLOAD_PRESET = 'fxhamlup'
    //     let resource_type = ""
    //     const formData = new FormData();


    //     for (let count = 0; count < files.length; count++) {
    //         formData.append('file', files[count]);
    //         console.log("path images", files)
    //         //this.setState({imagePath: e.target.files[0]})
    //         console.log(files[count].type, "amake amr moto thkte dao")
    //         resource_type = files[count].type
    //     }
    //     resource_type = resource_type == "video/mp4" ? 'video' : 'image'
    //     const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/koolkanya/' + resource_type + '/upload';
    //     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    //     //Marks :- data upload to cloudinary

    //     fetch(CLOUDINARY_URL, {
    //         method: 'POST',
    //         body: formData,
    //       })
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log("data contains",data)
    //           if (data.secure_url !== '') {
    //             console.log("data secure url",data.secure_url)
    //             const uploadedFileUrl = data.secure_url;
    //             localStorage.setItem('passportUrl', uploadedFileUrl);
    //             this.setState({imagePath:uploadedFileUrl})
    //           }
    //         })
    //         .catch(err => console.error(err));
    // }

    handleDrop = files => {
        let assets = [];
        let { imageData, videoData } = this.state;
        let imageResource = imageData;
        let videoResource = videoData;

        // Push all the axios request promise into a single array
        this.setState({ assets: files, loader: true })
        const uploaders = files.map(file => {
            let resourcseType = file.type == "video/mp4" ? 'video' : 'image';
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "fxhamlup"); // Replace the preset name with your own
            //formData.append("api_key", "1234567"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post('https://api.cloudinary.com/v1_1/koolkanya/' + resourcseType + '/upload', formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                if (file.type == "video/mp4") {
                    videoResource.push({ url: data.secure_url, meta: data, type: "custom" });
                } else {
                    imageResource.push({url: data.secure_url, meta: data});
                    imageResource.push({ url: data.secure_url, meta: data });

                }
                const fileURL = data.secure_url // You should store this URL for future references in your app
            })
        });

        // Once all the files are uploaded
        axios.all(uploaders).then((response) => {
            this.setState({
                imageData: imageResource,
                videoData: videoResource,
                assets: assets,
                loader: false
            })
            // ... perform after upload is successful operation
            // let data = {
            //     "resource": {
            //         "link": resource,
            //     },
            //     "content": "Let's go to delhi",
            //     "tags": ["mumbai", "delhi"]
            // }

        });
    }

    handlePostClick = () => {
        let { imageData, videoData } = this.state;
        let token = localStorage.getItem('accessToken');

        if (videoData.length > 0 || imageData.length > 0) {
            let newData = {
                "resource": {
                    "link": [],
                    "videoUrl": [videoData],
                    "image": [imageData]
                },
                "content": "testing content",
                "tags": [
                    "mumbai", "delhi"
                ],
                "anonymous": false
            }
            createPost(newData, token).then(response => {
                if (response.data.statusCode == 1) {
                    this.setState({
                        responseMessage: "Post Successfully Created",
                    })

                    setTimeout(() => {

                        // Yay! Can invoke sync or async actions with `dispatch`
                        this.setState({
                            imageData: [],
                            videoData: [],
                            responseMessage: ""
                        })
                    }, 20000);

                } else {
                    this.setState({ responseMessage: response.data.error.errorMessage })
                }
            })
        } else {
            this.setState({ responseMessage: "No file Selected" })

        }
    }

    //
    handleChange = (e) => {
        let value = e.target.value;
        let linkedConttnt = urlify(value);
        let real_Content= hashify(linkedConttnt);

        // var urlRegex = /(https?:\/\/[^\s]+)/g;
        //
        // var hashTag= /#[a-z]+/gi;
        //     //'\\B(\\#[a-zA-Z]+\\b)(?!;)';
        //
        // let links = value.match(urlRegex);
        // let hashtags = value.match(hashTag);

        //Regex.Matches(input, regex);



        this.setState({
            [e.target.name]: value,
            real_Content: real_Content,
        })

    }

    render() {
        let {
            imagePath, docPreview, assets, loader,
            responseMessage, caption, real_Content,
            imageData, videoData
        } = this.state;
        return (
            <div className="content-wrapper">
                <PageHeading
                    tagName="h1"
                    className="heading-wrapper"
                    headingClass="heading"
                    headingText="Discover Koolkanya"
                />
                {loader ? <Loader /> : null}
                <div className="create-post">
                    <div className="card-wrapper">
                        <ul>

                            <form className="uploader" encType="multipart/form-data">
                                <Dropzone
                                    onDrop={this.handleDrop}
                                    onDropRejected={(e) => {
                                        // console.log(e, "dropRejected")
                                    }}
                                    multiple={true}
                                    accept="image/png, image/jpeg,image/jpeg,application/pdf,video/mp4"
                                    onDragEnter={() => {
                                        this.setState({ responseMessage: "" })
                                    }}
                                    onDragLeave={() => {
                                        this.setState({ responseMessage: "" })
                                    }}
                                >
                                    {({ getRootProps }) => (
                                        <div {...getRootProps()}>
                                            <p>Drop files here, or click to select files</p>

                                            {/*<input
                                                type="text"
                                                className="form-control"
                                                placeholder="Say Something"
                                                id={"caption"}
                                                name="caption"
                                                value={caption}
                                                onChange={this.handleChange}
                                            />*/}

                                            <textarea
                                                rows="4" cols="50"
                                                type="text"
                                                className="form-control"
                                                placeholder="Say Something"
                                                id={"caption"}
                                                name="caption"
                                                value={caption}
                                                onChange={this.handleChange}
                                            />

                                           {/* <CKEditor
                                                data="<p>Hello from CKEditor 4!</p>"
                                                className="form-control"
                                                placeholder="Say Something"
                                                id={"caption"}
                                                name="caption"
                                                value={caption}
                                                onChange={this.handleChange}
                                            />*/}


                                        </div>
                                    )}
                                </Dropzone>


                                {videoData.map(function (item, index) {
                                    return (
                                        <ReactPlayer url={item.url}
                                            //light={props.thumbnail}
                                            className="video-wrapper" controls={true} />
                                    )
                                })}
                                {imageData.map(function (item, index) {
                                    return (
                                        <img src={item.url}
                                            style={{ width: '100pt', height: '100pt', margin: '10px' }} />
                                    )
                                })}
                            </form>
                            <br />
                            <span className="custom-alert" style={{ color: "green" }}>{responseMessage}</span>
                            {/* <li>
                            <button className="btn-facebook btn d-flex align-items-center justify-content-center">
                             <span className="d-none d-sm-block">POST</span>
                            </button>
                            </li> */}
                            <span
                                className={'btn-primary-fill'}
                                onClick={this.handlePostClick}>
                                Post
                            </span>

                        </ul>
                    </div>
{/*
                    <span>{real_Content}</span>
*/}

                    <br/><br/><br/>

                </div>
                {this.renderCard()}
            </div>
        );
    }
}

export default Home;
