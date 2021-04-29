import "./App.css";
import AlertWarning from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import Home from "./components/Home";
import items from "./history.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AlertWarning title="Alert" />
      <MyBadge text="This is some text" color="secondary" />
      <SingleBook book={items[0]} />
      <BookList books={items} />
      <Home />
    </div>
  );
}

export default App;
