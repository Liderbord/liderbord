/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Biconomy } from "@biconomy/mexa";
import Web3 from "web3";
import { notification } from "antd";
import { networkConfigs } from "helpers/networks";
import liderbordsContract from "contracts/Liderbords.json";
import biconomyApiKey from "helpers/biconomy";

export const BiconomyContext = createContext({});

const BiconomyContextProvider = (props) => {
  const { children } = props;
  const {
    isWeb3Enabled,
    isAuthenticated,
    isWeb3EnableLoading,
    Moralis,
    enableWeb3,
  } = useMoralis();
  const [isBiconomyInitialized, setIsBiconomyInitialized] = useState(false);
  const [isBiconomyInitializing, setIsBiconomyInitializing] = useState(false);
  const [biconomyProvider, setBiconomyProvider] = useState({});
  const [contract, setContract] = useState({});
  const { abi } = liderbordsContract;
  const contractAddress = process.env.REACT_APP_LIDERBORD_ADDRESS;

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      console.log("enable web3", process.env.REACT_APP_MORALIS_CLIENT_ID);
      enableWeb3();
    }
  }, [isAuthenticated, isWeb3Enabled]);

  useEffect(() => {
    const initializeBiconomy = async () => {
      console.log("initializeBiconomy");
      setIsBiconomyInitializing(true);
      if (isBiconomyInitialized) {
        // Resetting when reinitializing
        setIsBiconomyInitialized(false);
      }
      await Moralis.enableWeb3();
      const web3 = new Web3(Moralis.provider);
      const networkProvider = new Web3.providers.HttpProvider(
        networkConfigs["0x13881"]?.rpcUrl
      );

      const biconomy = new Biconomy(networkProvider, {
        walletProvider: web3.currentProvider,
        apiKey: biconomyApiKey["0x13881"],
        debug: true,
      });
      setBiconomyProvider(biconomy);

      console.log("web3", web3);

      // This web3 instance is used to read normally and write to contract via meta transactions.
      web3.setProvider(biconomy);

      biconomy
        .onEvent(biconomy.READY, () => {
          setIsBiconomyInitialized(true);
          setIsBiconomyInitializing(false);
          const contractInst = new web3.eth.Contract(abi, contractAddress);
          setContract(contractInst);
        })
        .onEvent(biconomy.ERROR, () => {
          // Handle error while initializing mexa
          notification.error({
            message: "Biconomy Initialization Fail",
            description:
              "Biconomy has failed to initialized. Please try again later.",
          });
        });
    };
    if (isAuthenticated && isWeb3Enabled && !isBiconomyInitializing) {
      initializeBiconomy();
    }
  }, [isAuthenticated, isWeb3Enabled, isWeb3EnableLoading]);

  return (
    <BiconomyContext.Provider
      value={{ isBiconomyInitialized, biconomyProvider, contract }}
    >
      {children}
    </BiconomyContext.Provider>
  );
};

export default BiconomyContextProvider;
