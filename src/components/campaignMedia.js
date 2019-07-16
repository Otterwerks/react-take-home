import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowDown, faPlay } from '@fortawesome/free-solid-svg-icons'; // substitutions made for icons only available with FontAwesome Pro

const CampaignMedia = ({ media, showMessage, hideMessage }) => {

    const [video, showVideo] = useState(false);

    const copyLink = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                copyLinkMessage('Link copied to clipboard!');
            })
            .catch(err => {
                copyLinkMessage('Unable to copy link to clipboard');
            });
    };

    const copyLinkMessage = (message) => {
        setTimeout(function() { hideMessage(); }, 3000);
        return showMessage(message);
    }

    return (
        <div className="campaign-media-item">
            <div className="campaign-media-preview">
                {video == false ? <img className="campaign-cover-photo" src={media.cover_photo_url} /> : <video className="campaign-cover-photo" autoPlay><source src={media.download_url} type="video/mp4" /></video>} 
                {media.media_type == 'video' && video == false && <span className="media-play-icon"><a onClick={() => showVideo(true)}><FontAwesomeIcon icon={faPlay} size="2x" /></a></span>}
            </div>
            <div className="campaign-links">
                <div className="campaign-tracking-link btn-link"><a onClick={() => copyLink(media.tracking_link)}><FontAwesomeIcon icon={faLink} size="lg" flip="vertical" /></a></div>
                <div className="campaign-download-link btn-link"><a href={media.download_url} download><FontAwesomeIcon size="lg" icon={faArrowDown} /></a></div>
            </div>
        </div>
    )
};

export default CampaignMedia;