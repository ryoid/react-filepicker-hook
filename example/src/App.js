import React from 'react'

import { useFilePicker } from 'react-filepicker-hook'

const loadFile = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()

  reader.onload = (e) => {
    resolve(e.target?.result?.toString?.())
  }

  reader.onerror = (e) => {
    console.log(e)
    reject(new Error('Failed to load file.'))
  }

  reader.readAsDataURL(file)
})

const App = () => {
  const [images, setImages] = React.useState([])
  const { files, showFilePicker, errors, FileInput } = useFilePicker({
    minSize: 1000000000
  })

  React.useEffect(() => {
    const loadFiles = async (_files) => {
      console.log('files', _files);

      if (_files.length > 0) {
        const data = await Promise.all(_files.map(loadFile))
        setImages(data)
      }
    }
    loadFiles(files)
  }, [files])

  return (
    <div>
      <button onClick={showFilePicker}>Show FileInput</button>
      <FileInput accept="image/*" multiple />
      <div>
        {errors.map(error => JSON.stringify(error))}
      </div>
      <div>
        {images.map((file, i) => (
          <img src={file} key={i} alt={`file-${i}`} />
        ))}
      </div>
    </div>
  )
}
export default App
