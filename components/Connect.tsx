import React, { useState } from "react";
import { shortenAddress } from "../utils";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";
import styles from "../styles/Wallet.module.css";

export default function Wallet() {
  const {
    chainId,
    account,
    activate,
    active,
    deactivate,
    library,
  } = useWeb3React<Web3Provider>();


  return (
    <>
      <div >
        {account ? (
          <>
            <div>ChainId: {chainId}</div>
            <div>Account: {shortenAddress(account)}</div>
            <div>✅ </div>
            <button
              type="button"
              className={styles.buyButton}
              onClick={deactivate}
            >
              Deactivate
            </button>
          </>
        ) : (
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <button
              type="button"
              onClick={() => activate(injected)}
              className={styles.connectButton}
            >
              Metamask
            </button>
          
          </div>
        )}
      </div>
    </>
  );
}
