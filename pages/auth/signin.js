import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import instagram from "../../assets/instagram.png";
import Image from "next/image";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Header />
          <div className="flex flex-col items-center  ">
            <div className=" flex items-center h-96  w-80 -mt-12">
              <Image src={instagram} alt="" />
            </div>
            <div className="flex justify-center bg-[#0095f6] text-white w-52 p-4 rounded-full  -mt-16">
              <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Sign in with {provider.name}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
