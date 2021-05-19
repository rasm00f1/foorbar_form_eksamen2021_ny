import Queue from "./Queue";
export default function DataFlow(props) {
  return (
    <div className="row_divider">
      <section className="data_section">
        <h2>Serving</h2>
        <div className="data_container">
          {props.serving.map((customer) => (
            <div className="side_by_side" key={customer.id}>
              <h2>#{customer.id}</h2>
              <p>Order: {customer.order}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="data_section">
        <h2>Queue</h2>
        <div className="data_container">
          {props.queue.map((customer) => (
            <Queue {...customer} key={customer.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
