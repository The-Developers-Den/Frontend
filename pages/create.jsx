import React from "react";
import Image from "next/image";
import { LOCALHOST_DAPP_ADDRESS } from "@/utils/constants";
import axios from "axios";
import { useSigner } from "wagmi";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const { data: signer } = useSigner();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleChangeImg = async (e) => {
    const name = e.target.name;
    const value = await e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", value);
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data`,
            Authorization: process.env.NEXT_PUBLIC_JWT,
          },
        }
      );
      setData({
        ...data,
        [name]: "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const sendInput = async () => {
      setLoading(true);

      const inputContract = InputFacet__factory.connect(
        LOCALHOST_DAPP_ADDRESS,
        signer
      );

      // Encode the input
      const inputBytes = ethers.utils.isBytesLike(data)
        ? data
        : ethers.utils.toUtf8Bytes(data);

      // Send the transaction
      const tx = await inputContract.addInput(inputBytes);
      console.log(`transaction: ${tx.hash}`);
      toast("Transaction Sent", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Wait for confirmation
      console.log("waiting for confirmation...");
      const receipt = await tx.wait(1);

      // Search for the InputAdded event
      const event = receipt.events?.find((e) => e.event === "InputAdded");

      setLoading(false);
      toast("Transaction Confirmed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(
        `Input added => epoch : ${event?.args.epochNumber} index: ${event?.args.inputIndex} `
      );
    };
    sendInput();
  };

  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto min-h-[80vh] ">
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          Loading..
        </div>
      ) : (
        <form className="bg-[#FFF253] rounded-lg border border-[#ffffff]  my-5 md:my-10 px-5 w-[77%] lg:w-[70%] mx-auto text-black flex flex-col py-5  font-monument_reg shadow-[10px_10px_0px_#7843E8] ">
          <h2 className="text-2xl my-2 text-[#7843E8] font-otf ">
            Create Project
          </h2>
          <label className="text-sm font-thin my-2">Project Name</label>
          <input
            type="text"
            name="projectName"
            onChange={handleChange}
            placeholder="Enter event name"
            className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]  "
          />
          <label className="text-sm font-thin my-2">Project Description</label>
          <input
            type="text"
            placeholder="Enter event description"
            name="projectDescription"
            onChange={handleChange}
            className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]"
          />
          <label className="text-sm font-thin my-2">Pledge Price</label>
          <input
            type="number"
            name="projectPledgePrice"
            onChange={handleChange}
            placeholder="Enter ticket price"
            className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%] "
          />
          <label className="text-sm font-thin my-2" for="projectImage">
            Project Image
            <Image
              src={`${
                data.projectImage ? data.projectImage : "/Image-placeholder.png"
              } `}
              width="200"
              height="200"
              alt="ticket-img"
              className="rounded-lg my-5  cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="projectImage"
            name="projectImage"
            className="hidden"
            onChange={handleChangeImg}
          />
          <button
            className="bg-[#7843E8] rounded-3xl text-white p-3 my-5 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] duration-200 font-monument_reg border border-black  w-[30%] "
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Create;
