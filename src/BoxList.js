import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

/** BoxList
 * 
 *  State:
 *  - boxes: array of objects containing box props like [{backgroundColor, width, height, id}]
 * 
 *  App -> BoxList -> Box, NewBoxForm
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function remove(id) {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => 
        <Box 
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          id={box.id}
          key={box.id}
          remove={remove}
        />
      )}

    </div>
  )

}

export default BoxList;