import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'
import './ShareButtons.css';

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
    <div className="ShareButtons">
        {/*<FacebookShareButton url={url}>*/}
            {/*<FacebookIcon size={48} round={true} />*/}
        {/*</FacebookShareButton>*/}

        <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
            <TwitterIcon size={48} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={48} round={true} />
        </WhatsappShareButton>
    </div>
)

export default ShareButtons