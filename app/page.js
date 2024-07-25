"use client";
import { useReactToPrint } from "react-to-print";
import { useState, useEffect, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  function HomeInspection({ control }) {
    const homeInspectionCheck = useWatch({
      control,
      name: "homeInspectionCheck",
    });

    if (homeInspectionCheck) {
      return (
        <>
          <div>CHECKED</div>
        </>
      );
    }
  }

  useEffect(() => {
    if (isLoading == true) {
      handlePrint();
    }
  }, [isLoading]);

  /* 
  PARTS/OPTIONS OF THE TIMELINE:
  Home inspection?
  Radon Test?
  well / water / septic?
  Utilities (ALWAYS)
  Loan Commitment? 
  Appraisal DATE?
  TENATIVE CLOSING DATE, MENTION SUBJECT TO CHANGE.

  options for branding
  
  */

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
            className="border-2"
            defaultValue="test"
            {...register("example")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="border-2"
            {...register("exampleRequired", { required: true })}
          />

          <input
            type="checkbox"
            className="border-2"
            {...register("homeInspectionCheck", { required: true })}
          />
          <HomeInspection control={control}></HomeInspection>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="rounded-md p-2 shadow-md " type="submit" />
        </form>
      </div>
    </>
  );
}
