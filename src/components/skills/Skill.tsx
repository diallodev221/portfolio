const Skill = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 text-black ">
      <div className="text-center py-1 mb-8 text-[26px] border-solid border-2 border-blue-500 border-opacity-15 lg:border-0 rounded-full leading-8  lg:text-4xl w-full">
        Skills
      </div>

      <div className="grid grid-cols-1 gap-4 lg:gap-7  justify-center items-center ">
        {/* programming languages */}
        <div className="flex flex-col gap-4  ">
          <div className="text-[18px] leading-8  text-center lg:text-start md:text-2xl">
            Languages
          </div>

          <div className="flex flex-wrap  gap-4 justify-center lg:justify-start md:items-start   md:gap-8">
            <div className="flex  justify-center items-center self-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full ">
              <img
                className="w-8 md:w-12"
                src="/stacks/programming/java.svg"
                alt="java"
              />
            </div>
            <div className="flex  justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full">
              <img
                className="w-7 md:w-9"
                src="/stacks/programming/typescript.svg"
                alt="typescript"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-9"
                src="/stacks/programming/javascript.svg"
                alt="javascript"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px]">
              <img
                className="w-7 md:w-9"
                src="/stacks/programming/dart.svg"
                alt="dart"
              />
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="flex flex-col gap-4 justify-center ">
          <div className="text-[18px] leading-8 text-center md:text-2xl lg:text-start">
            Frontend
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start md:items-start  md:gap-6">
            <div className="flex flex-wrap  justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full">
              <img
                className="w-7 md:w-10  self-center"
                src="/stacks/frontend/angular.svg"
                alt="angular"
              />
            </div>
            <div className="flex  justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full">
              <img
                className="w-7 md:w-10"
                src="/stacks/frontend/react.svg"
                alt="react"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 rounded-full h-[50px] w-[50px] md:h-[80px] md:w-[80px] ">
              <img
                className="w-7 md:w-10"
                src="/stacks/frontend/bootstrap.svg"
                alt="bootstrap"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/frontend/tailwindcss.svg"
                alt="tailwindcss"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/frontend/material-ui.svg"
                alt="material-ui"
              />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col gap-4">
          <div className="text-[18px] leading-8 text-center lg:text-start md:text-2xl">
            Backend
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start md:items-start   md:gap-7">
            <div className="flex  justify-center items-center bg-blue-500 bg-opacity-10 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full">
              <img
                className="w-7 md:w-10"
                src="/stacks/backend/spring.svg"
                alt="spring"
              />
            </div>
            <div className="flex  justify-center items-center bg-blue-500 bg-opacity-10 h-[50px] w-[50px] md:h-[80px] md:w-[80px]   rounded-full">
              <img
                className="w-7 md:w-10"
                src="/stacks/backend/nodejs.svg"
                alt="nodejs"
              />
            </div>
            <div className="flex justify-center items-center  bg-blue-500 bg-opacity-10 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-[50px]">
              <img
                className="w-7 md:w-10"
                src="/stacks/backend/nestjs.svg"
                alt="nestjs"
              />
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div className="flex flex-col gap-4 justify-center ">
          <div className="text-[18px] leading-8 text-center lg:text-start md:text-2xl">
            DevOps & Cloud
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start md:items-start  md:gap-8">
            <div className="flex  justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/jenkins.svg"
                alt="jenkins"
              />
            </div>
            <div className="flex  justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/gitlab.svg"
                alt="gitlab"
              />
            </div>
            <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/heroku.svg"
                alt="heroku"
              />
            </div>
            <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/docker.svg"
                alt="docker"
              />
            </div>
            <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/githubactions.svg"
                alt="react"
              />
            </div>
            <div className="flex justify-center items-center bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/devops/netlify.svg"
                alt="netlify"
              />
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="flex flex-col gap-4 justify-center ">
          <div className="text-[18px] text-center md:text-2xl lg:text-start leading-8">
            Databases
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start md:items-start  md:gap-8">
            <div className="flex  justify-center items-center   bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full  max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/databases/mysql.svg"
                alt="mysql"
              />
            </div>
            <div className="flex  justify-center items-center   bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px]  rounded-full text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/databases/postgresql.svg"
                alt="react"
              />
            </div>
            <div className="flex justify-center items-center   bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/databases/mongo.svg"
                alt="react"
              />
            </div>
            <div className="flex justify-center items-center   bg-blue-500 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-15 h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[50px] text-ellipsis max-md:text-4xl">
              <img
                className="w-7 md:w-10"
                src="/stacks/databases/redis.svg"
                alt="redis"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
