import { useMemo } from "react";
import useRunners from "./useRunners";
import { Contract } from "ethers";
import MARKET_PLACE_ABI from "../ABI/marketplace.json";
import AUCTION_ABI from "../ABI/auction.json";
import ESCROW_ABI from "../ABI/escrow.json";

export const useMarketPlaceContract = (withSigner = false) => {
  const { readOnlyProvider, signer } = useRunners();

  return useMemo(() => {
    if (withSigner) {
      if (!signer) return null;
      return new Contract(
        import.meta.env.VITE_MARKETPLACE_CONTRACT_ADDRESS,
        MARKET_PLACE_ABI,
        signer
      );
    }
    return new Contract(
      import.meta.env.VITE_MARKETPLACE_CONTRACT_ADDRESS,
      MARKET_PLACE_ABI,
      readOnlyProvider
    );
  }, [readOnlyProvider, signer, withSigner]);
};

export const useAuctionContract = (withSigner = false) => {
  const { readOnlyProvider, signer } = useRunners();

  return useMemo(() => {
    if (withSigner) {
      if (!signer) return null;
      return new Contract(
        import.meta.env.VITE_AUCTION_CONTRACT_ADDRESS,
        AUCTION_ABI,
        signer
      );
    }
    return new Contract(
      import.meta.env.VITE_AUCTION_CONTRACT_ADDRESS,
      AUCTION_ABI,
      readOnlyProvider
    );
  }, [readOnlyProvider, signer, withSigner]);
};

export const useEscrowContract = (withSigner = false) => {
  const { readOnlyProvider, signer } = useRunners();

  return useMemo(() => {
    if (withSigner) {
      if (!signer) return null;
      return new Contract(
        import.meta.env.VITE_ESCROW_CONTRACT_ADDRESS,
        ESCROW_ABI,
        signer
      );
    }
    return new Contract(
      import.meta.env.VITE_ESCROW_CONTRACT_ADDRESS,
      ESCROW_ABI,
      readOnlyProvider
    );
  }, [readOnlyProvider, signer, withSigner]);
};
