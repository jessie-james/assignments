import React from 'react'



const Body = () => {
    return (
        <div className="body-container" >
            <div className="course-options" >
                <ul>
                    <li className="courses history">History</li>
                    < li className = "courses science"> Science </li>
                    < li className = "courses english"> English </li>
                    < li className = "courses finance"> Finance </li>
                    < li className = "courses math"> Math </li> 
                </ul>
            </div>
            <div className="basic-Info">
                    <heaer>Find the Right Fit</heaer>
                    <div className="body-img"></div>
                <div className="sub-header-basic-info">Getting help is easier than you think</div>
                
            </div>
                <div className="vr-options">
                    <ul>
                        <li>Rent</li>
                        <li>Buy</li>
                    </ul>
                </div>
        </div>
    )
}

export default Body