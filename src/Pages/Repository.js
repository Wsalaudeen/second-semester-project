import React from "react";
import { useEffect, useState } from "react";
import Profiles from "../components/Profiles";
import Pagination from "../components/Pagination";
import { PageUsers } from "../components/PageUsers";
import Navigation from "../components/navigation";
import gifLoading from "../images/gifLoading.gif";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const URL = "https://api.github.com/users/Wsalaudeen/repos";

    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      setTotalPages(Math.ceil(data.length / PageUsers));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <div className="home-container">
        <Navigation />
        <div className="loader">
          {loading ? (
            <img src={gifLoading} alt="" />
          ) : (
            <div>
              <h1 className="title">Salaudeen olanrewaju's GitHub Repos</h1>

              <p className="pages">
                Page {page} of [{totalPages}]
              </p>
              <hr />
              <Profiles repos={repos} page={page} id={repos.name} />
            </div>
          )}

          <Pagination
            totalPages={totalPages}
            handlePrev={handlePrev}
            handleClick={handleClick}
            handleNext={handleNext}
            disabledPrev={page <= 1}
            disabledNext={page >= totalPages}
          />
        </div>
      </div>
    </>
  );
};
export default Repos;
