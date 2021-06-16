import React from "react";
import { useState } from "react";
import ReportModal from "../ReportModal";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress } from "../../utils";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect } from 'react'
import { POLYGON_MAINNET_PARAMS } from '../../constants'
import { injected } from '../../connectors'

export default function index() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
  }, [])

  return (
    <>
      <ReportModal status={"connect"} open={open} setOpen={setOpen} />

      <div className={'mr-2 hidden md:inline'}>
        <button 
          onClick={() => setOpen(true)}
          className="px-6 w-full py-2 border border-red-50 hover:bg-gray-800 text-sm font-medium rounded-sm text-red-50 bg-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-50"
        >
            Report 
        </button>
      </div>
    </>
  );
}
