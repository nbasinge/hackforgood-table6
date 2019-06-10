import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Button, Card, Jumbotron, ProgressBar} from 'react-bootstrap'
import { Storage } from 'aws-amplify'
import ConvertTiff from 'tiff-to-png'
import Caro from "./ViewCells";
import {NavLink} from "react-router-dom";
// import sharp from 'sharp';
// import {decode} from 'tiff';
// const options = {
//   logLevel: 1
// };

// function MyDropzone() {
  // const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  // }, [])
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  // const onDrop = useCallback(acceptedFiles => {
  //   console.log('acceptedFiles', acceptedFiles);
  //   console.log('acceptedFiles.path', acceptedFiles.File);
  //   const data = new Buffer(acceptedFiles, 'binary')

    // acceptedFiles.forEach(file => {
    //   console.log('file',file)
    // }
    // let decodedTiff = tiff.decode(acceptedFiles);
    // console.log('decodedTiff', decodedTiff)

    // Storage.put('test.txt', 'File content', {
    //   progressCallback(progress) {
    //     console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    //   },
    // });
    // Storage.put('MMStack_Pos0.ome.tif', data, {
    //   level: 'private',
    //   contentType: 'image/tif'
    // })
    //   .then (result => console.log(result))
    //   .catch(err => console.log(err));

    // const converter = new ConvertTiff(options);
    // //
    // const tiffs = [
    //   acceptedFiles.path
    // ];
    // const location = '/srv/tmp';
    //
    // converter.convertArray(tiffs, location);
    //
    // const reader = new FileReader()
    // reader.onabort = () => console.log('file reading was aborted')
    // reader.onerror = () => console.log('file reading has failed')
    // reader.onload = () => {
    //   // Do whatever you want with the file contents
    //   const binaryStr = reader.result
    //   console.log(binaryStr)
    // }
    // acceptedFiles.forEach(file => {
    //   reader.readAsBinaryString(file)
    //
    // })
  // }, []);

//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
//   return (
//     <div>
//       <Jumbotron>
//         <h1>Upload Image!</h1>
//         <input {...getInputProps()} />
//       </Jumbotron>
//       <div {...getRootProps()}>
//
//         {
//           isDragActive ?
//             <p>Drop the files here ...</p> :
//             <p>Drag 'n' drop some files here, or click to select files</p>
//         }
//       </div>
//     </div>
//   )
// }
function S3ImageUpload() {
  let [uploading, setUploading] = useState(false)
  let [uploaded, setUploaded] = useState(false)
  const onChange = (e) => {
    setUploading(true)
    const file = e.target.files[0];
    console.log('file',file);
    console.log('file.name',file.name);
    // sharp(file)
    //   .png()
    //   .buffer()
    //   .then((outputBuffer) => {
    //
    //   })

    // const converter = new ConvertTiff(options);
    //
    // let tiffs = [
    //   '/home/tiffs/document_one.tif',
    //   '/home/tiffs/document_two.tif'
    // ];
    // let location = '/srv/www/mysite/public/documents';
    // decode(file).then((res)=>{
    //   console.log('res',res)
    // });
    // converter.convertArray(tiffs, location);
    Storage.put(file.name, file, {
      level: 'private',
      contentType: 'image/tif'
    })
      .then (result => {
          console.log(result)
          setUploading(false)
          setUploaded(true)
          e.target.value = null
        }
        )
      .catch(err => console.log(err));
  }
   return <div>
      <Jumbotron>
      <Card>
        {/*<Card.Img variant="top" src={require('./../images/uploadimage.jpeg')} />*/}
        {!uploaded ? <Card.Body>
          <Card.Title>Upload your image by clicking below</Card.Title>
          <Card.Text>
            With Table 6 Analytics, the power is in your hands.
          </Card.Text>
          <input
            type="file" accept='image/tif'
            onChange={(e) => onChange(e)}
          />
        </Card.Body>
        : <Card.Body>
            <Card.Title>Great! Image was uploaded.</Card.Title>
            <Card.Text>
              Now you can upload another image or view your images.
            </Card.Text>
            <Button onClick={()=>setUploaded(false)} variant="primary">Upload Another Image</Button>
            { ' '}
            or
            <NavLink to="/viewcells"> View Images </NavLink>
          </Card.Body>}
      </Card>
        {uploading && <ProgressBar striped animated variant="success" now={40} />}

      </Jumbotron>
    </div>
}
export default S3ImageUpload

