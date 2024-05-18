import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ setSearch }) {
  const navimag = useNavigate();
  const saveImageHundler = () => {
    navimag("/save-image");
  };
  const [toggle, setToggle] = useState(false);

  const toggleHundler = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();
  const hundlelogin = () => {
    navigate("/login");
  };

  const logoutHundle = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  const userLoger = JSON.parse(localStorage.getItem("User"));
  return (
    <>
      <section id="nav" className="w-[100%] h-[70vh]">
        <div className=" image-add  text-white font-serif">
          <div className="w-[100%] h-[70vh] bg-[rgba(0,0,0,0.5)] ">
            <header>
              <div className=" flex flex-row justify-between  px-10 py-5">
                <Link to={"/"}>
                  <h1 className="text-2xl font-font1">Imageslab</h1>
                </Link>
                <nav className="hidden sm:flex flex-row gap-5 ">
                  <div className="flex flex-row gap-3 justify-center items-center text-xl">
                    {userLoger === null ? (
                      <button
                        onClick={hundlelogin}
                        className="bg-green-700 text-white px-2 py-1 rounded-sm"
                      >
                        Login
                      </button>
                    ) : (
                      <>
                        <span>
                          <i class="fa-solid fa-user"></i>
                        </span>
                        <span className=""> {userLoger.name}</span>
                        <button
                          onClick={logoutHundle}
                          className="px-2 py-1 bg-red-900 text-white"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    onClick={saveImageHundler}
                    className="px-2 py-1 bg-[#14bc7d] rounded-2xl text-xl"
                  >
                    Saved <i class="fa-regular fa-floppy-disk"></i>
                  </button>
                </nav>
                <div className="flex flex-row justify-end sm:hidden text-2xl  ">
                  <button>
                    <i
                      class="fa-solid fa-bars-staggered"
                      onClick={toggleHundler}
                    ></i>
                  </button>
                </div>
              </div>
            </header>

            <div>
              {toggle && (
                <section>
                  <div className="flex flex-col md:hidden fixed inset-0 bg-black  h-[230px] text-white pt-5 px-10  ">
                    <div className="flex flex-row  gap-5 items-center justify-between">
                      <div>
                        <h1 className="text-2xl ">Imageslab</h1>
                      </div>

                      <div
                        className="text-3xl font-semibold cursor-pointer"
                        onClick={toggleHundler}
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </div>
                    </div>

                    <nav className="flex-col flex justify-center items-center gap-5 pt-5">
                      <div className="flex justify-center items-center text-xl">
                        {userLoger === null ? (
                          <button onClick={hundlelogin}>Login</button>
                        ) : (
                          <>
                            <div className="flex flex-col gap-5">
                              <div className="flex flex-row gap-3">
                                <span className="pr-1">
                                  <i class="fa-solid fa-user"></i>
                                </span>
                                <span className=""> {userLoger.name}</span>
                              </div>
                              <div className="text-center">
                                <button
                                  onClick={logoutHundle}
                                  className="px-2 py-1 bg-red-900 text-white cursor-pointer text-center"
                                >
                                  Logout
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="">
                        <Link
                          to={"/saved"}
                          className="px-3 py-2 bg-[#14bc7d] rounded-sm text-xl"
                        >
                          Saved <i class="fa-regular fa-floppy-disk"></i>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </section>
              )}

              {/* toggle ber end */}
            </div>

            <div className="flex flex-col justify-center items-center pt-40 text-center px-10">
              <h1 className="text-3xl font-bold ">
                Stunning royalty-free images & royalty-free stock
              </h1>
              <p className="pt-2 pb-4">
                Over 4 million+ high quality stock images, videos and music
                shared by our talented community.
              </p>
              <input
                type="text"
                className=" w-[300px] xs:w-[400px] sm:w-[500px] md:w-[700px] lg:w-[850px] h-[50px] rounded-3xl outline-none text-gray-800 pl-5 "
                placeholder="Search For All Images On Pixel"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
