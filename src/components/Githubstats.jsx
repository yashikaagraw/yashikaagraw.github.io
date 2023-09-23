import React from "react";
import GitHubCalendar from "react-github-calendar";

const Githubstats = () => {
  return (
    <section className="mt-5 github-calendar">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Github <span className="text-cyan-600">Stats</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Contributions and Stats</p>
      </div>

      <div className="flex justify-center items-center mt-12">
        <GitHubCalendar
          fontSize={16}
          blockSize={15}
          year={2023}
          username="yashikaagraw"
        />
      </div>
      <div className="flex justify-center items-center mt-3 gap-10 flex-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "3rem",
        }}
      >
        <img
          id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=yashikaagraw&theme=neon&border_radius=2.7"
          alt="https://github.com/yashikaagraw"
        />
      </div>
      <div id="github-stat" className="flex justify-center mt-3 gap-10 flex-wrap">
        <img
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=yashikaagraw&theme=neon&border_radius=2.7&show_icons=true"
          alt="https://github.com/yashikaagraw"
        />
        <img
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=yashikaagraw&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D"
          alt="https://github.com/yashikaagraw"
        />
      </div>
    </section>
  );
};

export default Githubstats;