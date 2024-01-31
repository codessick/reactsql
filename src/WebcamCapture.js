import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import './WebcamCapture.css';


const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: 'user',
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const[image,setImage]= useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc)
    dispatch(setCameraImage(imageSrc));
    navigate('/preview');
  }, [webcamRef, dispatch]);

  return (
    <div>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
       <button onClick={capture} className="circleButton">
            {/* Include an icon or other content here */}
            {/* For example, you can use an emoji as a placeholder */}
            📷
        </button>
      <img src={image} alt="" />
    </div>
  );
}

export default WebcamCapture;
