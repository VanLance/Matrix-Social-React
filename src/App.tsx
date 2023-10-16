import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";

function App(): JSX.Element {
  const instructors = {
    senior: 'dylan',
    associate: 'sean',
  };

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

  const users = {'user1':{}};

  return (
    <Container>
      <Heading />
      <h3>Instructors</h3>
      <p>Sr: {instructors.senior}</p>
      <p>Associate {instructors['associate']}</p>
      <h4>Students: </h4>
      {students.map((student: string, i: number) => {
        return <p key={i}>{student}</p>;
      })}

      {Object.keys(users).length > 0 && (
        <>
          <h3>Users: </h3>
          {Object.keys(users).map((user:string, i:number) => (
            <p key={i}>{user}</p>
          ))}
        </>
      )}
    </Container>
  );
}

export default App;
