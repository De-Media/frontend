import { ethers } from "ethers";
import { abiJson } from "./abi";

const MoodContractAddress = "0x4fe156f485597020af45E1282Dc2b463c67C9E01";
const MoodContractABI = abiJson.abi;
let DeMediaContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "maticmum");

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    DeMediaContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

export const addMedia = async ({
  title,
  description,
  isPoll,
  polls,
  _pA,
  _pB,
  _pC,
  _pubSignals,
}) => {
  try {
    const setMoodPromise = DeMediaContract.addMedia({
      title,
      description,
      isPoll,
      polls,
      _pA,
      _pB,
      _pC,
      _pubSignals,
    });
    await setMoodPromise;
    // show success massage to user
  } catch (err) {
    // console.log("error in castVote", error.message);
    console.log({ err });
    alert("Failed to add media");
  }
};

export const getMedia = async ({ mediaIndex }) => {
  try {
    const setMoodPromise = DeMediaContract.getMedia({
      mediaIndex,
    });
    await setMoodPromise;
    // show success massage to user
  } catch (err) {
    // console.log("error in castVote", error.message);
    console.log({ err });
    alert("Failed to fetch media");
  }
};

export const setResponseOnMedia = async ({
  mediaIndex,
  response,
  poll,
  _pA,
  _pB,
  _pC,
  _pubSignals,
}) => {
  try {
    const setMoodPromise = DeMediaContract.responseOnMedia({
      mediaIndex,
      response,
      poll,
      _pA,
      _pB,
      _pC,
      _pubSignals,
    });
    await setMoodPromise;
    // show success massage to user
  } catch (err) {
    // console.log("error in castVote", error.message);
    console.log({ err });
    alert("Failed to fetch media");
  }
};
