import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";
import Link from "next/link";

import BalancesButton from "./BalancesButton";
import LogoutButton from "./LogoutButton";
import { MoralisChainId } from "../../types";
import { makeCeramicClient } from "../../utils";

function ConnectButton() {
  const {
    authenticate,
    isAuthenticated,
    user,
    logout,
    enableWeb3,
    isWeb3Enabled,
    Moralis,
    web3,
  } = useMoralis();

  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState<MoralisChainId>(undefined);

  const menuBgColor = useColorModeValue("purple.700", "violet.300");
  const {
    account: { getNativeBalance },
  } = useMoralisWeb3Api();

  const getNativeBalanceQuery = useMoralisWeb3ApiCall(getNativeBalance, {
    chain: chainId,
    address,
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log("Activated");
    } else {
      enableWeb3();
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    if (isAuthenticated && user) {
      setAddress(user.attributes.ethAddress);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    Moralis.Web3.onChainChanged((newChainId: string) => {
      console.log("chain changed to: ", newChainId);
      setChainId(newChainId as MoralisChainId);
    });
    Moralis.Web3.onAccountsChanged((accounts: string[]) => {
      console.log("account changed to: ", accounts[0]);
      setAddress(accounts[0]);
    });
  }, [Moralis.Web3]);

  const handleLogin = async () => {
    await authenticate();
  };
  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={handleLogin} type="button">
        CONNECT WALLET
      </Button>
    );
  }
  return (
    <HStack w="full">
      <BalancesButton chainId={chainId} address={address} />
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            w="40px"
            h="40px"
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList rounded="3xl" backgroundColor={menuBgColor}>
          <MenuItem>
            <Link href="/profile" passHref>
              <Button leftIcon={<BsFillPersonLinesFill />} w="full">
                Profile
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/settings" passHref>
              <Button leftIcon={<AiFillSetting />} w="full">
                Settings
              </Button>
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem w="full">
            <LogoutButton w="full" onClick={handleLogout} />
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default ConnectButton;
