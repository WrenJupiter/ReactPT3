const App = () => {
  return (
    <div className="div">
      <Person names="Apollo" age={16} hobbies={["art", "poetry", "music"]} />
      <Person
        names="Achilles"
        age={21}
        hobbies={["archery", "playing my lyre", "learning from Chiron"]}
      />
      <Person
        names="Medusa"
        age={500}
        hobbies={["swimming", "revenge", "stone carving"]}
      />
    </div>
  );
};
