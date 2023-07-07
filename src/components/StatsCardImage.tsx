function StatsCardImage() {
  return (
    <picture className="bg-accent rounded-t-xl xl:rounded-l-none xl:rounded-r-xl xl:order-2">
      <source media="(min-width: 1280px)" srcSet="/image-header-desktop.jpg" />
      <img
        src="/image-header-mobile.jpg"
        alt="Office people working"
        className="rounded-t-xl bg-blend-overlay opacity-50 xl:rounded-l-none xl:rounded-r-xl xl:w-[1280px]  xl:order-2"
      />
    </picture>
  );
}
export default StatsCardImage;
