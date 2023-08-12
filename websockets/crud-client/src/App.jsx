import { StudentAdd } from "./components/StudentAdd";
import { StudentList } from "./components/StudentList";

function App() {
  return (
    <section className="container">
      <header className="alert">
        <h4>Services Status</h4>
        <span className="text-success">Online</span>
        <span className="text-danger">Offline</span>

        <h1>Students Node Gen26</h1>
        <hr />
      </header>

      <article className="row">
        <div className="col-8">
          <StudentList />
        </div>
        <div className="col-4">
          <StudentAdd />
        </div>
      </article>
    </section>
  );
}

export default App;
