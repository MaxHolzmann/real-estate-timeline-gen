import React, { forwardRef } from "react";

const PrintPage = forwardRef((props, ref) => {
  const { timeline } = props;

  const timelineInfo = { ...timeline };

  console.log("timeline info", timelineInfo);

  /* 
 ORDER OF TIMELINE 
  Home inspection?
  Radon Test?
  well / water / septic?
  appraisal
  loan commitment
  closing date, utility reminder
  */

  return (
    <>
      <div
        ref={ref}
        className="bg-white border-4 border-orange-400  text-xl w-screen h-screen flex flex-col gap-10 items-center"
      >
        <h1>Congratulations on your accepted Offer to Purchase!</h1>
        <h2>
          Below are the next steps to complete the purchase of your new home!
        </h2>

        {/* Conditional rendering for all optional portions of the timeline. */}

        {timelineInfo.homeInspectionDueDate ? (
          <>
            <div>
              <p>
                <b>Home Inspection:</b> Please call a home inspector to schedule
                the home inspection as soon as possible. Any negotiations with
                respect to the report are due by
                {timelineInfo.homeInspectionDueDate}.
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.radonInspectionDueDate ? (
          <>
            <div>
              <p>
                <b>Radon Test:</b>The Radon test and any negoations are due by{" "}
                {timelineInfo.radonInspectionDueDate}.
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.wellWaterSepticDueDate ? (
          <>
            <div>
              <p>
                <b>Well, Water & Septic Tests:</b> Any tests or negoations with
                respect to the Well / Water / Septic are due by{" "}
                {timelineInfo.wellWaterSepticDueDateDueDate}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.appraisalDueDate ? (
          <>
            <div>
              <p>
                {" "}
                <b>Appraisal:</b> Your lender's appraisal is due by{" "}
                {timelineInfo.appraisalDueDate}. You will not need to take any
                action regarding the appraisal, besides responding to any
                requests from your lender.
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.loanCommitmentDueDate ? (
          <>
            <p>
              {" "}
              <b>Appraisal:</b> Your lender's Loan Commitment is due by{" "}
              {timelineInfo.loanCommitmentDueDate}. You will not need to take
              any action regarding your Loan Commitment, besides responding to
              any requests from your lender.
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
});

export default PrintPage;
