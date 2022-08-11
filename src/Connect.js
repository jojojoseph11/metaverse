import abi from "./abi/abi.json" assert { type: "json"};

const connect = new Promise((res, rej) => {
    if (typeof window.ethereum == "undefined") {
        rej("Install metamask");
    }
    window.etherium.request({ method: "eth_requestAccounts" });
    let web3 = new Web3(window.ethereum);
    let contract = web3.eth.Contract(
        abi, "0x8399906f4F6dD39bb77Bf028F5F56fC455350b7d"
    );
    web3.eth.getAccounts().then((accounts) => {
        contract.methods.totalSupply().call()
        console.log(accounts);
    });
});

export default connect;
