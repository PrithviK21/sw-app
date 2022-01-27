import Person from "../components/Person";
import Planet from "../components/Planet";
import Film from "../components/Film";
import Vehicle from "../components/Vehicle";
import Starship from "../components/Starship";
import Species from "../components/Species";
import { MoonLoader } from "react-spinners";
import { useState, useEffect, useContext } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { dataServiceContext } from "../services/GetData";

function Entity({ page }) {
  const [currentIndex, setcurrentIndex] = useState(0); //integer value for array index
  const [data, setData] = useState(null);
  const [currAPIPage, setcurrAPIPage] = useState(1);
  // This is the service that returns data
  const dataService = useContext(dataServiceContext);
  // function to search for entity on wookieepedia
  const onNameClick = (query) => {
    window.open(
      `https://starwars.fandom.com/wiki/Special:Search?query=${query}`,
      "_blank"
    );
  };
  // Resets the data on new Entity. Also fetches new data
  // from API as fetched data only contains 10 entries
  useEffect(() => {
    setcurrAPIPage(1);
    setcurrentIndex(0);
  }, [page]);

  useEffect(() => {
    setcurrentIndex(0);
    setData(null);
    dataService.getAPIData(page, currAPIPage).then((result) => {
      setData(result);
      // console.log(result);
    });
  }, [page, currAPIPage]);
  // Changes the api page when reaching end of current data in order to fetch new data
  // This change in api page is caught in the above UseEffect which enables data-fetching
  useEffect(() => {
    if (currentIndex === 10) {
      setcurrAPIPage(currAPIPage + 1);
    } else if (data && currentIndex >= data.length) {
      setcurrAPIPage(1);
      setcurrentIndex(0);
    }
    if (data && currentIndex === 0 && currAPIPage > 1) {
      setcurrAPIPage(currAPIPage - 1);
      // setcurrentIndex(data.length - 1);
    }
    //TODO: Add functionality to go back
  }, [currentIndex]);
  // Allows you to render different pages based on input prop. Did this way
  // to code the fetching action efficiently
  let switchboi = (key) => {
    switch (key) {
      case "people":
        return (
          <Person
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      case "planets":
        return (
          <Planet
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      case "films":
        return (
          <Film
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      case "vehicles":
        return (
          <Vehicle
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      case "starships":
        return (
          <Starship
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      case "species":
        return (
          <Species
            currentIndex={currentIndex}
            apidata={data}
            onNameClick={onNameClick}
          />
        );
      default:
        return null;
    }
  };
  // !data -> returns loader when data hasnt been fetched yet
  return !data ? (
    <div className="aids">
      <MoonLoader loading color={"white"} />
    </div>
  ) : (
    <div className="aids">
      {/* the next line renders the page-intro only if we are on the first API page */}
      {currAPIPage === 1 && (
        <div className="page-intro sw-text">
          <h1>{page}</h1>
        </div>
      )}
      <div className="entity-wrapper" style={{ width: "100%" }}>
        <div
          className="arrow-btn"
          onClick={() => {
            if (currAPIPage > 1 && currentIndex === 0) {
              setcurrAPIPage(currAPIPage - 1);
            } else if (currentIndex > 0) {
              setcurrentIndex(currentIndex - 1);
            }
          }}
        >
          <AiFillCaretLeft />
        </div>
        {data ? switchboi(page) : null}
        <div
          className="arrow-btn"
          onClick={() =>
            currentIndex === 10 ? 10 : setcurrentIndex(currentIndex + 1)
          }
        >
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
}

export default Entity;
