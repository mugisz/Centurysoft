export function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 px-2 sm:px-10 z-20 pointer-events-none">
      <h2 className=" text-[30px] sm:text-[50px] md:text-[80px] text-center font-bold text-white sm:max-w-[80%] sm:leading-[80px]">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Centurysoft
        </span>
        <br />
        bring your{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
          ideas
        </span>{" "}
        into the life
      </h2>

      <p className="text-[14px] sm:text-[16px] text-center text-gray-400 max-w-[500px]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
    </div>
  );
}
