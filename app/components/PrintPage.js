import React, { forwardRef } from "react";

const PrintPage = forwardRef((props, ref) => {
  const { timeline } = props;

  const timelineInfo = { ...timeline };

  const fixedDates = {
    homeInspectionDueDate: new Date(
      timelineInfo.homeInspectionDueDate
    ).toLocaleDateString("US-EN", { timeZone: "UTC" }),
    radonInspectionDueDate: new Date(
      timelineInfo.radonInspectionDueDate
    ).toLocaleDateString("US-EN", {
      timeZone: "UTC",
    }),
    wellWaterSepticDueDate: new Date(
      timelineInfo.wellWaterSepticDueDate
    ).toLocaleDateString("US-EN", {
      timeZone: "UTC",
    }),
    appraisalDueDate: new Date(
      timelineInfo.appraisalDueDate
    ).toLocaleDateString("US-EN", {
      timeZone: "UTC",
    }),
    loanCommitmentDueDate: new Date(
      timelineInfo.loanCommitmentDueDate
    ).toLocaleDateString("US-EN", {
      timeZone: "UTC",
    }),
    closingDate: new Date(timelineInfo.closingDate).toLocaleDateString(
      "US-EN",
      {
        timeZone: "UTC",
      }
    ),
  };

  /* 
  Example from my previous project on how I fixed date formatting without giving the wrong dates.
    entered.map((entry) => {
    entry.hours = entry.hours;
    entry.date = new Date(entry.date).toLocaleDateString("US-EN", {
      timeZone: "UTC",
    });
  });
  */

  return (
    <>
      <div
        ref={ref}
        className="bg-white text-xl w-screen h-screen flex flex-col gap-10 items-center border-orange-400 border-dashed border-4"
      >
        <div className="mt-10 text-center">
          {timelineInfo.clientName ? (
            <>
              <h1 className="text-2xl mx-3">
                Congratulations {timelineInfo.clientName} on your accepted Offer
                to Purchase! 🎉
              </h1>
            </>
          ) : (
            <>
              <h1>Congratulations on your accepted Offer to Purchase! 🎉</h1>
            </>
          )}
          <h2 className="mt-2">
            Below are the next steps to complete the purchase of your new home!
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 text-center justify-center mx-3 mt-3">
          {timelineInfo.homeInspectionDueDate ? (
            <>
              <div className="">
                <p>
                  <b>Home Inspection:</b> Please call a home inspector to
                  schedule the home inspection as soon as possible. Any
                  negotiations with respect to the report are due by{" "}
                  <b>{fixedDates.homeInspectionDueDate}</b>
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
                  by <b>{fixedDates.radonInspectionDueDate}</b>
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
                  <b>{fixedDates.wellWaterSepticDueDate}</b>
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          {timelineInfo.appraisalDueDate && timelineInfo.appraisalCheck ? (
            <>
              <div>
                <p>
                  <b>Appraisal:</b> Your lender's appraisal is due by{" "}
                  <b>{fixedDates.appraisalDueDate}</b>. You will not need to
                  take any action regarding the appraisal, besides responding to
                  any requests from your lender.
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          {timelineInfo.loanCommitmentDueDate &&
          timelineInfo.loanCommitmentCheck ? (
            <>
              <p>
                <b>Loan Commitment:</b> Your lender's Loan Commitment is due by{" "}
                <b>{fixedDates.loanCommitmentDueDate}</b>. You will not need to
                take any action regarding your Loan Commitment, besides
                responding to any requests from your lender.
              </p>
            </>
          ) : (
            <></>
          )}

          <div>
            <p>
              <b>Utilities:</b> As we near the closing date (
              <b>{fixedDates.closingDate}</b>), please remember to contact any
              utility companies & transfer them into your name, effective on the
              closing date.
            </p>
          </div>

          <div>
            <p>
              <b>Closing:</b> Bring your driver's license to the closing, which
              we will schedule the official date and time for as we near the end
              of the transaction.
            </p>
          </div>

          <div className="text-center">
            <p>
              Again, Congratulations! Please do not hesitate to call or text
              with any questions you may have as we go through this process
              together!
            </p>
          </div>
        </div>

        {timelineInfo.branding === "Max" ? (
          <>
            <div className="text-center absolute inset-x-1 bottom-1">
              <div className="flex justify-center gap-12 items-end">
                <div>
                  <img className="h-24 mb-5" src="/Max.png"></img>
                </div>
                <div className="flex flex-col mb-5">
                  <p>Maximilian Holzmann</p>
                  <p>max.holzmann@firstweber.com</p>
                  <p>(920) 266 - 3995</p>
                </div>
                <div>
                  <img className="h-28 mb-5" src="/FWBlackH.png"></img>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {timelineInfo.branding === "Christine" ? (
          <>
            <div className="text-center absolute inset-x-1 bottom-1">
              <div className="flex justify-center gap-24 items-end">
                <div>
                  <img className="h-40" src="/ChristineTransparent.png"></img>
                </div>
                <div className="flex flex-col mb-5">
                  <p className="font-bold">Christine Schiek</p>
                  <p>schiekc@firstweber.com</p>
                  <p>(920) 948 - 6533</p>
                </div>
                <div>
                  <img className="h-32 mb-5" src="/FWBlackH.png"></img>
                </div>
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
