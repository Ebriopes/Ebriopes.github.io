import * as React from "react";
import "../css/home.scss";
// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <nav className="absolute right-0 w-1/3 flex justify-evenly">
        <a
          href="/"
          className="p-4 text-3xl font-bold text-white hover:text-gray-600 cursor-pointer"
        >
          HOME
        </a>
        <a
          href="/"
          className="p-4 text-3xl font-bold text-white hover:text-gray-600 cursor-pointer"
        >
          ABOUT
        </a>
        <a
          href="/"
          className="p-4 text-3xl font-bold text-white hover:text-gray-600 cursor-pointer"
        >
          WORK
        </a>
      </nav>

      <main className="h-screen w-screen flex justify-center items-center bg-pink-600">
        <h1 className="text-9xl font-extrabold font-serif title">THE VARGAS</h1>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
