import Queue from "./Queue";
export default function DataFlow(props) {
  return (
    <div className="row_divider">
      <section className="data_section">
        <h2>Serving</h2>
        <div className="data_container">
          {props.serving.map((customer) => (
            <Queue {...customer} key={customer.id} />
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
