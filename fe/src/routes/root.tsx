import { useEffect, useRef, useState } from "react";

const Root = () => {
  const [playing, setPlaying] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoref = useRef<HTMLVideoElement | null>(null);

  const constraints = {
    video: true,
    audio: true,
  };

  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        setStream(stream);
        if (videoref.current) {
          videoref.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
      });

    setPlaying(true);
  };

  const stopStream = () => {
    stream?.getTracks().forEach((track) => track.stop());
  };

  return (
    <>
      <h1>hi</h1>
      <button onClick={playing ? stopStream : startStream}>{playing ? 'Stop' : 'Start'}</button>
      <video
        ref={videoref}
        autoPlay
        playsInline
        style={{ width: "100%", maxWidth: "600px" }}
      ></video>
    </>
  );
};

export default Root;
