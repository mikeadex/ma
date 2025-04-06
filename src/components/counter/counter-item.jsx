import CounterUp from "./counter-up";

export default function CounterItem({ endVal, title, color='' }) {
  return (
    <div className="counter__item text-center mb-30">
      <h2 className={`counter ${color}`}>
        <CounterUp min={0} max={endVal} />
      </h2>
      <span>{title}</span>
    </div>
  );
}
