
// import React, { useState, useRef, useEffect } from "react";
// import "./audio.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload, faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the close (times) icon

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// }

// function AudioPlayer(props) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);


//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   useEffect(() => {
//     audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
//     audioRef.current.addEventListener("loadedmetadata", () => {
//       setDuration(audioRef.current.duration);
//     });

//     return () => {
//       audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, []);

//   const handleClose = () => {
//     // Implement this function to close the audio player
//     // You can set a state to hide the audio player or remove it from the DOM
//     props.onClose();
//   };

//   return (
//     <div className="audio">
//       <div className="close-icon" onClick={handleClose}>
//         <FontAwesomeIcon icon={faTimes} />
//       </div>
//       <div>
//         {/* <audio ref={audioRef} src={audioFile} /> */}

//         <span className="time">{formatTime(duration)}</span>
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           className="nav_audio"
//           onChange={(e) => {
//             setCurrentTime(e.target.value);
//             audioRef.current.currentTime = e.target.value;
//           }}
//         />
//         <span className="time">{formatTime(currentTime)}</span>
//       </div>
//       <div className="down_play">
//         <button onClick={togglePlay} className="play_btn btnss">
//           {isPlaying ? (
//             <FontAwesomeIcon icon={faPause} />
//           ) : (
//             <FontAwesomeIcon icon={faPlay} />
//           )}
//         </button>
//         <a href={audioFile} className="download btnss" download>
//           <FontAwesomeIcon
//             icon={faDownload}
//             className="hover:text-blue-500 cursor-pointer"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AudioPlayer;

// import React, { useState, useRef, useEffect } from "react";
// import "./audio.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload, faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// }

// function AudioPlayer(props) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const audioFile = props.audio;

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   useEffect(() => {
//     audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
//     audioRef.current.addEventListener("loadedmetadata", () => {
//       setDuration(audioRef.current.duration);
//     });

//     return () => {
//       audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, []);

//   const handleClose = () => { 
//     props.onClose();
//   };

//   return (
//     <div className="audio">
//       <div className="close-icon" onClick={handleClose}>
//         <FontAwesomeIcon icon={faTimes} />
//       </div>
//       <div>
//         <audio ref={audioRef} src={audioFile} />

//         <span className="time">{formatTime(duration)}</span>
//         <input
//           type="range"
//           min="0"
//           max={duration}
//           value={currentTime}
//           className="nav_audio"
//           onChange={(e) => {
//             setCurrentTime(e.target.value);
//             audioRef.current.currentTime = e.target.value;
//           }}
//         />
//         <span className="time">{formatTime(currentTime)}</span>
//       </div>
//       <div className="down_play">
//         <button onClick={togglePlay} className="play_btn btnss">
//           {isPlaying ? (
//             <FontAwesomeIcon icon={faPause} />
//           ) : (
//             <FontAwesomeIcon icon={faPlay} />
//           )}
//         </button>
//         <a href={audioFile} className="download btnss" download>
//           <FontAwesomeIcon
//             icon={faDownload}
//             className="hover:text-blue-500 cursor-pointer"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AudioPlayer;

import React, { useState, useRef, useEffect } from "react";
import "./audio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlay, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function AudioPlayer(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioFile = props.audio;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    // Check if audioRef.current exists before adding event listeners
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      return () => {
        // Check if audioRef.current exists before removing event listeners
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };
    }
  }, []);

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="audio">
      <div className="close-icon" onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div>
        <audio ref={audioRef} src={audioFile} />

        <span className="time">{formatTime(duration)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          className="nav_audio"
          onChange={(e) => {
            setCurrentTime(e.target.value);
            audioRef.current.currentTime = e.target.value;
          }}
        />
        <span className="time">{formatTime(currentTime)}</span>
      </div>
      <div className="down_play">
        <button onClick={togglePlay} className="play_btn btnss">
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <a href={audioFile} className="download btnss" download>
          <FontAwesomeIcon
            icon={faDownload}
            className="hover:text-blue-500 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default AudioPlayer;

