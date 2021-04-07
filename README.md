# react-filepicker-hook

> 

[![NPM](https://img.shields.io/npm/v/react-filepicker-hook.svg)](https://www.npmjs.com/package/react-filepicker-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-filepicker-hook
```

## Usage

```tsx
import React from 'react'

import { useFilePicker } from 'react-filepicker-hook'

const Example = () => {
  const { files, showFilePicker, errors, FileInput } = useFilePicker({
    minSize: 10000 // Size in Bytes
  })

  return (
    <>
      <button onClick={showFilePicker}>Show FileInput</button>
      <FileInput accept="image/*" multiple />
      <div>
        {errors.map(error => JSON.stringify(error))}
      </div>
      <div>
        {files.map(file => JSON.stringify(file.name))}
      </div>
    </>
  )
}
```

## License

MIT © [ryoid](https://github.com/ryoid)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
