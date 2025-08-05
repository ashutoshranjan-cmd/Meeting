import React from 'react'
import { useParams } from 'react-router'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export const Room = () => {
    const { id } = useParams();
    const roomid = id;

    const meeting = async (element) => {
        const appId = Number( import.meta.env.VITE_APP_ID);
        const appSecret = import.meta.env.VITE_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, appSecret, roomid, Date.now().toString(), "Ashutosh Ranjan")
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomId=' +
                        roomid,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };


    return (
        <div
            className="myCallContainer"
            ref={meeting}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    )
}
