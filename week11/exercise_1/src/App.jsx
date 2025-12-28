import "./App.css";

function SimpleCard({ title, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <h2>THis is my newly added Footer again!! 😁</h2>
      </footer>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SimpleCard title="Hello Card!" content="This is my first card ever!" />
      <Footer />
    </div>
  );
}

export default App;
