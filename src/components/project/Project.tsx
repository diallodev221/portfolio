const Project = () => {
  return (
    <div className="flex flex-col  mb-10 w-full">
      <div className="py-2 mb-4 text-[20px] border-solid border-2 border-blue-500 border-opacity-15 rounded-full leading-8 text-center text-black w-full max-md:max-w-full">
        Projects
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* project item card */}
        <div className="grid max-sm:grid-cols-1    justify-center rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
          <div className="self-stretch  w-full rounded-md">
            <img className="w-full h-[300px]" src="/project/bk.png" alt="" />
          </div>
          <div className="flex flex-col p-3 whitespace-nowrap">
            <div className="text-base leading-6">Project 1</div>
            <div className="mt-1 text-xl font-medium leading-7">
              Description of Project 1
            </div>
          </div>
        </div>

        {/* project item card */}
        <div className="grid max-sm:grid-cols-1    justify-center rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
          <div className="self-stretch  w-full rounded-md">
            <img className="w-full h-[300px]" src="/project/about04.png" alt="" />
          </div>
          <div className="flex flex-col p-3 whitespace-nowrap">
            <div className="text-base leading-6">Project 1</div>
            <div className="mt-1 text-xl font-medium leading-7">
              Description of Project 1
            </div>
          </div>
        </div>

        {/* project item card */}
        <div className="grid max-sm:grid-cols-1    justify-center rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
          <div className="self-stretch  w-full rounded-md">
            <img className="w-full h-[300px]" src="/project/front-end.png" alt="" />
          </div>
          <div className="flex flex-col p-3 whitespace-nowrap">
            <div className="text-base leading-6">Project 1</div>
            <div className="mt-1 text-xl font-medium leading-7">
              Description of Project 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
