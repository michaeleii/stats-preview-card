import Stats from "./Stats";
import StatsCardImage from "./StatsCardImage";

const stats = [
  {
    stat: "10k+",
    item: "companies",
  },
  {
    stat: "314",
    item: "templates",
  },
  {
    stat: "12M+",
    item: "queries",
  },
];

function StatsCard() {
  return (
    <div className="flex flex-col bg-primary-800 rounded-xl max-w-sm xl:flex-row xl:max-w-7xl">
      <StatsCardImage />
      <div className="p-10 text-center xl:text-left flex flex-col justify-evenly gap-10">
        <h1 className="text-white font-bold text-3xl xl:text-4xl">
          Get <span className="text-accent">insights</span> that help your
          business grow.
        </h1>
        <p className="text-white/75 xl:text-lg">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="space-y-5 flex flex-col xl:flex-row xl:items-center xl:space-y-0 gap-5 xl:text-left">
          {stats.map((stat) => (
            <Stats stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default StatsCard;
