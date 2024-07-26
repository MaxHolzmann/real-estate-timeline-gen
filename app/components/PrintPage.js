import React, { forwardRef } from "react";

const PrintPage = forwardRef((props, ref) => {
  const { timeline } = props;

  const timelineInfo = { ...timeline };

  return (
    <>
      <div
        ref={ref}
        className="bg-white border-4 border-orange-400  text-xl w-screen h-screen flex flex-col gap-10 items-center"
      >
        <h1>TEST PRINTS!</h1>
      </div>

      {/* Conditional rendering for all optional portions of the timeline. */}
    </>
  );
});

export default PrintPage;
