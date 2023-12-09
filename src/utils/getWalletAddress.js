const getWalletAddress = () => {
  const address = sessionStorage.getItem("wallet-address");

  if (!address || address.trim() === "") {
    return null;
  }

  return address;
};

export default getWalletAddress;
