import React from 'react'
import PageNav from './PageNav'

function PageLayout({children, page_name}) {
    return (
        <div className="page_layout">
            <PageNav page_name={page_name}/>
            <h2>Content coming soon</h2>
            {children}
        </div>
    )
}

export default PageLayout
