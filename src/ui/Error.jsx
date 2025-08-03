import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="w-full flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12 text-3xl">
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
