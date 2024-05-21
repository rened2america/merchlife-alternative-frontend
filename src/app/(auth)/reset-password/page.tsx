import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SendResetEmail } from "./send-reset-email";
import { validateRequest } from "@/lib/auth/validate-request";
import { redirects } from "@/lib/constants";

export const metadata = {
  title: "Forgot Password",
  description: "Forgot Password Page",
};

export default async function ForgotPasswordPage() {
  const { user } = await validateRequest();

  if (user) redirect(redirects.afterLogin);

  return (
    <div className="bg-black absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black bottom-0 h-full w-full overflow-auto">
      <div className="relative h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Forgot Password?</h1>
            <p className="pr-3 text-sm opacity-75">
              Password reset link will be sent to your email.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10 p-10 mt-12">
          <div className="p-12 bg-white mx-auto rounded-3xl w-full max-w-md sm:w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Forgot Password</h3>
             
            </div>
            <SendResetEmail />
           
          </div>
        </div>
      </div>
      <svg
        className="fixed bottom-0 left-0 w-full hidden md:block md:w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  );
}
