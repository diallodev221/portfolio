import { CiCalendar } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 w-full max-md:max-w-full">
      <div className="text-center py-1 mb-8 text-[26px] border-solid border-2 border-blue-500 border-opacity-15 lg:border-0 rounded-full leading-8  lg:text-4xl w-full">
        Experiences
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-md:w-full">
        {/* title */}
        <div
          className="text-center py-2  mb-4
            rounded-full  text-[20px] leading-6 text-black w-full lg:text-3xl"
        >
          Work Experiences
        </div>
        {/* cards experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  justify-center text-black ">
          {/* experiences */}
          <div className="justify-center p-4 rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
            <div className="flex gap-1">
              <div className="flex w-[21%]">
                <div className="self-stretch mx-auto h-[60px] w-[60px] ">
                  <img
                    className="w-11"
                    src="/companies/eng_tech_group.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col  w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col">
                  {/* logo, name and job title */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[16px] md:text-[18px]  leading-5 md:leading-6 lg:leading-7 ">
                      Eng Technlogie Group
                    </div>
                    <div className="text-sm md:text-lg leading-5 text-black text-opacity-50">
                      Consultant IT · Full Time
                    </div>
                  </div>

                  {/* duration and location */}
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2">
                      <CiCalendar style={{ fontSize: "20px" }} />
                      <span className="text-sm">Oct 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <HiOutlineBuildingOffice2 style={{ fontSize: "20px" }} />
                      <span className="text-sm">Dakar, Senegal · On site</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-center p-4 rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
            <div className="flex gap-1">
              <div className="flex w-[21%]">
                <div className="self-stretch mx-auto h-[60px] w-[60px] ">
                  <img
                    className="w-11"
                    src="/companies/mafalia.jpeg"
                    alt="mafalia"
                  />
                </div>
              </div>
              <div className="flex flex-col  w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col">
                  {/* logo, name and job title */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[16px] md:text-[18px]  leading-5 md:leading-6 lg:leading-7 ">
                      Mafalia Ecom & FinTech
                    </div>
                    <div className="text-sm md:text-lg leading-5 text-black text-opacity-50">
                      Software Developer · Self-employed
                    </div>
                  </div>

                  {/* duration and location */}
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2">
                      <CiCalendar style={{ fontSize: "20px" }} />
                      <span className="text-sm">Nov 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <HiOutlineBuildingOffice2 style={{ fontSize: "20px" }} />
                      <span className="text-sm">Dakar, Senegal · Remote</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-center p-4 rounded-md  shadow-md hover:bg-blue-500  hover:bg-opacity-10 max-md:max-w-full">
            <div className="flex gap-1">
              <div className="flex w-[21%]">
                <div className="self-stretch mx-auto h-[60px] w-[60px] ">
                  <img
                    className="w-11"
                    src="/companies/sarayatech.jpeg"
                    alt="sarayatech"
                  />
                </div>
              </div>
              <div className="flex flex-col  w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col">
                  {/* logo, name and job title */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[16px] md:text-[18px]  leading-5 md:leading-6 lg:leading-7 ">
                      SarayaTech Senegal
                    </div>
                    <div className="text-sm md:text-lg leading-5 text-black text-opacity-50">
                      Full-Stack Developer · Internship
                    </div>
                  </div>

                  {/* duration and location */}
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2">
                      <CiCalendar style={{ fontSize: "20px" }} />
                      <span className="text-sm">
                        Dec 2022 - Feb 2023 · 3 mois
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <HiOutlineBuildingOffice2 style={{ fontSize: "20px" }} />
                      <span className="text-sm">Dakar, Senegal · On site</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
