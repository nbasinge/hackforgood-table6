import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Button, Jumbotron} from 'react-bootstrap'
import { Storage } from 'aws-amplify';

function MyDropzone() {
  // const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  // }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const onDrop = useCallback(acceptedFiles => {
    Storage.put('test.txt', 'Private Content', {
      level: 'private',
      contentType: 'text/plain'
    })
      .then (result => console.log(result))
      .catch(err => console.log(err));
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
    }
    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div>
      <Jumbotron>
        <h1>Upload Image!</h1>
        <input {...getInputProps()} />
      </Jumbotron>
      <div {...getRootProps()}>

        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    </div>
  )
}

export default MyDropzone

