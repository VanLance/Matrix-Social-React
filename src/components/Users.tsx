export default function Users() {
  const users = { };

  return (
    <>
      {Object.keys(users).length > 0 && (
        <>
          <h3>Users: </h3>
          <>
            {Object.keys(users).map((user: string, i: number) => (
              <p key={i}>{user}</p>
            ))}
          </>
        </>
      )}
    </>
  );
}
