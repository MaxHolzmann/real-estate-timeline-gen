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
          <input type="date" {...register("homeInspectionDueDate")}></input>
          <label>Buyer or Seller Responsibility?</label>
          <input
            type="radio"
            value="buyer"
            {...register("homeInspectionBuyerOrSeller")}
          ></input>
          <input
            type="radio"
            value="seller"
            {...register("homeInspectionBuyerOrSeller")}
          ></input>
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
          <input type="date" {...register("radonInspectionDueDate")}></input>
          <label>Buyer or Seller Responsibility?</label>
          <input
            type="radio"
            value="buyer"
            {...register("radonInspectionBuyerOrSeller")}
          ></input>
          <input
            type="radio"
            value="seller"
            {...register("radonInspectionBuyerOrSeller")}
          ></input>
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
          <input type="date" {...register("wellWaterSepticDueDate")}></input>
          <label>Buyer or Seller Responsibility?</label>
          <input
            type="radio"
            value="buyer"
            {...register("wellWaterSepticBuyerOrSeller")}
          ></input>
          <input
            type="radio"
            value="seller"
            {...register("wellWaterSepticBuyerOrSeller")}
          ></input>
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
          <input type="date" {...register("appraisalDueDate")}></input>
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
          <input type="date" {...register("loanCommitmentDueDate")}></input>
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
  PARTS/OPTIONS OF THE TIMELINE:
  seller or buyer represent
  accepted offer date?
  Home inspection?
  Radon Test?

  well / water / septic?
  Utilities reminder!
  Loan Commitment? 
  Appraisal DATE?
  TENATIVE CLOSING DATE, MENTION SUBJECT TO CHANGE.

  options for branding
  
  */

  /* REQUIRED example */
  /* <input
            className="border-2"
            {...register("exampleRequired", { required: true })}
          /> */

  return (
    <>
      <div>
        <div className="">
          <h1 className="">Real Estate Transaction Timeline Generator</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 flex flex-col"
        >
          <input
            type="checkbox"
            className="border-2"
            {...register("homeInspectionCheck")}
          />
          <HomeInspection control={control}></HomeInspection>

          <input
            type="checkbox"
            className="border-2"
            {...register("radonInspectionCheck")}
          />
          <RadonInspection control={control}></RadonInspection>

          <input
            type="checkbox"
            className="border-2"
            {...register("wellWaterSepticCheck")}
          ></input>
          <WellWaterSeptic control={control}></WellWaterSeptic>

          <input
            type="checkbox"
            className="border-2"
            {...register("appraisalCheck")}
          ></input>
          <Appraisal control={control}></Appraisal>

          <input
            type="checkbox"
            className="border-2"
            {...register("loanCommitmentCheck")}
          ></input>
          <LoanCommitment control={control}></LoanCommitment>

          <input
            type="date"
            className="border-2"
            {...register("closingDate")}
          ></input>

          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <input className="rounded-md p-2 shadow-md " type="submit" />
        </form>

        <div className="hidden">
          <PrintPage ref={componentRef} timeline={timelineInfo}></PrintPage>
        </div>
      </div>
    </>
  );
}
