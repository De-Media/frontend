import { ethers } from 'ethers';
import { abiJson } from './abi';

const ContractAddress = '0x1ba38efb49e49c4646328916fb53cec7cb9dd43c';
const ContractABI = abiJson.abi;
let DeMediaContract;
let signer;

//const provider = new ethers.JsonRpcApiProvider('https://rpc.ankr.com/polygon_mumbai');
const provider = new ethers.BrowserProvider(window.ethereum);
window.ethereum
	.request({
		method: 'eth_requestAccounts',
	})
	.then(async (accounts) => {
		console.log(accounts);
		signer = await provider.getSigner(accounts[0]);
		console.log(signer);
		DeMediaContract = new ethers.Contract(ContractAddress, ContractABI, signer);
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
		return await setMoodPromise;
		// show success massage to user
	} catch (err) {
		// console.log("error in castVote", error.message);
		console.log(err);
	}
};

export const getMedia = async ({ mediaIndex }) => {
	try {
		console.log('getmedia');
		const setMoodPromise = await DeMediaContract.getMedia(ethers.toBigInt(mediaIndex));

		console.log('getmedia', setMoodPromise);
		return setMoodPromise;
		// show success massage to user
	} catch (err) {
		// console.log("error in castVote", error.message);
		console.log({ err });
		// alert('Failed to fetch media');
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
		alert('Failed to fetch media');
	}
};

export const convert = (obj) => {
	if (!obj) return null;
	const res = {};
	res.title = obj[0];
	res.description = obj[1];
	res.tags = obj[2];
	res.flag = parseInt(obj[3]);
	res.isPoll = obj[4];
	res.options = obj[5];
	res.counts = parseInt(obj[6]);
	res.yes = parseInt(obj[7]);
	res.no = parseInt(obj[8]);
	res.abstain = parseInt(obj[9]);
	res.responseCount = obj[10];

	return res;
};
