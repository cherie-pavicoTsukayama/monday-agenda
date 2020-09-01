import React from 'react';

function TaskRow (props) {
    console.log('items', props.items);
    if(props === undefined) {
      console.log('no items yet');
    } else {
    const displayItems = props.items.map(item => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.column_values[0].text}</td>
            <td>{item.column_values[1].text}</td>
            <td>{item.column_values[2].text}</td>
          </tr>

        )
    })
    return displayItems;
    }
}

export default TaskRow;
