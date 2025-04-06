import ModalVideo from "react-modal-video";

const VideoPopup = ({isVideoOpen,setIsVideoOpen,videoId = "yJg-Y5byMMw"}) => {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopup;
