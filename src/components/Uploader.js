import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Button, Jumbotron} from 'react-bootstrap'
import { Storage } from 'aws-amplify'
import ConvertTiff from 'tiff-to-png'
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
class S3ImageUpload extends React.Component {
  onChange(e) {
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
        console.log(result)}
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <input
        type="file" accept='image/tif'
        onChange={(e) => this.onChange(e)}
      />
    )
  }
}
export default S3ImageUpload

