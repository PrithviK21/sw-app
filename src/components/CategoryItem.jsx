function CategoryItem({ name, image }) {
  return (
    <div>
      <div className="col">
        <p className="category-title">{name}</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default CategoryItem;
