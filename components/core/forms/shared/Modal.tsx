import React from "react";
import { MODAL } from "@/constants";
import Form from "./Form";

interface ModalProps {
  isvisible: boolean;
  onClose: () => void;
  value: string;
}

const Modal: React.FC<ModalProps> = ({ isvisible, onClose, value }) => {
  if (!isvisible) return null;

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-75 ">
      <div className="w-[43.6rem] flex flex-col">
        <button onClick={onClose} className="text-white text-xl self-end">
          X
        </button>
        <div className="bg-white rounded-[0.8rem] border border-[#CBD5E1] px-[1.7rem] space-y-[1.2rem] pt-[2.5rem] pb-[1.6rem] ">
          {MODAL.filter((item) => item.value.includes(value)).map(
            (filteredName) => (
              <div key={filteredName.value} className="flex flex-col space-y-[0.8rem] w-[36.7rem] px-[0.8rem]">
                <div className="text-[1.8rem] font-semibold leading-[2.8rem]">{filteredName.topic}</div>
                <div className="text-[1.4rem] text-[#64748B]">{filteredName.description}</div>
              </div>
            )
          )}
          <Form onClickFunction={onClose}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
