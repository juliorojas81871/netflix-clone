import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { CheckIcon } from "@heroicons/react/outline";
import { Product } from '@stripe/firestore-stripe-payments'
import { useState } from 'react'

interface Props {
  products: Product[]
}

const Plans = ({ products }: Props) => {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])

  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix-icon-logo.png" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="/assets/netflix_logo2.svg"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
          {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plans;
