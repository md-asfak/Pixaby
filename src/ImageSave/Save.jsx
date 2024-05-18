import React from "react";
import Loder from "../Home/Loder";

function Save({ loader, saved }) {
  return (
    <div>
      <section>
        {loader ? (
          <>
            <Loder />
          </>
        ) : (
          <>
            <section className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 place-items-center">
              {saved.map((el) => {
                return (
                  <>
                    <div key={el.id}>
                      <img
                        src={el.src.medium}
                        alt="api Images"
                        className="w-auto h-auto rounded-md cursor-pointer"
                        onClick={() => imageSaveHundle(el.src.medium)}
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
        {saved.length !== 0 && (
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

export default Save;
