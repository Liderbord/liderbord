import { notification } from "antd";
import { useEffect, useState } from "react";
import liderbordsContract from "contracts/Liderbords.json";
import { useMoralis, useChain } from "react-moralis";
import { useAPIContract } from "hooks/useAPIContract";
import useBiconomyContext from "hooks/useBiconomyContext";
import useMetaTransaction from "hooks/useMetaTransaction";

const useLiderbordContract = ({ liderbordName }) => {
  const { isInitialized, isWeb3Enabled, account } = useMoralis();
  const { chainId } = useChain();
  const { isBiconomyInitialized } = useBiconomyContext();
  const { contractName, abi } = liderbordsContract;
  const contractAddress = process.env.REACT_APP_LIDERBORD_ADDRESS;
  const { contract } = useBiconomyContext();
  const [liderbordElements, setLiderbordElements] = useState([]);

  /**
   * @description For getting storage data from smart contracts (params defined below);
   */
  const { runContractFunction, contractResponse, isLoading } = useAPIContract();

  /**
   * @description For executing meta transaction
   *
   * @param {String} input - New storage data
   * @param {Address} transactionParams.from - address that will sign the metatransaction
   * @param {String} transactionParams.signatureType - either EIP712_SIGN or PERSONAL_SIGN
   */
  const { isMetatransactionProcessing, onSubmitMetaTransaction } =
    useMetaTransaction({
      transactionParams: {
        from: account,
        signatureType: "EIP712_SIGN",
      },
    });

  /**
   * @description Execute `getLiderbord` call from smart contract
   *
   * @param {Function} onSuccess - success callback function
   * @param {Function} onError - error callback function
   * @param {Function} onComplete -complete callback function
   */
  const onGetLiderbord = (
    { onSuccess, onError, onComplete } = {
      onSuccess: () => {
        console.log("success");
      },
      onError: (e) => {
        console.log("error on get liderbord", e);
        notification.error({
          message: "Can't load the liderbord",
          description: `The liderbord can't be loaded. Please try again later.`,
        });
      },
      onComplete: (e) => {
        console.log("complete");
      },
    }
  ) => {
    console.log("getLiderbord");
    runContractFunction({
      params: {
        chain: chainId,
        function_name: "getLiderbord",
        abi,
        address: contractAddress,
        params: { _liderbordName: liderbordName },
      },
      onSuccess,
      onError,
      onComplete,
    });
  };

  /**
   * @description if `isEdit` is true, execute meta transaction,
   * otherwise set `isEdit` to true
   *
   * @param {*} e
   */
  const onAddResource = async (
    link,
    liderbordNames = ["liderbords"],
    onSuccess
  ) => {
    onSubmitMetaTransaction({
      instruction: contract.methods.addResource(link, liderbordNames),
      onConfirmation: () => {
        onSuccess();
        onGetLiderbord();
      },
      onError: (e) => {
        console.log("error on metatransaction", e);
        notification.error({
          message: "Couldn't add the resource",
          description: `The transaction has failed. Please try again later.`,
        });
      },
    });
  };

  const onClaimHappycoins = async (onSuccess) => {
    onSubmitMetaTransaction({
      instruction: contract.methods.claimHappycoins(),
      onConfirmation: () => {
        onSuccess();
        onGetLiderbord();
      },
      onError: (e) => {
        console.log("error on metatransaction", e);
        notification.error({
          message: "Couldn't claim happycoins",
          description: "The transaction has failed. Please try again later.",
        });
      },
    });
  };

  const onVoteResource = async (link, liderbordName, vote, onSuccess) => {
    onSubmitMetaTransaction({
      instruction: contract.methods.vote(link, liderbordName, vote),
      onConfirmation: () => {
        onSuccess();
        onGetLiderbord();
      },
      onError: (e) => {
        console.log("error on metatransaction", e);
        notification.error({
          message: "Couldn't claim happycoins",
          description: "The transaction has failed. Please try again later.",
        });
      },
    });
  };

  useEffect(() => {
    console.log("isInitialized", isInitialized, "isWeb3Enabled", isWeb3Enabled);
    /**
     * Running when one of the following conditions fulfilled:
     * - Moralis SDK is Initialized
     * - Web3 has been enabled
     * - Connected Chain Changed
     */
    if (isInitialized && isWeb3Enabled) {
      onGetLiderbord();
    }
  }, [
    isInitialized,
    isWeb3Enabled,
    contractAddress,
    abi,
    chainId,
    liderbordName,
  ]);

  useEffect(() => {
    console.log("contractResponse", contractResponse);
    if (contractResponse != null) {
      const newLiderbord = [];
      for (let i = 0; i < contractResponse[0].length; i++) {
        newLiderbord.push({
          link: contractResponse[0][i],
          score: contractResponse[1][i],
        });
      }
      setLiderbordElements(newLiderbord);
    }
  }, [contractResponse]);

  return {
    onAddResource,
    onClaimHappycoins,
    onVoteResource,
    onGetLiderbord,
    contractName,
    contractAddress,
    contractResponse,
    isMetatransactionProcessing,
    isBiconomyInitialized,
    isLoading,
    liderbordElements,
    chainId,
  };
};

export default useLiderbordContract;
