import React, { PureComponent } from 'react';
// import Logo from './Logo';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            notificaionOpen: false,
            profileOpen: false,
        }
    }
    isLoggedIn = () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false
        } else { return true; }
    }

    // logout
    handleLogOut = () => {
        this.setState({ loaderOpen: true })
        localStorage.removeItem('accessToken');
        // let token = localStorage.getItem('accessToken')
        // logoutUser(token)
        //     .then(res => {
        //         localStorage.removeItem('accessToken');
        //         localStorage.removeItem('planId');
        //         self.setState({redirect: true, loaderOpen: false})
        //     })
    }

    // notification dropdown
    notificaionDropdownToggle = () => {
        this.setState(prevState => ({
            notificaionOpen: !prevState.notificaionOpen
        }));
    }

    // profile dropdown
    profileDropdownToggle = () => {
        this.setState(prevState => ({
            profileOpen: !prevState.profileOpen
        }));
    }


    render() {
        // if (!this.isLoggedIn()) {
        //     return <Redirect push to="/home" />
        // }
        return (
            <header className="header">
                <div>Auth Header</div>
            </header>
        );
    }
}

export default Header;