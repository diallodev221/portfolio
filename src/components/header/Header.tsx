import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div className="container  mx-auto mb-10 md:mb-12 w-full pt-6">
      <div className="grid grid-cols-1 mb-4  md:grid-cols-2 gap-2">
        <div className="flex flex-col justify-center md:items-start gap-4 max-md:mt-10 max-md:max-w-full">
          {/* greeting and name */}
          <div className="flex flex-col text-3xl leading-10  font-bold  text-center md:text-start">
            <span>Hello, I'm 👋</span> <span>Saifoullaye Diallo</span>
          </div>

          {/* typing text */}
          <ReactTyped
            className="text-center text-lg font-medium"
            strings={[
              "Full-Stack Developer 💻",
              "Mobile Developer 📱",
              "Always learning new things",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>

        {/* picture */}
        <div className="flex justify-center md:justify-around my-3">
          <div className="my-3 rounded-full bg-blue-500 bg-opacity-10  h-[200px] w-[200px] md:h-[400px] md:w-[400px]" />
        </div>
      </div>

      {/*  contact information */}
      <div className="flex justify-center md:justify-start items-center gap-4">
        <div className="flex justify-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-full">
          <img
            src="/contacts/gmail.svg"
            alt="gmail"
            className="w-6 md:max-lg:w-8"
          />
        </div>
        <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-full">
          <img
            src="/contacts/linkedin.svg"
            alt="linkedin"
            className="w-6  lg:w-8"
          />
        </div>
        <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-full">
          <img
            src="/contacts/twitter.svg"
            alt="twitter"
            className="w-6 lg:w-8"
          />
        </div>
        <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-full">
          <img
            src="/contacts/github.svg"
            alt="github"
            className="w-6 md:max-lg:w-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
