import PrimaryButton from "@/Components/PrimaryButton";
import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function DetailService() {
  const images = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/user/wsanter",
    "https://source.unsplash.com/random/?room",
    "https://source.unsplash.com/random/?bedroom",
  ];

  const [Image, setImage] = useState(images[0]);

  return (
    <>
      <Head title="Kamar x" />
      <CustomersLayout>
        <div className="container mx-auto">
          <div className="w-8/12 mx-auto">
            <div className="border-b-2  mt-4">
              <BsArrowLeft size={35} />
            </div>
            <section className="flex mt-10">
              <div className="w-6/12">
                <div className=" border-2 rounded-2xl p-2">
                  <img
                    src={Image}
                    alt=""
                    className=" w-full h-96 object-contain"
                  />
                </div>
                <ul className="flex mt-6">
                  <li className="w-2/12">
                    <img
                      src={images[0]}
                      alt=""
                      className="border h-20 w-full object-cover hover:cursor-pointer"
                      onClick={(e) => setImage(images[0])}
                    />
                  </li>
                  <li className="w-2/12">
                    <img
                      src={images[1]}
                      alt=""
                      className="border h-20 w-full object-cover hover:cursor-pointer"
                      onClick={(e) => setImage(images[1])}
                    />
                  </li>
                </ul>
              </div>
              <div className="w-6/12 border-x-2 ml-16  border-black pl-4 my-auto">
                <h2 className="text-4xl tracking-wider">Kamar No. X</h2>
                <span className="block mt-2 tracking-wider text-xl">
                  Rp. 300.000/bulan
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
                <div className="w-6/12 mt-10">
                  <PrimaryButton>Pesan Sekarang</PrimaryButton>
                </div>
              </div>
            </section>
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
