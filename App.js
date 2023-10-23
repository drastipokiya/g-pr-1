import Product from "./Product";
import Card from "./Card";
import Parent from "./Parent";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Alert from "./Alert";

function App() {
  const navbarTitle = "My Custom Navbar";
  const successMessage = "Operation successful!";
  const warningMessage = "Warning: Something went wrong.";

  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Alice", email: "alice@example.com" },
    { id: 4, name: "Eve", email: "eve@example.com" },
    { id: 5, name: "Charlie", email: "charlie@example.com" },
  ];

  const cardsData = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      imageAlt: "Image 1",
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      imageAlt: "Image 2",
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      imageAlt: "Image 3",
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
  ];

  const carouselId = "myCarousel";
  const slidesData = [
    {
      image:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      alt: "Slide 1",
      title: "Slide 1 Title",
      description: "This is the description for Slide 1.",
    },
    {
      image:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      alt: "Slide 2",
      title: "Slide 2 Title",
      description: "This is the description for Slide 2.",
    },
    {
      image:
        "https://i.pinimg.com/564x/ad/98/6c/ad986cc7a7a54989fe8c656132c0e515.jpg",
      alt: "Slide 3",
      title: "Slide 3 Title",
      description: "This is the description for Slide 3.",
    },
  ];

  return (
    <div>
      <div className="App">
        <ul>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>User Table</h1>
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Parent />
      </div>

      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1>Bootstrap Carousel Example</h1>
        <Carousel id={carouselId} slides={slidesData} />
      </div>
      <div className="container">
        <Navbar title={navbarTitle} />
        <Alert type="success" message={successMessage} />
        <Alert type="warning" message={warningMessage} />
      </div>
    </div>
  );
}

export default App;
