export default function Queue(props) {
  function getUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  function getOccurence(value) {
    return props.order.filter((order) => order === value).length;
  }
  const uniqueQueue = props.order.filter(getUnique);

  return (
    <div style={{ padding: "10px", margin: "10px", backgroundColor: "#5E676A" }} className="side_by_side">
      <h2>#{props.id}</h2>
      <div>
        {uniqueQueue.map((queueItem) => {
          return (
            <p key={queueItem}>
              {getOccurence(queueItem)}x{queueItem}
            </p>
          );
        })}
      </div>
    </div>
  );
}
