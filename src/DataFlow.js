export default function DataFlow(props) {
  return (
    <div>
      <ul>
        <h2>Serving</h2>
        {props.serving.map((customer) => (
          <li key={customer.id}>
            <p>ID: {customer.id}</p>
            <p>Order Time: {customer.startTime}</p>
            <p>Order: {customer.order}</p>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Queue</h2>
        {props.queue.map((customer) => (
          <li key={customer.id}>
            <p>ID: {customer.id}</p>
            <p>Order Time: {customer.startTime}</p>
            <p>Order: {customer.order}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
