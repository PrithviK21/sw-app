import Person from "../components/Person";
import Planet from "../components/Planet";
import Film from "../components/Film";
import Vehicle from "../components/Vehicle";
import Starship from "../components/Starship";
import Species from "../components/Species";
import { CircleLoader, MoonLoader } from "react-spinners";
import { useState, useEffect, useContext } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { dataServiceContext } from "../services/GetData";

function Entity({ page }) {
  const [currentIndex, setcurrentIndex] = useState(0); //integer value for array index
  const [data, setData] = useState(null);
  const [currAPIPage, setcurrAPIPage] = useState(1);
  // This is the service that returns data
  const dataService = useContext(dataServiceContext);

  // Resets the data on new Entity. Also fetches new data
  // from API as fetched data only contains 10 entries
  useEffect(() => {
    setcurrAPIPage(1);
    setcurrentIndex(0);
  }, [page]);

  useEffect(() => {
    setData(null);
    dataService.getAPIData(page, currAPIPage).then((result) => {
      setData(result);
      // console.log(result);
    });
  }, [page, currAPIPage]);
  // Changes the api page when reaching end of current data in order to fetch new data
  // This change in api page is caught in the above UseEffect which enables data-fetching
  useEffect(() => {
    if (currentIndex == 10) {
      setcurrAPIPage(currAPIPage + 1);
    } else if (data && currentIndex >= data.length) {
      setcurrAPIPage(1);
      setcurrentIndex(0);
    }
  }, [currentIndex]);
  // Allows you to render different pages based on input prop. Did this way
  // to code the fetching action efficiently
  let switchboi = (key) => {
    switch (key) {
      case "people":
        return <Person currentIndex={currentIndex} apidata={data} />;
      case "planets":
        return <Planet currentIndex={currentIndex} apidata={data} />;
      case "films":
        return <Film currentIndex={currentIndex} apidata={data} />;
      case "vehicles":
        return <Vehicle currentIndex={currentIndex} apidata={data} />;
      case "starships":
        return <Starship currentIndex={currentIndex} apidata={data} />;
      case "species":
        return <Species currentIndex={currentIndex} apidata={data} />;
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
      <div className="entity-wrapper" style={{ width: "100%" }}>
        <div
          className="arrow-btn"
          onClick={() =>
            currentIndex === 0 ? 0 : setcurrentIndex(currentIndex - 1)
          }
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
