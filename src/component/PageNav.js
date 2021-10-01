import React from 'react'
import {Link} from 'react-router-dom'

function PageNav({page_name}) {
    return (
        <div className="page_nav">
            <div className="page_nav_image">
               <h1 className="page_name_win">{page_name}</h1>
              
            </div>
            <div className="page_name_mobile">
            <h1 className="">{page_name}</h1>
            </div>
            <div className="page_nav_content">
                <div className="page_nav_content_inner">
                <h2><Link to="/" >Home</Link><span className="page_name_icon"><i className="fas fa-arrow-right"></i></span><span >{page_name}</span></h2>
                </div>
            </div>
            
        </div>
    )
}

export default PageNav
