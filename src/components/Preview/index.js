import {useState} from 'react'
import './index.css'

function Preview() {
  const [file, setFile] = useState()
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img className="image" src={file} alt="img" />
    </div>
  )
}

export default Preview
