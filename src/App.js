import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error404";
import Repos from "./Pages/Repository";
import SingleRepo from "./components/SingleRepo";
import TestError from "./components/Testerror";
import ErrorBoundary from "./Pages/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <section>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/error404" element={<Error />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/repos/:userId" element={<SingleRepo />} />
          <Route path="/testerror" element={<TestError />} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;
