//Queue - Rasmus
export default function Queue(props) {
  function getUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  function getOccurence(value) {
    return props.order.filter((order) => order === value).length;
  }
  const uniqueQueue = props.order.filter(getUnique);

  return (
    <div
      style={
        props.id === props.orderId
          ? { padding: "10px", margin: "10px", backgroundColor: "#343434" }
          : { padding: "10px", margin: "10px", backgroundColor: "#5E676A" }
      }
      className="side_by_side"
    >
      <h2
        style={
          props.id === props.orderId
            ? { color: "#47c4eb", textShadow: "0px 0px 5px #47c4eb8a" }
            : {}
        }
      >
        #{props.id}
      </h2>
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
