import luke1 from "../assets/category-icons/luke1.jpg";
import falcon from "../assets/category-icons/falcon.jpg";
import speeder from "../assets/category-icons/speeder.jpg";
import swposter from "../assets/category-icons/sw-poster.jpeg";
import tatooine from "../assets/category-icons/tatooine.jpg";
import wookie from "../assets/category-icons/wookie.jpg";
import CategoryItem from "../components/CategoryItem";

function Categories() {
  return (
    <div className="categories">
      <CategoryItem name="People" image={luke1} />
      <CategoryItem name="Planets" image={tatooine} />
      <CategoryItem name="Films" image={swposter} />
      <CategoryItem name="Species" image={wookie} />
      <CategoryItem name="Vehicles" image={speeder} />
      <CategoryItem name="Starships" image={falcon} />
    </div>
  );
}

export default Categories;
