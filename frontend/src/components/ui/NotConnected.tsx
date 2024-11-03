import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useAppKit } from "@reown/appkit/react";

export const NotConnected = () => {
  const { open } = useAppKit();
  const navigate = useNavigate();

  const handleConnect = () => {
    open({ view: "Connect" });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E2D] text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">
          Connect your wallet to continue to the dashboard
        </h2>
        <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-white">
            Ready to connect your wallet?
          </h2>
          <div className="flex gap-4">
            <Button
              text="Connect Wallet"
              onClick={handleConnect}
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
            />
            <Button
              text="Go back"
              onClick={() => navigate("/")}
              className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
