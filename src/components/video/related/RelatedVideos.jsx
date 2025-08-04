import { useGetRelatedVideosQuery } from "../../../redux/features/api/apiSlice";
import RelatedVideoLoader from "../../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ title }) {
  const {
    data: relatedVideos,
    isLoading,
    isError,
    error,
  } = useGetRelatedVideosQuery(title);
  let content = null;
  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <Error message="No related video found" />;
  } else {
    content = relatedVideos?.map((RV) => <RelatedVideo key={RV?.id} relatedVid={RV}/>);
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
