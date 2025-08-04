import { useParams } from "react-router-dom";
import Description from "../components/video/Description";
import Player from "../components/video/Player";
import RelatedVideos from "../components/video/related/RelatedVideos";
import { useGetVideoQuery } from "../redux/features/api/apiSlice";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import Error from "../ui/Error";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";

export default function Video() {
  const { id } = useParams();
  const { data: video, isLoading, isError, error } = useGetVideoQuery(id);
  let content = null;
  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isLoading && !isError && video.length === 0) {
    content = <Error message="No video found" />;
  } else {
    content = (
      <>
        <Player title={video?.title} link={video?.link}/>
        <Description title={video?.title} date={video?.date} description={video?.description}/>
      </>
    );
  }
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>

          {video?.id ? (
            <RelatedVideos />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error message={error} />
          )}
        </div>
      </div>
    </section>
  );
}
