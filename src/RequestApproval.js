import React from 'react'
import "./App.css"

function RequestApproval(appts) {
    return (
        <>
            <h2>Request Approval</h2>
            <hr/>
            <div>
                <div className="approval__list__element">
                    <h4>Diane Cooper</h4>
                    <p>1.30 pm - 2.30 pm</p>
                    <button className="accept__button">Accept</button>
                    <button className="reject__button">Reject</button>
                </div>
                <div className="approval__list__element">
                    <h4>Leslie Penarra</h4>
                    <p>8.00 pm - 9.00 pm</p>
                    <button className="accept__button">Accept</button>
                    <button className="reject__button">Reject</button>
                </div>
            </div>
        </>
    )
}

export default RequestApproval
