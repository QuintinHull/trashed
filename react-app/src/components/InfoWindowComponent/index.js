import React from "react"
// import {NavLink} from "react-router-dom"

const InfoWindowComponent = ({selectedArea}) => {
    
    const iconPath = process.env.NODE_ENV === "production" ? "/static" : "";

    return (
        <div className="info_window_body">
            <div className="info_window_col1">
                <img src={`${iconPath}/simpleLogo.svg`} alt="trashed logo"></img>
            </div>
            <div className="info_window_col2">
                <div className="i_w_col2_row1">
                    <div>{selectedArea.address}</div>
                </div>
                <div className="i_w_col2_row2">
                    <div><span>reported on: </span>{selectedArea.created_at}</div>
                </div>
                <div className="i_w_col2_row3">
                    <div><span>reported by: </span>{selectedArea.first_name} {selectedArea.last_name}</div>
                    <a className="info_window_link" href={`/area/${selectedArea.id}`}>details</a>
                </div>
            </div>
        </div>
    )
}

export default InfoWindowComponent;