// integrate push protocol

// import push api
import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';

// import web3 ui lib to get wallet data
import { useWeb3React } from "@web3-react/core";
const { account, library, chainId } = useWeb3React();
const _signer = library.getSigner(account);

// Initialize user
// this works for both initializing and  re-authenticating the
// using staging env because our channel is on staging
const user = await PushAPI.initialize(_signer, {
  env: "staging",
});

// subscribe user to notification channel
// 0x410AA102503896006a3ae7f9293aE8F2A04612B6  <- our notification channel
const channelInCAIP = "eip155:0x410AA102503896006a3ae7f9293aE8F2A04612B6";
const subscribeStatus = await user.notification.subscribe(channelInCAIP);

// Stream Notification API
// Initial setup
const stream = await user.initStream([CONSTANTS.STREAM.NOTIF], {
  filter: {
    channels: ["*"], // pass in specific channels to only listen to those
    chats: ["*"], // pass in specific chat ids to only listen to those
  },
  connection: {
    retries: 3, // number of retries in case of error
  },
  raw: false, // enable true to show all data
});

// Listen for notifications events
stream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {
  console.log(data); // show data in UI as needed
});

// Connect stream, Important to setup up listen events first
stream.connect();

