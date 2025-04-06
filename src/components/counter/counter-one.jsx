import CounterItem from "./counter-item";


const countersData = [
  { counter: 1749, title: "Happy Clients", color: "" },
  { counter: 796, title: "Project Completed", color: "" },
  { counter: 573, title: "Support Given", color: "" },
  { counter: 2739, title: "Offices Worldwide", color: "" },
];

export default function CounterOne() {
  return (
    <section className="counter__area pb-100">
      <div className="container">
        <div
          className="counter__inner white-bg wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="row">
            {countersData.map((counter, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <CounterItem endVal={counter.counter} title={counter.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
