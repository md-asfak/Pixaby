import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Save from "../ImageSave/Save";
import Header from "../Header/Header";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";

function Router() {
  const [search, setSearch] = useState("delhi");
  const [imageData, setImageData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  return (
    <>
      <section>
        <Header setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setSearch={setSearch}
                setImageData={setImageData}
                imageData={imageData}
                search={search}
                loader={loader}
                setLoader={setLoader}
                setSaved={setSaved}
                saved={saved}
              />
            }
          />
          <Route
            path="/save-image"
            element={<Save loader={loader} saved={saved} />}
          />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </>
  );
}

export default Router;
