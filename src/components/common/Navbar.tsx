import { ConnectKitButton } from "connectkit";
import { X } from "lucide-react";
import Image from "next/image";
import Router from "next/router";
import { Avatar } from "connectkit";
import useModal from "@/hooks/useModal";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <>
      <div className="relative z-20 flex  w-full items-center border-b border-gray-custom-100 bg-gray-custom-100/100 md:px-[16px] px-[10px] py-[12px] text-[16px] font-medium ">
        <div className="flex w-full items-center justify-between">
          <div onClick={() => Router.push("/")}>
            <img src="/dexsynclogo.svg" className="max-h-[50px] -mb-[5px]" alt="" />
          </div>
          <div className="flex space-x-[8px]">
            <div>
              <ConnectKitButton.Custom>
                {({
                  isConnected,
                  isConnecting,
                  show,
                  hide,
                  address,
                  truncatedAddress,
                  ensName,
                  chain,
                }) => {
                  return (
                    <button
                      onClick={show}
                      className={`bg-sky-500 hover:bg-sky-700-500 hover:to-blue-500 border rounded-full flex items-center  border text-[14px]  duration-300 hover:bg-white/50 md:text-[16px] ${
                        !isConnected
                          ? " border border-transparent"
                          : "  border-gray-custom-300 bg-gray-custom-300"
                      }  px-[12px] py-[8px] md:px-[16px] md:py-[8px]`}
                    >
                      {address && (
                        <div className="pr-[8px]">
                          <Avatar size={24} address={address} />
                        </div>
                      )}

                      {isConnected
                        ? truncatedAddress
                        : isConnecting
                        ? "Connecting..."
                        : "Connect Wallet"}
                    </button>
                  );
                }}
              </ConnectKitButton.Custom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
