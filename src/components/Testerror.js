import React from "react";
import { useState } from "react";

const TestError = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error("Something went wrong!");
  }
  return (
    <>
      <div className="error-btn error-top">
        <button onClick={() => setError(true)} className="btn error-boundary">
          Test ErrorBoundary
        </button>
      </div>
    </>
  );
};

export default TestError;
