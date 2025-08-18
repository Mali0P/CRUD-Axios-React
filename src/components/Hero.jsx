import React, { useEffect, useState } from "react";
import { postStore } from "../store/fetchPost";
import Form from "./Form";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";

export default function Hero() {
  let { products, setProducts, editStatus, updatedProducts } = postStore();
  const [curData, dataFun] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setProducts();
  }, [setProducts]);

  useEffect(() => {
    if (!editStatus) return;

    const curValue = products.find((p) => p.id === editStatus);

    if (curValue) {
      dataFun({
        title: curValue.title,
        body: curValue.body,
      });
    }
  }, [editStatus, products]);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dataFun((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1 className=" font-[600] text-4xl mb-8">CRUD Operation</h1>
      <Form />
      <div className="grid grid-cols-4 grid-rows-3 gap-8">
        {products.map((val, index) => {
          return (
            <div key={index} className="my-8 bg-white px-5 py-8">
              {editStatus === val.id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={curData.title}
                    onChange={handleInputChange}
                    className="font-bold text-lg border formInput"
                  />
                  <input
                    type="text"
                    name="body"
                    value={curData.body}
                    onChange={handleInputChange}
                    className="font-[300] text-[14px] mb-5 mt-3 border formInput"
                  />
                </>
              ) : (
                <>
                  <h2 className="font-bold text-lg">{val.title}</h2>
                  <p className="font-[300] text-[14px] mb-5 mt-3">{val.body}</p>
                </>
              )}

              <div>
                <EditForm curData={curData} index={val.id} />
                <DeleteForm index={val.id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
