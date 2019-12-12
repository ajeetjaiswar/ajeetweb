import React from 'react';

export const KoolAlert = (props) => {
    let { alertVisible, alertType, label } = props;
    if (alertVisible) {
        return (
            <div className={alertType == 1 ? "koolSuccessAlert m-2" : "koolFailureAlert m-2"}>
                <span className="mr-3 ">
                    {alertType == 1 ? <img
                        src={require("../../../assets/images/icons/successIcon.png")}
                        style={{ height: '20px', width: '20px' }}
                        alt='success'
                    /> :
                        <img
                            src={require("../../../assets/images/icons/alert.png")}
                            style={{ height: '20px', width: '20px' }} 
                            alt="error"
                            />}
                </span>
                <span>
                    {label}
                </span>
            </div>
        )
    } else {
        return <div className="m-3" />;
    }
}
