import axios from "axios";
import React, { useEffect } from "react";
import Loder from "./Loder";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({
  setSearch,
  setImageData,
  imageData,
  search,
  loader,
  setLoader,
  setSaved,
  saved,
}) {
  const api_Key = "PU07DjyJIYGw17xkzmyqsoXY7NhGZDYihzOBJAxTrKGvERrFuY5m2jjr";

  const imageSaveHundle = (img) => {
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          toast.info("Image Alredy Saved", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      toast.success("Image Successfully Saved", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}e&per_page=80`,
        {
          headers: {
            Authorization: api_Key,
          },
        }
      );

      setImageData(res.data.photos);
      setLoader(false);
    };

    fetchImage();
  }, [search]);
  return (
    <div>
      <ToastContainer />
      <section>
        <div className="flex flex-row gap-5 justify-start items-center py-10 px-10 overflow-scroll">
          <button
            onClick={() => setSearch("nature")}
            className="px-2 py-1 border-[1px]  border-gray-300 hover:border-black bg-transparent  rounded-md "
          >
            Nature
          </button>
          <button
            onClick={() => setSearch("travel")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            Travel
          </button>
          <button
            onClick={() => setSearch("city")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            City
          </button>
          <button
            onClick={() => setSearch("car")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            Car
          </button>
          <button
            onClick={() => setSearch("fashion")}
            className="px-2 py-1 border-[1px] border-gray-300 hover:border-black  bg-transparent  rounded-md "
          >
            Fashion
          </button>
          <button
            onClick={() => setSearch("animal")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            Animal
          </button>
          <button
            onClick={() => setSearch("technology")}
            className="px-2 py-1 border-[1px] border-gray-300 hover:border-black  bg-transparent  rounded-md "
          >
            Technology
          </button>
          <button
            onClick={() => setSearch("dog")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            Dog
          </button>
          <button
            onClick={() => setSearch("kolkata")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            kolkata
          </button>
          <button
            onClick={() => setSearch("delhi")}
            className="px-2 py-1 border-[1px] border-gray-300  hover:border-black bg-transparent  rounded-md "
          >
            Delhi
          </button>
        </div>
      </section>

      <section>
        {loader ? (
          <>
            <Loder />
          </>
        ) : (
          <>
            <section className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 place-items-center">
              {imageData.map((el) => {
                return (
                  <>
                    <div key={el.id}>
                      <img
                        src={el.src.medium}
                        alt="api Images"
                        className="w-auto h-auto rounded-md cursor-pointer"
                        onClick={() => imageSaveHundle(el)}
                      />
                    </div>
                  </>
                );
              })}
            </section>
          </>
        )}
      </section>
      <div className="grid grid-flow-row place-items-center py-10">
        {imageData.length !== 0 && (
          <a
            href="#nav"
            className="bg-yellow-600 text-white px-2 py-1 rounded-lg"
          >
            Back To Top
          </a>
        )}
      </div>
    </div>
  );
}

export default Home;
