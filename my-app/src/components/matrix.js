import { useState } from 'react';

function MatrixInputSize(e){
    <input
  type="number"
  defaultValue={2}
  onChange={e => {
    const rows = parseInt(e.target.value)
    // if we only want matrix of size between 2 and 8
    if (2 <= rows && rows <= 8) {
      setMatrixSize(prevSize => ({
        ...prevSize,
        rows: rows,
      }))
    }
  }}
/>
}

function MyMatrix(){
    const [matrixSize, setMatrixSize] = useState({
        rows: 2,
        columns: 2,
      })
    const [matrix, setMatrix] = useState([[0, 0], [0, 0]])
    
    <MatrixInputSize setMatrixSize={object => setMatrixSize(object)} />

}