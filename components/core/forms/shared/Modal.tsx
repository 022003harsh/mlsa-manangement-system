import React from "react";
import { MODAL } from "@/constants";
import Form from "./Form";
import Button from "./Button";

interface ModalProps {
  isvisible: boolean;
  onClose: () => void;
  value: string;
  feature: string;
}

const Modal: React.FC<ModalProps> = ({
  isvisible,
  onClose,
  value,
  feature,
}) => {
  if (!isvisible) return null;

  return (
    <div
      className={` fixed flex justify-center items-center inset-0 bg-black  ${
        feature === "confirmation" ? "bg-opacity-5" : "bg-opacity-75"
      } `}
    >
      <div className="w-[43.6rem] flex flex-col">
        <button onClick={onClose} className="text-white text-xl self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="bg-white rounded-[0.8rem] border border-[#CBD5E1] px-[1.7rem] space-y-[1.2rem] pt-[2.5rem] pb-[1.6rem] ">
          {feature === "form" &&
            MODAL.filter((item) => item.value.includes(value)).map(
              (filteredName) => (
                <div
                  key={filteredName.value}
                  className="flex flex-col space-y-[0.8rem] w-[36.7rem] px-[0.8rem]"
                >
                  <div className="text-[1.8rem] font-semibold leading-[2.8rem]">
                    {filteredName.topic}
                  </div>
                  <div className="text-[1.4rem] text-[#64748B]">
                    {filteredName.description}
                  </div>
                </div>
              )
            )}
          {feature === "form" && <Form onClickFunction={onClose} />}
          {feature === "confirmation" && (
            <div className="flex flex-col space-y-[2rem]">
              <div>
              <div className="text-[2rem] text-black">Delete Confirmation</div>
              <div className="border border-b"></div>
              </div>
              
              <div className="text-[1.5rem] text-pallete-500">Do u want to delete member {value} ?</div>
              <div className="flex justify-between items-center">
              <Button onClickFunction={onClose}>Cancel</Button>
              <Button onClickFunction={onClose}>Delete</Button>  
              {/* remove on close from it */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
