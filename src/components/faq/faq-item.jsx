const FaqItem = ({ item }) => {
  const { id, title, content, isExpanded } = item;
  return (
    <div className="card accordion-item">
      <div className="accordion-header" id={`heading-${id}`}>
        <h5 className="mb-0">
          <button
            className={`btn btn-link ${isExpanded ? "" : "collapsed"}`}
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded={isExpanded}
            aria-controls={`collapse-${id}`}
          >
            {title}
          </button>
        </h5>
      </div>

      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isExpanded ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="card-body accordion-body">{content}</div>
      </div>
    </div>
  );
};

export default FaqItem;
