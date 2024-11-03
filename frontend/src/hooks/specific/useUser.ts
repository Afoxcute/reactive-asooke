import { useCallback, useEffect, useState } from "react";
import { useMarketPlaceContract } from "../useContracts";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { liskSepoliaNetwork } from "../../connection";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUser {
  displayName: string;
  roleType: number;
  isRegistered: boolean;
}
export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { address } = useAppKitAccount();
  const readOnlyMarketPlaceContract = useMarketPlaceContract();
  const fetchUser = useCallback(async () => {
    if (!readOnlyMarketPlaceContract) {
      setUser(null);
      return;
    }
    if (!address) {
      setUser(null);
      return;
    }
    try {
      setIsLoading(true);
      const _user = await readOnlyMarketPlaceContract.users(address);
      console.log(_user);
      setUser(_user);
    } catch (error) {
      setUser(null);
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }, [readOnlyMarketPlaceContract, address]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user, isLoading };
};

export const useRegister = () => {
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  const [isLoading, setIsLoading] = useState(false);

  const marketPlaceContract = useMarketPlaceContract(true);
  const navigate = useNavigate();
  // const errorDecoder = ErrorDecoder.create()
  const registerUser = useCallback(
    async (displayName: string, roleType: number) => {
      if (!marketPlaceContract) {
        toast.error("Contract not found");
        return;
      }
      if (!address) {
        toast.error("Connect your wallet!");
        return;
      }
      if (Number(chainId) !== liskSepoliaNetwork.chainId) {
        toast.error("You are not connected to the right network");
        return;
      }
      try {
        setIsLoading(true);

        const estimatedGas = await marketPlaceContract.registerUser.estimateGas(
          displayName,
          roleType
        );
        console.log({ estimatedGas });
        // construct transaction
        const tx = await marketPlaceContract.registerUser(
          displayName,
          roleType,
          {
            gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
          }
        );
        const reciept = await tx.wait();
        if (reciept.status === 1) {
          toast.success("User Registration successful");
          // navigate to dashboard based on roleType
          if(roleType == 3){ // buyer
            navigate("/dashboard");
          } else if(roleType == 2){ //designer
            navigate("/designers");
          }else if(roleType == 1){  //seller
            navigate("/sellers");
          }
          return;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [marketPlaceContract, address,chainId, navigate]
  );
  return { registerUser, isLoading };
};
