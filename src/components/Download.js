import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Overlay, OverlayProps, OverlayTriggerProps, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineFileJpg } from "react-icons/ai";
import { IconContext } from "react-icons";

function Download() {
    return(
        <>
            <IconContext.Provider value={{ className: "icons" }}>
            <div className="download-btn-all">
                <Link to="/Resume.pdf" target="_blank" download="/Resume.pdf" className="download-button">
                    <Button variant="outline-info"><AiOutlineFileJpg />  Resume.pdf</Button>
                </Link>
            </div>
            </IconContext.Provider>
        </>
    );
}


export default Download;