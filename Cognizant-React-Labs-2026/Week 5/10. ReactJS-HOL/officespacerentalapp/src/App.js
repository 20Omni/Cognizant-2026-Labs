import "./App.css";

function App() {
  const element = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
    },
    {
      Name: "Regus",
      Rent: 65000,
      Address: "Bangalore",
      Image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600",
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad",
      Image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
    },
  ];

  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>{element}, at Affordable Range</h1>

      {officeList.map((item, index) => (
        <div key={index}>
          <img
            src={item.Image}
            alt="Office Space"
            width="25%"
            height="25%"
          />

          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <br />
        </div>
      ))}
    </div>
  );
}

export default App;