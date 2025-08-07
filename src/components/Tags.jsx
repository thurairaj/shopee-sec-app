import "./Tags.css";

function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag, i) => {
        return (
          <span className={"tag"} key={i}>
            {tag}
          </span>
        );
      })}
    </div>
  );
}

export default Tags;
