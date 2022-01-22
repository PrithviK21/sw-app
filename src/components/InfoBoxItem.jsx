function InfoBoxItem({ name, value }) {
  return (
    <div className="info-box-item">
      {/* Checks if the passed value is a list with more than one value, if so, renders a list box */}
      {Array.isArray(value) && value.length > 1 ? (
        <div className={`info-lists`}>
          {value.map((item) => (
            <>
              <p>{item}</p>
              {/* <hr /> */}
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
