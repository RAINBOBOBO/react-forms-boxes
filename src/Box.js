import React from 'react';

/** Box
 * 
 *  Props:
 *  - backgroundColor: string
 *  - width: number
 *  - height: number
 *  - remove: function that removes the box from BoxList
 *  - id: unique and stable id
 * 
 *  BoxList -> Box
 */
function Box({backgroundColor, width, height, remove, id}) {

  function handleRemove(evt) {
    remove(id);
  }

  // good place to add "px"
  const style = {
    backgroundColor: backgroundColor,
    width: width,
    height: height
  }

  return (
    <div>
      <div style={style}></div>
      <button onClick={handleRemove}>X</button>
    </div>
  )
}

export default Box;