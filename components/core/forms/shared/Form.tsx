"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import { Divide } from "lucide-react";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Input Format",
  },
  {
    id: "Step 2",
    name: "personal info",
    fields: ["Name", "RollNumber", "Gender", "Year"],
  },
  {
    id: "Step 3",
    name: "technical info",
    fields: ["YearOfRecruitment", "Stream", "Domain"],
  },
  { id: "Step 4", name: "Complete" },
];

const Form = ({ onClickFunction }: any) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };
  return (
    <div className="flex flex-col space-y-[1.4rem]">
      <div className="h-[40.6rem] min-h-[40.6rem] w-full rounded-[0.3rem] border border-[#0000001f]">
        {currentStep === 0 && (
          <div className="flex h-full w-full items-center justify-center border">
            <div className="flex w-[13.1rem] flex-col items-center justify-center">
              <div className="flex w-full items-center justify-between rounded-[0.6rem] bg-black px-[1.4rem] py-[0.8rem]">
                <div className="cursor-pointer text-[1.4rem] font-medium leading-[2.4rem] text-white">
                  Upload CSV
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                >
                  <path
                    d="M1 1L5 6L1 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex w-full items-center justify-center gap-[0.2rem]">
                <div className="mt-1 w-full border-b text-[#94A3B8B2]"></div>
                <div className="text-[1.2rem] font-medium leading-[2.4rem] text-[#94A3B8B2]">
                  or
                </div>
                <div className="mt-1 w-full border-b text-[#94A3B8B2]"></div>
              </div>

              <div
                className="w-full cursor-pointer rounded-[0.6rem] border border-black px-[1.6rem] py-[0.8rem] text-[1.4rem] font-medium leading-[2.4rem]"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Enter Manually
              </div>
            </div>
          </div>
        )}

        <form className=" h-full w-full " onSubmit={handleSubmit(processForm)}>
          {currentStep === 1 && (
            <>
              <motion.div
                initial={{ x: delta >= 0 ? "2%" : "-2%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex h-full w-full flex-col space-y-[2.1rem] px-[2.6rem] py-[1.85rem]">
                  <div className="relative flex flex-col space-y-[0.6rem]">
                    <label
                      htmlFor="Name"
                      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                    >
                      Name
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        id="Name"
                        {...register("Name")}
                        autoComplete="given-name"
                        placeholder="Name"
                        className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                      />
                      {errors.Name?.message && (
                        <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                          {errors.Name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative flex flex-col space-y-[0.6rem]">
                    <label
                      htmlFor="RollNumber"
                      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                    >
                      Roll Number
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        id="RollNumber"
                        {...register("RollNumber")}
                        autoComplete="identical-name"
                        placeholder="Roll Number"
                        className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                      />
                      {errors.RollNumber?.message && (
                        <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                          {errors.RollNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative flex flex-col space-y-[0.6rem]">
                    <label
                      htmlFor="Gender"
                      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                    >
                      Gender
                    </label>
                    <div className="mt-2">
                      <input
                        id="Gender"
                        type="Gender"
                        {...register("Gender")}
                        autoComplete="Gender"
                        placeholder="Gender"
                        className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                      />
                      {errors.Gender?.message && (
                        <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                          {errors.Gender.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative flex flex-col space-y-[0.6rem]">
                    <label
                      htmlFor="Year"
                      className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                    >
                      Year
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        id="Year"
                        {...register("Year")}
                        autoComplete="family-name"
                        placeholder="Year"
                        className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                      />
                      {errors.Year?.message && (
                        <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                          {errors.Year.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="flex h-full w-full flex-col">
                <motion.div
                  initial={{ x: delta >= 0 ? "2%" : "-2%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center space-y-[2.1rem] px-[2.6rem]">
                    <div className="relative flex w-full flex-col space-y-[0.6rem]">
                      <label
                        htmlFor="YearOfRecruitment"
                        className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                      >
                        Year of Recruitment
                      </label>
                      <div className="w-full">
                        <input
                          type="text"
                          id="YearOfRecruitment"
                          {...register("YearOfRecruitment")}
                          autoComplete="YearOfRecruitment"
                          placeholder="YearOfRecruitment"
                          className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                        />
                        {errors.YearOfRecruitment?.message && (
                          <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                            {errors.YearOfRecruitment.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col space-y-[0.6rem]">
                      <label
                        htmlFor="Stream"
                        className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                      >
                        Stream
                      </label>
                      <div className="w-full">
                        <input
                          type="text"
                          id="Stream"
                          {...register("Stream")}
                          autoComplete="identical-name"
                          placeholder="Stream"
                          className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                        />
                        {errors.Stream?.message && (
                          <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                            {errors.Stream.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative flex w-full flex-col space-y-[0.6rem]">
                      <label
                        htmlFor="Domain"
                        className="text-[1.4rem] font-medium leading-[2rem] text-[#0F172A]"
                      >
                        Domain
                      </label>
                      <div className="mt-2">
                        <input
                          id="Domain"
                          type="Domain"
                          {...register("Domain")}
                          autoComplete="Domain"
                          placeholder="Domain"
                          className="w-full rounded-[0.6rem] border border-[#94A3B8] px-[1.2rem] py-[0.8rem] text-[1.6rem] leading-[2.4rem] text-[#94A3B8] outline-none"
                        />
                        {errors.Domain?.message && (
                          <p className="absolute -bottom-[1.4rem] left-[0rem] mt-2 text-[1rem] text-red-400">
                            {errors.Domain.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <h2 className="text-4xl font-bold">Complete</h2>
                <p className="text-2xl font-medium text-[#94A3B8]">
                  Thank you for your submission.
                </p>
              </div>
            </>
          )}
        </form>
      </div>
      {currentStep === 1 && <Button onClickFunction={next}>Next</Button>}
      {currentStep === 2 && <Button onClickFunction={next}>Submit</Button>}
      {currentStep === 3 && (
        <Button onClickFunction={onClickFunction}>Complete</Button>
      )}
      {currentStep !== 1 && currentStep !== 2 && currentStep !== 3 && (
        <div className="h-[4.16rem]"></div>
      )}
    </div>
  );
};

export default Form;
