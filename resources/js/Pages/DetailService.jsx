import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";
import { useState, useEffect } from "react";

export default function DetailService({ room, images }) {
  const [Image, setImage] = useState(images[0].url);
  const [showModal, setShowModal] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    durations: "",
  });

  function submit(e) {
    e.preventDefault();
    // post(`/services/${room.no}/payment`);
    console.log(data);
  }
  return (
    <>
      <Head title={`Kamar No. ${room.no}`} />
      <CustomersLayout>
        <div className="container mx-auto h-screen">
          <div className="w-8/12 mx-auto">
            <section className="flex mt-10">
              <div className="w-6/12">
                <div className=" border-2 rounded-2xl p-2">
                  <img
                    src={`/${Image}`}
                    alt=""
                    className=" w-full h-96 object-contain"
                  />
                </div>
                <ul className="flex mt-6">
                  {images.map((image) => {
                    return (
                      <li className="w-2/12" key={image.id}>
                        <img
                          src={`/${image.url}`}
                          alt=""
                          className="border h-20 w-full object-cover hover:cursor-pointer"
                          onClick={() => setImage(image.url)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-6/12 border-x-2 ml-16  border-black pl-4 my-auto">
                <h2 className="text-4xl tracking-wider">Kamar No. {room.no}</h2>
                <span className="block mt-2 tracking-wider text-xl">
                  Rp. {room.price}/bulan
                </span>
                <div>
                  <span className="mt-4">Fasilitas:</span>
                  <ul className="flex flex-wrap w-10/12 ">
                    <li className="w-6/12">K. Mandi Dalam</li>
                    <li className="w-6/12">Listrik</li>
                    <li className="w-6/12">Air</li>
                    <li className="w-6/12">Kasur</li>
                    <li className="w-6/12">Lemari</li>
                    <li className="w-6/12">Meja & kursi</li>
                  </ul>
                </div>
                {/* <div className="w-6/12 mt-10">
                  <a href={`/services/${room.no}/payment`}>Pesan sekarang</a>
                </div> */}
                <button
                  className="block w-full mt-10 md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Pesan Kamar
                </button>

                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Pesan Kamar No {room.no}
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="text-black h-10 w-10 text-2xl ">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <h4 className="text-center">Lama waktu Nge-Kost :</h4>
                          <form onSubmit={submit}>
                            <div className="relative p-6 flex justify-between">
                              {/* <p className="my-4 text-slate-500 text-lg leading-relaxed"></p> */}
                              <div className="flex items-center mb-4">
                                <input
                                  id="option-1"
                                  type="radio"
                                  name="durations"
                                  value="3"
                                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                  onChange={(e) =>
                                    setData("durations", e.target.value)
                                  }
                                />
                                <label
                                  htmlFor="option-1"
                                  className="block ml-2 text-sm font-medium text-gray-900 "
                                >
                                  3 Bulan
                                </label>
                              </div>
                              <div className="flex items-center mb-4">
                                <input
                                  id="option-2"
                                  type="radio"
                                  name="durations"
                                  value="6"
                                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                  onChange={(e) =>
                                    setData("durations", e.target.value)
                                  }
                                />
                                <label
                                  htmlFor="option-2"
                                  className="block ml-2 text-sm font-medium text-gray-900 "
                                >
                                  6 Bulan
                                </label>
                              </div>
                              <div className="flex items-center mb-4">
                                <input
                                  id="option-3"
                                  type="radio"
                                  name="durations"
                                  value="12"
                                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                  onChange={(e) =>
                                    setData("durations", e.target.value)
                                  }
                                />
                                <label
                                  htmlFor="option-3"
                                  className="block ml-2 text-sm font-medium text-gray-900 "
                                >
                                  12 Bulan
                                </label>
                              </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className={`bg-emerald-500 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none  mr-1 mb-1 ease-linear transition-all duration-150`}
                                type="submit"
                              >
                                Pesan
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
