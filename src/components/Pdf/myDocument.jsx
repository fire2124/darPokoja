import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
 
const ExamplePDFViewer = (url) => {
    return (
        <PDFViewer
            document={{
                url: {url},
            }}
        />
    )
}

export default ExamplePDFViewer
