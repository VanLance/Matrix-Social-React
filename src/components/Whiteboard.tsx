import { useState } from 'react'

export default function Whiteboard() {
  
  const [whiteboardStudent, setWhiteboardStudent] = useState('porter');
  console.log(whiteboardStudent)

  const students = [
    'tim',
    'porter',
    'lyla',
    'toby',
    'raul',
    'josh',
    'milad',
    'tom',
    'senait',
    'mabel',
    'mel',
    'heather',
  ];


  return (
    <>
      <h3>Whiteboard</h3>
      <button
        onClick={() => {
          const studentIndex = Math.floor(Math.random() * students.length);
          setWhiteboardStudent(students[studentIndex]);
          // console.log(whiteboardStudent) state updates are stored until rerender 
        }}
      >
        Select Student
      </button>
      <p>Today's whiteboard was performed by {whiteboardStudent}</p>
    </>
  );
}
