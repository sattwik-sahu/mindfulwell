import * as React from "react";

const ErrorNotFound = () => {
  return (
    <div className="ErrorNotFound">
      <section className="w-screen h-screen grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-5xl text-red-600">404 Not Found</p>
          <p className="text-2xl text-gray-500">
            Sorry, this route was not found...
          </p>
        </div>
      </section>
    </div>
  );
};

export default ErrorNotFound;
