const Person = ({ names, age, hobbies }) => {
  let vote;
  if (age >= 18) {
    vote = "Please go vote!";
  } else {
    vote = "You must be 18 to vote!";
  }
  const hobbiesLI = hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <span>
      <p>Learn some information about this person</p>
      <div>Name: {names.slice(0, 6)}</div>
      <div>Age: {age}</div>
      <h3>{vote}</h3>
      <span>
        <b>Hobbies:</b>
        <ul>{hobbiesLI}</ul>
      </span>
      <button className="Btn btn-lg">Click Me</button>
      <hr />
    </span>
  );
};
