'use client';

import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => console.log(error), [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center font-bold">Oops, Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-500"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </main>
  );
};

export default Error;
