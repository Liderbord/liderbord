import { useState } from "react";

const useMetaTransaction = ({ transactionParams }) => {
  const [isMetatransactionProcessing, setIsMetatransactionProcessing] =
    useState(false);
  const [error, setError] = useState();

  const onSubmitMetaTransaction = ({ instruction, onConfirmation, onError }) => {
    try {
      setIsMetatransactionProcessing(true);
      console.log('instruction', instruction);
      let tx = instruction.send(transactionParams);
      console.log('transaction', tx);

      tx.on("transactionHash", function () {})
        .once("confirmation", function (transactionHash) {
          setIsMetatransactionProcessing(false);
          onConfirmation(transactionHash);
        })
        .on("error", function (e) {
          console.log("error", e);
          setError(e);
          setIsMetatransactionProcessing(false);
          onError();
        });
    } catch (e) {
      setError(e);
      onError();
    }
  };

  return { error, isMetatransactionProcessing, onSubmitMetaTransaction };
};

export default useMetaTransaction;
