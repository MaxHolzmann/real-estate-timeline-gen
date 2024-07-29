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
        <h1>
          Congratulations {timelineInfo.clientName} on your accepted Offer to
          Purchase!
        </h1>
        <h2>
          Below are the next steps to complete the purchase of your new home!
        </h2>

        {timelineInfo.homeInspectionDueDate ? (
          <>
            <div>
              <p>
                <b>Home Inspection:</b> Please call a home inspector to schedule
                the home inspection as soon as possible. Any negotiations with
                respect to the report are due by{" "}
                <b>{timelineInfo.homeInspectionDueDate}</b>
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
                <b>Radon Test:</b> The Radon test and any negotiations are due
                by <b>{timelineInfo.radonInspectionDueDate}</b>
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
                <b>Well, Water & Septic Tests:</b> Any tests or negotiations
                with respect to the Well / Water / Septic are due by{" "}
                <b>{timelineInfo.wellWaterSepticDueDate}</b>
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
                <b>Appraisal:</b> Your lender's appraisal is due by{" "}
                <b>{timelineInfo.appraisalDueDate}</b>. You will not need to
                take any action regarding the appraisal, besides responding to
                any requests from your lender.
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.loanCommitmentDueDate ? (
          <>
            <p>
              <b>Appraisal:</b> Your lender's Loan Commitment is due by{" "}
              <b>{timelineInfo.loanCommitmentDueDate}</b>. You will not need to
              take any action regarding your Loan Commitment, besides responding
              to any requests from your lender.
            </p>
          </>
        ) : (
          <></>
        )}

        <div>
          <p>
            <b>Utilities:</b> As we near the closing date (
            <b>{timeline.closingDate}</b>), please remember to contact &
            transfer the utilities into your name, effective on the closing
            date.
          </p>
        </div>

        <div>
          <p>
            <b>Closing:</b> Bring your driver's license to the closing, which we
            will schedule the official date / time for as we near the end of the
            transaction.
          </p>
        </div>

        <div>
          <p>
            Again, Congratulations! Please do not hesitate to call or text with
            any questions you may have as we go through this process together!
          </p>
        </div>

        {timelineInfo.branding === "Max" ? (
          <>
            <div className="text-center absolute inset-x-1 bottom-1">
              <div className="flex flex-col">
                <p>Maximilian Holzmann</p>
                <p>max.holzmann@firstweber.com</p>
                <p>(920) 266 - 3995</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.branding === "Christine" ? (
          <>
            <div className="text-center absolute inset-x-1 bottom-1">
              <div className="flex flex-col">
                <p>Christine Schiek</p>
                <p>schiekc@firstweber.com</p>
                <p>(920) 948 - 6533</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
});

export default PrintPage;
