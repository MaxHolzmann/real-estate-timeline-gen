"use client";
import { useReactToPrint } from "react-to-print";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading == true) {
      handlePrint();
    }
  }, [isLoading]);

  return (
    <>
      <div>
        <div className="">
          <h1 className="">Real Estate Transaction Timeline Generator</h1>
        </div>
      </div>
    </>
  );
}
