// eslint-disable-next-line no-unused-vars
import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    </div>
  );
}
