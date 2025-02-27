import { useState } from 'react';

import { useRouter } from 'next/router';
import Button from '../components/Button';
import Input from '../components/Input';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [variant, setVariant] = useState('login');
  const router = useRouter();

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="px-36 min-h-screen bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.9),_rgba(0,0,0,0.2),_rgba(0,0,0,0.9))] relative z-10">
        <nav className="py-6 flex justify-between items-center w-full">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
          <div className="flex">
            <Button
              className="
              bg-neutral-900
              bg-opacity-70
              border
              border-zinc-600
              hover:bg-neutral-900
              text-white
              text-sm
              font-semibold
              rounded-sm
              px-6
              h-8
              "
            >
              English
            </Button>
            <Button
              className="
              bg-red-600
              hover:bg-red-700
              text-white
              text-sm
              font-semibold
              rounded-sm
              px-4
              h-8
              ml-4
              "
              onClick={() => router.push('/auth')}
            >
              Sign In
            </Button>
          </div>
        </nav>

        <div className="flex justify-center items-center w-full h-full">
          <div className=" px-16 py-16 mt-40 w-full md:w-1/2 lg:w-2/4 text-center">
            <h1 className="text-white font-extrabold text-6xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white font-bold text-xl pt-8">
              Starts at $7.99. Cancel anytime.
            </p>
            <p className="text-white text-base pt-8">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="flex justify-between pt-4">
              <Input
                id="email"
                label="Email address"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="
                 block 
                 rounded-sm
                 border
                 border-zinc-600
                 text-md 
                 text-white
                 bg-neutral-900
                 bg-opacity-70
                 appearance-none
                 focus:outline-none 
                 focus:ring-0
                 peer
                 px-6
                 pt-4
                 h-14
                 w-96"
              />
              <Button
                className="
                bg-red-600
                hover:bg-red-700
                text-white
                text-2xl
                font-semibold
                rounded-md
                px-6
                h-14
                "
              >
                Get Started <span className="pl-4 font-bold">&rang;</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
