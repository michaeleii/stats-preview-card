interface Stat {
  stat: string;
  item: string;
}

function Stats({ stat }: { stat: Stat }) {
  return (
    <div>
      <h2 className="text-white text-2xl font-bold">{stat.stat}</h2>
      <p className="text-white/60 uppercase tracking-wider">{stat.item}</p>
    </div>
  );
}
export default Stats;
