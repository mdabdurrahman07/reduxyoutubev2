import { useGetVideosQuery } from "../../redux/features/api/apiSlice";
import Loading from "../Loading/Loading";
import Form from "./Form";


export default function EditVideo() {
    const { data: videos, isLoading, isError, error } = useGetVideosQuery();
      let content = null;
      if (isLoading) {
        content = <Loading/>
      } else if (!isLoading && isError) {
        content = <Error message={error} />;
      } else {
        content = <Form videos={videos}/>
      }
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
            <div className="w-full">
                <div className="px-4 sm:px-0 pb-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Edit video
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Please fillup the form to edit video
                    </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    {content}
                </div>
            </div>
        </div>
    );
}
