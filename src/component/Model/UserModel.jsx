import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaNeuter } from 'react-icons/fa6';


const UserModel = () => {
  return (
    <>
      <div className="relative bg-white shadow-md rounded-lg w-[255px] p-2 mt-0.5">
        <div className="p-2">
          <div className="flex items-start p-0 m-0">
            <div className="flex pr-2">
              <div className="relative w-12 h-12 bg-transparent p-0 m-0">
                <span className="flex items-center justify-center w-12 h-12 text-white bg-[#007D88] rounded-full">
                  Hk
                </span>
              </div>
            </div>

            <div className="flex-1 p-0 m-0">
              <a href="#" className="text-[#262A2E] font-medium no-underline">
                Hencework
                <span className="ml-1 text-[#262A2E] font-normal"></span>
              </a>

              <div className="relative bg-white shadow-md rounded-lg p-2 mt-2">
                <div className="p-2">
                  <div className="flex items-center mb-4">
                    <div className="flex pr-2">
                      <div className="relative w-8 h-8 bg-transparent p-0 m-0">
                        <span className="flex items-center justify-center w-8 h-8 text-white bg-[#007D88] rounded-full">
                          Hk
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-0 m-0">
                      <a href="#" className="text-[#262A2E] no-underline">
                        Hencework{' '}
                        <i className="ml-1 text-[#007D88] text-sm">
                          <span className="text-[#007D88] text-sm"></span>
                        </i>
                      </a>

                      <a
                        href="#"
                        className="text-[#6F6F6F] text-xs no-underline"
                      >
                        <u>Manage your account</u>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex pr-2">
                      <div className="relative w-8 h-8 bg-transparent p-0 m-0">
                        <img
                          src="assets/img/avatar12.jpg"
                          alt="user"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1 p-0 m-0">
                      <a href="#" className="text-[#262A2E] no-underline">
                        Jampack Team
                      </a>

                      <a
                        href="#"
                        className="text-[#6F6F6F] text-xs no-underline"
                      >
                        contact@hencework.com
                      </a>
                    </div>
                  </div>

                  <button className="w-full border border-[#EAEAEA] rounded-md py-1 px-3 text-sm text-[#6F6F6F]">
                    <span className="flex items-center justify-center">
                      <span className="mr-3">
                        <FaUser className="stroke-[#6F6F6F] w-4 h-4" />
                      </span>
                      Add Account
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-sm text-[#6F6F6F] p-0 m-0">
              contact@hencework.com
            </div>

            <a href="#" className="text-[#6F6F6F] text-xs no-underline">
              <u>Sign Out</u>
            </a>
          </div>
        </div>

        <div className="border-t border-[#EAEAEA] mt-2 mb-2"></div>

        <a
          href="profile.html"
          className="text-[#262A2E] py-1 px-3 rounded-md cursor-pointer"
        >
          Profile
        </a>

        <div className="border-t border-[#EAEAEA] mt-2 mb-2"></div>

        <h6 className="text-[#9E9E9E] font-medium py-2 px-3">Manage Account</h6>

        <a
          href="#"
          className="text-[#262A2E] py-1 px-3 rounded-md cursor-pointer"
        >
          <span className="relative top-[-2px] mr-2">
            <FaNeuter className="stroke-[#262A2E] w-5 h-5" />
          </span>
          Settings
        </a>
      </div>
    </>
  );
};

export default UserModel;
