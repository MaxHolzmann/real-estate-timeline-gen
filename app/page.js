"use client";
import { useReactToPrint } from "react-to-print";
import { useState, useEffect, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import PrintPage from "./components/PrintPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [timelineInfo, setTimelineInfo] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const brandingOptions = [
    { id: 1, name: "Max" },
    { id: 2, name: "Christine" },
  ];

  const responsibilityOptions = [
    { id: 1, name: "Buyer" },
    { id: 2, name: "Seller" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setTimelineInfo(data);
    setIsLoading(true);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  function HomeInspection({ control }) {
    const homeInspectionCheck = useWatch({
      control,
      name: "homeInspectionCheck",
    });

    if (homeInspectionCheck) {
      return (
        <>
          <label>Home Inspection Due Date</label>
          <input
            type="date"
            className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
            {...register("homeInspectionDueDate")}
          ></input>
          <label>Buyer or Seller Responsibility?</label>

          <div className="flex gap-3 py-3 px-4 border-b border-t">
            <label>Buyer</label>
            <input
              type="radio"
              value="buyer"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              defaultChecked
              {...register("homeInspectionBuyerOrSeller")}
            ></input>
          </div>
          <div className="flex gap-3 py-3 border-b px-4">
            <label className="">Seller</label>
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              value="seller"
              {...register("homeInspectionBuyerOrSeller")}
            ></input>
          </div>
        </>
      );
    }
  }

  function RadonInspection({ control }) {
    const radonInspectionCheck = useWatch({
      control,
      name: "radonInspectionCheck",
    });

    if (radonInspectionCheck) {
      return (
        <>
          <label>Radon Inspection Due Date</label>
          <input
            type="date"
            className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
            {...register("radonInspectionDueDate")}
          ></input>
          <label>Buyer or Seller Responsibility?</label>
          <div className="flex gap-3 py-3 px-4 border-b border-t">
            <label>Buyer</label>
            <input
              type="radio"
              value="buyer"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              defaultChecked
              {...register("radonInspectionBuyerOrSeller")}
            ></input>
          </div>
          <div className="flex gap-3 py-3 border-b px-4">
            <label className="">Seller</label>
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              value="seller"
              {...register("radonInspectionBuyerOrSeller")}
            ></input>
          </div>
        </>
      );
    }
  }

  function WellWaterSeptic({ control }) {
    const wellWaterSepticCheck = useWatch({
      control,
      name: "wellWaterSepticCheck",
    });

    if (wellWaterSepticCheck) {
      return (
        <>
          <label>Well / Water / Septic Inspection Due Date</label>
          <input
            type="date"
            className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
            {...register("wellWaterSepticDueDate")}
          ></input>
          <label>Buyer or Seller Responsibility?</label>
          <div className="flex gap-3 py-3 px-4 border-b border-t">
            <label>Buyer</label>
            <input
              type="radio"
              value="buyer"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              {...register("wellWaterSepticBuyerOrSeller")}
            ></input>
          </div>
          <div className="flex gap-3 py-3 border-b px-4">
            <label className="">Seller</label>
            <input
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              value="seller"
              defaultChecked
              {...register("wellWaterSepticBuyerOrSeller")}
            ></input>
          </div>
        </>
      );
    }
  }

  function Appraisal({ control }) {
    const appraisalCheck = useWatch({
      control,
      name: "appraisalCheck",
    });

    if (appraisalCheck) {
      return (
        <>
          <label>Appraisal Due Date</label>
          <input
            type="date"
            className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
            {...register("appraisalDueDate")}
          ></input>
        </>
      );
    }
  }

  function LoanCommitment({ control }) {
    const loanCommitmentCheck = useWatch({
      control,
      name: "loanCommitmentCheck",
    });

    if (loanCommitmentCheck) {
      return (
        <>
          <label>Loan Commitment Due Date</label>
          <input
            type="date"
            className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
            {...register("loanCommitmentDueDate")}
          ></input>
        </>
      );
    }
  }

  useEffect(() => {
    if (isLoading == true) {
      handlePrint();
      setIsLoading(false);
    }
  }, [isLoading]);

  /* 
Additional ideas to add:
Buyer or Seller Name field
  options for branding
  
  */

  /* REQUIRED example */
  /* <input
            className="border-2"
            {...register("exampleRequired", { required: true })}
          /> */

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="">
          <h1 className="text-6xl text-center m-5">
            Real Estate Transaction Timeline Generator
          </h1>
          <h2 className="text-2xl text-center mb-10">
            Fill out the information below to generate a timeline PDF for your
            client.
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-orange-200 rounded-lg flex flex-col items-center w-1/2 text-center p-5"
        >
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Branding Options
            </legend>
            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
              {brandingOptions.map((side, sideIdx) => (
                <div key={sideIdx} className="relative flex items-start py-4">
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <label className="select-none font-medium text-gray-900">
                      {side.name}
                    </label>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <input
                      defaultChecked={side.id === null}
                      id={`side-${side.id}`}
                      value={side.name}
                      name="plan"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      {...register("branding")}
                    />
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Client Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("clientName")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center mt-5 border-b-2 border-t-2 border-orange-200 w-full py-10">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Home Inspection?
            </label>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              {...register("homeInspectionCheck")}
            />
            <HomeInspection control={control}></HomeInspection>
          </div>

          <div className="flex flex-col gap-2 p-2 items-center mt-5 border-b-2 border-orange-200 w-full py-10">
            <label>Radon Test?</label>
            <input
              type="checkbox"
              className="border-2"
              {...register("radonInspectionCheck")}
            />
            <RadonInspection control={control}></RadonInspection>
          </div>

          <div className="flex flex-col gap-2 p-2 items-center mt-5 border-b-2 border-orange-200 w-full py-10">
            <label>Well / Water / Septic Test?</label>
            <input
              type="checkbox"
              className="border-2"
              {...register("wellWaterSepticCheck")}
            ></input>
            <WellWaterSeptic control={control}></WellWaterSeptic>
          </div>

          <div className="flex flex-col gap-2 p-2 items-center mt-5 border-b-2 border-orange-200 w-full py-10">
            <label>Appraisal Contingency?</label>
            <input
              type="checkbox"
              className="border-2"
              {...register("appraisalCheck")}
            ></input>
            <Appraisal control={control}></Appraisal>
          </div>

          <div className="flex flex-col gap-2 p-2 items-center mt-5 border-b-2 border-orange-200 w-full py-10">
            <label>Financing Contingency?</label>
            <input
              type="checkbox"
              className="border-2"
              {...register("loanCommitmentCheck")}
            ></input>
            <LoanCommitment control={control}></LoanCommitment>
          </div>

          <div className="flex flex-col items-center gap-2 m-5">
            <label>Closing Date</label>
            <input
              type="date"
              className="rounded-md p-2 border-2 border-orange-200 shadow-sm"
              {...register("closingDate")}
            ></input>
          </div>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <input
            className="py-2 px-3 mt-5 bg-orange-400 text-white rounded-md shadow-md border-orange-400 border-2 hover:bg-white hover:text-orange-400 hover:scale-105"
            type="submit"
            value="Generate PDF"
          ></input>
        </form>

        <div className="hidden">
          <PrintPage ref={componentRef} timeline={timelineInfo}></PrintPage>
        </div>
      </div>
    </>
  );
}
