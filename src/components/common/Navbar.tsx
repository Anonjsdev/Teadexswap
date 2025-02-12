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
      <div className="relative z-20 flex  w-full items-center border-#ffffff bg-#000000 md:px-[16px] px-[10px] py-[12px] text-[16px] font-medium ">
        <div className="flex w-full items-center justify-between">
          <div onClick={() => Router.push("/")}>
            <img src="/logo.png" className="max-h-[35px] -mb-[5px]" alt="" />
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
                      className={`bg-[#ffffff] hover:bg-[#f9fafa] hover:bg-[#e3e6e8] border rounded-full flex items-center  border text-[14px]  duration-300 hover:/50 md:text-[16px] ${
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
