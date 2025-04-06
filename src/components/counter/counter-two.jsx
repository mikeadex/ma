import CounterItem from "./counter-item";

const counters = [
  { counter: 1749, title: "Happy Clients", color: "blue-2-color" },
  { counter: 796, title: "Project Completed", color: "pink-color" },
  { counter: 573, title: "Support Given", color: "green-4-color" },
  { counter: 2739, title: "Offices Worldwide", color: "orange-color" },
];

export default function CounterTwo() {
  return (
    <section className="counter__area counter__area-2 pt-85 pb-85">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <CounterItem
                endVal={counter.counter}
                title={counter.title}
                color={counter.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
