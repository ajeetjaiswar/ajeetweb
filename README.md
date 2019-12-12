### clone the project
git clone https://gitlab.com/mdsalman/kool.git

### once the project will be cloned
npm install

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000]


### `npm run eject`
This command will remove the single build dependency from your project.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Structure of the project
app.js

### state management redux
    store


### project assets like images, icons, fonts, styles
    assets
        fonts
        images
        stylesheet
            _variable.scss     //all the color constant are present in variable
            _base.scss         //all the basic style and default style of tags are present 
            _mixins.scss       //all the function of style are present 
            _style.scss        //customize style of the web app
    
### all the ui part goes here
    view

### keep all the static data
        data
            json


### All the Ui Component are here and split into 3 part AUTH, COMMON, MAIN
        components

### authentication components
            auth
                login
                signup
                signin
                forgot_password

### common components
            common
                badge
                buttons
                form
                    checkbox
                    inputBox
                    Radio
                    textArea
                search
                popup
                contentWrapper
                    card header
                        profile image
                        profile detail
                        post action
                    resources
                        image/video collage
                            image
                            video
                        text
                        tags
                        links
                        aminities
                            like
                            share
                            comments
                            bookmark
                        reply(comments ans answer)
                            comment header
                            aminities
                                like
                                comment
                                time
                        profile
                        search
                        popup
                        contentWrapper
                        main
                             home screen
                             ask & answer
                             etc
            
### website static component like HEADER, FOOTER, LEFTSIDEBAR, RIGHTSIDEBAR, CONTENTWRAPPER, PORTAL
        layout
            default_layout
                contentWrapper      
                footer
                header
                leftSidebar
                rightRidebar 
            portal   
                


                

