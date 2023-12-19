"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { FormDataSchemaMember, FormDataSchemaEvent } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";

type InputsMember = z.infer<typeof FormDataSchemaMember>;
type InputsEvent = z.infer<typeof FormDataSchemaEvent>;

const steps1 = {
  member: [
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
  ],
  event: [
    {
      id: "Step 1",
      name: "Input Format",
    },
    {
      id: "Step 2",
      name: "personal info",
      fields: ["Name", "Date", "Domain", "TargetYear"],
    },
    {
      id: "Step 3",
      name: "technical info",
      fields: ["ExpectedParticipants", "ActualParticipants", "Thumbnail"],
    },
    { id: "Step 4", name: "Complete" },
  ],
  sponsor: [
    {
      id: "Step 1",
      name: "Input Format",
    },
    {
      id: "Step 2",
      name: "personal info",
      fields: ["Name", "Date", "Domain", "TargetYear"],
    },
    {
      id: "Step 3",
      name: "technical info",
      fields: ["ExpectedParticipants", "ActualParticipants", "Thumbnail"],
    },
    { id: "Step 4", name: "Complete" },
  ],
};

interface FormProps {
  value: keyof typeof steps1; // Ensure value is one of the keys of steps1
  onClickFunction: any;
}

const Form: React.FC<FormProps> = ({ value, onClickFunction }) => {
  const [currentData, setCurrentData] = useState<any>(null);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  useEffect(() => {
    setCurrentData(steps1[value]);
  }, [value]);
  // console.log(currentData);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<InputsMember>({
    resolver: zodResolver(FormDataSchemaMember),
  });

  const {
    register: register2, // Use register from the second hook
    handleSubmit: handleSubmit2,
    reset: reset2,
    trigger: trigger2,
    formState: { errors: errors2 },
  } = useForm<InputsEvent>({
    resolver: zodResolver(FormDataSchemaEvent),
  });

  const processForm: SubmitHandler<InputsMember> = (data) => {
    console.log(data);
    reset();
  };
  const processForm2: SubmitHandler<InputsEvent> = (data) => {
    console.log(data);
    reset2();
  };

  type FieldName = keyof InputsMember;
  type FieldName2 = keyof InputsEvent;

  const next = async () => {
    const fields = currentData[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    const output2 = await trigger2(fields as FieldName2[], {
      shouldFocus: true,
    });

    if (!output && value === "member") return;
    if (!output2 && (value === "event" || value === "sponsor")) return;

    if (currentStep < currentData.length - 1) {
      if (currentStep === currentData.length - 2 && value === "member") {
        await handleSubmit(processForm)();
      }
      if (
        currentStep === currentData.length - 2 &&
        (value === "event" || value === "sponsor")
      ) {
        await handleSubmit2(processForm2)();
      }

      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-[1.4rem]">
      <div className="h-[40.6rem] min-h-[40.6rem] w-full rounded-[0.3rem] border border-[#0000001f]">
        {currentStep === 0 && (
          <div className="flex h-full w-full items-center justify-center border">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-between space-x-[2rem] rounded-[0.6rem] bg-black px-[1.4rem] py-[0.8rem]">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                className="cursor-pointer rounded-[0.6rem] border border-black px-[1.6rem] py-[0.8rem] text-[1.4rem] font-medium leading-[2.4rem]"
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
                  {value === "member" && (
                    <>
                      <InputField
                        label="Name"
                        id="Name"
                        register={register}
                        placeholder="Name"
                        error={errors.Name?.message}
                      />
                      <InputField
                        label="Roll Number"
                        id="RollNumber"
                        register={register}
                        placeholder="Roll Number"
                        error={errors.RollNumber?.message}
                      />
                      <SelectField
                        label="Gender"
                        id="Gender"
                        register={register}
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "others", label: "Others" },
                        ]}
                        error={errors.Gender?.message}
                      />
                      <SelectField
                        label="Year"
                        id="Year"
                        register={register}
                        options={[
                          { value: "1st", label: "1st" },
                          { value: "2nd", label: "2nd" },
                          { value: "3rd", label: "3rd" },
                        ]}
                        error={errors.Year?.message}
                      />
                    </>
                  )}
                  {(value === "event" || value === "sponsor") && (
                    <>
                      <InputField
                        label="Name"
                        id="Name"
                        register={register2}
                        placeholder="Name"
                        error={errors2.Name?.message}
                      />
                      <InputField
                        label="Date"
                        id="Date"
                        register={register2}
                        placeholder="DD/MM/YY"
                        error={errors2.Date?.message}
                      />
                      <SelectField
                        label="Domain"
                        id="Domain"
                        register={register2}
                        options={[
                          { value: "all", label: "All" },
                          { value: "web", label: "Web" },
                          { value: "app", label: "App" },
                          { value: "cloud", label: "Cloud" },
                          { value: "cyber", label: "Cyber" },
                          { value: "ml", label: "Machine Learning" },
                          { value: "video_editing", label: "Video Editing" },
                          {
                            value: "graphics_designing",
                            label: "Graphics Designing",
                          },
                          // Add other options as needed
                        ]}
                        error={errors2.Domain?.message}
                      />
                      <SelectField
                        label="Target Year"
                        id="TargetYear"
                        register={register2}
                        options={[
                          { value: "1st", label: "1st" },
                          { value: "2nd", label: "2nd" },
                          { value: "3rd", label: "3rd" },
                          { value: "4th", label: "4th" },
                        ]}
                        error={errors2.TargetYear?.message}
                      />
                    </>
                  )}
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
                    {value === "member" && (
                      <>
                        <SelectField
                          label="Year of Recruitment"
                          id="YearOfRecruitment"
                          register={register}
                          options={[
                            { value: "2018-2019", label: "2018-2019" },
                            { value: "2019-2020", label: "2019-2020" },
                            { value: "2020-2021", label: "2020-2021" },
                            { value: "2021-2022", label: "2021-2022" },
                            { value: "2022-2023", label: "2022-2023" },
                          ]}
                          error={errors.YearOfRecruitment?.message}
                        />
                        <SelectField
                          label="Stream"
                          id="Stream"
                          register={register}
                          options={[
                            { value: "B.tech", label: "B.Tech" },
                            // (other options)
                          ]}
                          error={errors.Stream?.message}
                        />
                        <SelectField
                          label="Domain"
                          id="Domain"
                          register={register}
                          options={[
                            { value: "all", label: "All" },
                            { value: "web", label: "Web" },
                            { value: "app", label: "App" },
                            { value: "cloud", label: "Cloud" },
                            { value: "cyber", label: "Cyber" },
                            { value: "ml", label: "Machine Learning" },
                            { value: "video_editing", label: "Video Editing" },
                            {
                              value: "graphics_designing",
                              label: "Graphics Designing",
                            },
                            // Add other options as needed
                          ]}
                          error={errors.Domain?.message}
                        />
                      </>
                    )}
                    {(value === "event" || value === "sponsor") && (
                      <div className="flex w-full flex-col space-y-[2.1rem]">
                        <div className="flex space-x-[2rem]">
                          <InputField
                            label="Participants"
                            id="ExpectedParticipants"
                            register={register2}
                            placeholder="Expected"
                            error={errors2.ExpectedParticipants?.message}
                          />
                          <div className="mt-auto">
                            <InputField
                              label=""
                              id="ActualParticipants"
                              register={register2}
                              placeholder="Actual"
                              error={errors2.ActualParticipants?.message}
                            />
                          </div>
                        </div>

                        <InputField
                          label="Thumbnail"
                          id="Thumbnail"
                          register={register2}
                          placeholder="Thumbnail"
                          error={errors2.Thumbnail?.message}
                        />
                      </div>
                    )}
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
      {currentStep === 1 && (
        <div className="flex items-center justify-between">
          <Button onClickFunction={prev}>Prev</Button>
          <Button onClickFunction={next}>Next</Button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex items-center justify-between">
          <Button onClickFunction={prev}>Prev</Button>
          <Button onClickFunction={next}>Submit</Button>
        </div>
      )}
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
