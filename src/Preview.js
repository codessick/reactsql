import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCameraImage } from './features/cameraSlice';
import "./Preview.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { resetCameraImage } from './features/cameraSlice';
import { v4 as uuid } from "uuid";

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (cameraImage === null || cameraImage === undefined) {
            navigate('/', { replace: true });
        }
    }, [cameraImage, navigate]);

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

    return (
        <div className='preview'>
            <button type="button" className="close preview_close" onClick={closePreview}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="preview__toolbarRight">
                    <span class="btn " aria-hidden="true">🆃</span>
                    <span class="btn " aria-hidden="true">🎨</span>
                    <span class="btn " aria-hidden="true">📝</span>
                    <span class="btn " aria-hidden="true">🎵</span>
                    <span class="btn " aria-hidden="true">📎</span>
                    <span class="btn " aria-hidden="true">✂️</span>
                    <span class="btn " aria-hidden="true">⏲️</span>
            </div>
            <img src={cameraImage} alt="" />
        <button type="button" class="btn btn-primary preview_footer" onclick="sendPost()">
             <p>Send Now</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
        </button>
        </div>
    );
}

export default Preview;

