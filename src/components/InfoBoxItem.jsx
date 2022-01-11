function InfoBoxItem({ name, value }) {
  return (
    <div className="info-box-item">
      {/* Checks if the passed value is a list, if so, renders a list box */}
      {Array.isArray(value) ? (
        <div className="info">
          {value.map((item) => (
            <>
              <a href={item}>{item}</a>
              <hr />
            </>
          ))}
        </div>
      ) : (
        <>
          <div className="info">{value ? value : "n/a"}</div>
          <hr />
        </>
      )}
      <div className="info-name">{name}</div>
    </div>
  );
}

export default InfoBoxItem;
