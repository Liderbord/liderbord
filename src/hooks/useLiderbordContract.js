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
  const [liderbordElements, setLiderbordElements] = useState({});
  const [happycoins, setHappycoins] = useState("");
  const [lastTimeClaimed, setLastTimeClaimed] = useState("");

  /**
   * @description For getting storage data from smart contracts (params defined below);
   */
  const {
    runContractFunction: runGetLiderbord,
    contractResponse: liderbordData,
    isLoading,
  } = useAPIContract();
  const {
    runContractFunction: runGetUser,
    contractResponse: userData,
    isLoading: isLoadingUser,
  } = useAPIContract();

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
    console.log("getLiderbord", liderbordName);
    runGetLiderbord({
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
   * @description Execute `getLiderbord` call from smart contract
   *
   * @param {Function} onSuccess - success callback function
   * @param {Function} onError - error callback function
   * @param {Function} onComplete -complete callback function
   */
  const onGetUser = (
    { onSuccess, onError, onComplete } = {
      onSuccess: () => {
        console.log("success");
      },
      onError: (e) => {
        console.log("error on get user", e);
        notification.error({
          message: "Can't load the user",
          description: `The user can't be loaded. Please try again later.`,
        });
      },
      onComplete: (e) => {
        console.log("complete");
      },
    }
  ) => {
    console.log("getUser");
    runGetUser({
      params: {
        chain: chainId,
        function_name: "getUser",
        abi,
        address: contractAddress,
        params: { _user: account },
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
    /**
     * Running when one of the following conditions fulfilled:
     * - Moralis SDK is Initialized
     * - Web3 has been enabled
     * - Connected Chain Changed
     */
    if (isInitialized && isWeb3Enabled) {
      if (userData == null && !isLoadingUser) onGetUser();
      if (liderbordName) onGetLiderbord();
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
    if (liderbordData != null) {
      const newLiderbordElements = {};
      for (let i = 0; i < liderbordData[0].length; i++) {
        newLiderbordElements[liderbordData[0][i]] = {
          scores: liderbordData[1][i],
          downVotes: liderbordData[2][i],
          upVotes: liderbordData[3][i],
        };
      }
      setLiderbordElements(newLiderbordElements);
    }
  }, [liderbordData]);

  useEffect(() => {
    if (userData != null) {
      console.log("userData", userData);
      setHappycoins(userData[0]);
      setLastTimeClaimed(userData[1]);
    }
  }, [userData]);

  return {
    onAddResource,
    onClaimHappycoins,
    onVoteResource,
    onGetLiderbord,
    contractName,
    contractAddress,
    isMetatransactionProcessing,
    isBiconomyInitialized,
    isLoading,
    isLoadingUser,
    liderbordElements,
    chainId,
  };
};

export default useLiderbordContract;
