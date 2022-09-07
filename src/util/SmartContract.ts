import {BigNumber, ethers} from "ethers";
import {contractABI, contractAddress} from "../constants";

const getMetamask = () => {
    // @ts-ignore
    const {ethereum} = window;
    if (!ethereum) return alert("Please install Metamask")
    return ethereum;
}

export const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(getMetamask());
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
}

export const connectWallet = async () => {
    const ethereum = getMetamask();
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    return accounts[0];
}

export const getAccounts = async (): Promise<string[]> => {
    return getMetamask().request({method: 'eth_accounts'})
        .then((accounts: string[]) => {
            return accounts;
        })
        .catch((err: any) => {
            console.log(err);
            return [];
        });
}

export const createTask = async (title: string, content: string, wallet: string): Promise<void> => {
    await getMetamask().request({
        method: "eth_sendTransaction",
        params: [{
            from: wallet,
            to: wallet,
            gas: "0x76c0",
        }]
    });
    const contract = getEthereumContract();
    const tx = await contract.createTask(title, content);
    await tx.wait();
}

export const getTask = async (taskId: BigNumber): Promise<any> => {
    const contract = getEthereumContract();
    return await contract.getTask(taskId);
}

export const toggleTaskStatus = async (taskId: number, wallet: string): Promise<void> => {
    await getMetamask().request({
        method: "eth_sendTransaction",
        params: [{
            from: wallet,
            to: wallet,
            gas: "0x76c0",
        }]
    });
    const contract = getEthereumContract();
    const tx = await contract.toggleTaskStatus(taskId);
    await tx.wait();
}

export const getAllTaskIds = async (): Promise<number[]> => {
    const contract = getEthereumContract();
    return await contract.getAllTaskIds();
}