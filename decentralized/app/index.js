"use client"
import Head from "next/head";
import App from "./_app";
import { useViewerConnection, useViewerRecord } from "@self.id/react";
import { useEffect, useState } from "react";

import { EthereumAuthProvider } from "@self.id/web";

import React from 'react'

function Home() {
    const [connection, connect, disconnect] = useViewerConnection();
    const [isWindow, setIsWindow] = useState(null);
    //const record = useViewerRecord("basicProfile");

    async function createAuthProvider(){
        const address = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return new EthereumAuthProvider(window.ethereum, address[0]);
    }
    async function connectAccount(){
        const authProvider = await createAuthProvider();
        await connect(authProvider);
    }
  return (
    <>
      <Head>
        <title>
          Decentralized Identity: Build a Profile with NextJs, Ethereum & Ceramic Network
        </title>
        <meta name="description" content="Created by Jarvis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between">
        {/* ... */}

        {connection.status === "connected" ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        ) : isWindow && "ethereum" in window ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            disabled={connection.status === "connecting" || !record}
            onClick={() => {
              connectAccount();
            }}
          >
            Connect Wallet
          </button>
        ) : (
          <p className="text-red-500 text-sm italic mt-2 text-center w-full">
            An injected Ethereum provider such as{" "}
            <a href="https://metamask.io/">MetaMask</a> is needed to
            authenticate.
          </p>
        )}
      </div>
      <main className="min-h-screen bg-gray-200">
        <div className="bg-gray-600 py-4 px-4 sm:px-6 lg:px-8 lg:py-6 shadow-lg text-white">
          <div className="container mx-auto px-6 md:px-0">
            <h1 className="text-2xl font-bold text-white text-center">
            <div className="text-blue-400">Decentralized Identity:</div>  Build a Profile with NextJs, Ethereum & Ceramic Network
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center pt-20 font-sans overflow-hidden">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <form>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                   Your Name
                  </label>
                  <input
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="bio"
                  >
                 Bio
                  </label>
                  <textarea
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    name="bio"
                    id="bio"
                    rows="5"
                    placeholder="Write something about yourself"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your username"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Update Profile
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Connect Wallet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
