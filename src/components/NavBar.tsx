function NavBar() {
  return (
    <header className="bg-blue-300 shadow-sm m-0">
      <nav className="flex gap-5 justify-between items-center  p-2 text-white whitespace-nowrap">
        <div className="flex gap-3 sm:flex-nowrap">
          {/* <div>
            <img
              className="w-10 h-10 rounded-[100px]"
              src="/DialloDev.svg"
              alt="Diallo Dev"
            />
          </div> */}
          <div className=" my-auto text-2xl font-serif font-medium leading-9 ">
            Diallo Dev
          </div>
        </div>
        {/* <div className="flex gap-5 justify-center  md:lg:items-center md:lg:w-auto  my-auto text-base leading-6 ">
          <div className="text-md lg:flex-grow text-black font-bold">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Skills
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Work
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Projects
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white"
            >
              About
            </a>
          </div>
        </div> */}
        <div className="flex justify-center items-center gap-3">
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white  lg:mt-0"
            >
              Resume
            </a>
          </div>

          <div className="flex  justify-center items-center w-9 h-9 hover:bg-black hover:bg-opacity-10  rounded-[100px]">
            <img className="w-6" src="/sun.svg" alt="theme" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
