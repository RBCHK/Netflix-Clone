import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

//import Input from '@/components/Input';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [variant, setVariant] = useState('login');
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (e) {
      console.log(e);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', { name, email, password });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, login]);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="px-36 min-h-screen bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.9),_rgba(0,0,0,0.2),_rgba(0,0,0,0.9))] relative z-10">
        <nav className="px-6 py-6">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
            onClick={() => router.push('/')}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign In' : 'Sign Up'}
            </h2>
            {/*<div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
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
                p-6
                h-14
                w-full
                "
                  id="name"
                  label="Username"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  type="name"
                />
              )}
              <Input
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
                 w-full
                 "
                id="email"
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
              <Input
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
                 w-full
                 "
                id="password"
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>*/}
            <button
              onClick={variant === 'register' ? register : login}
              className="bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === 'login' ? 'Sign In' : 'Sigh up'}
            </button>
            <div className="flex justify-center mt-8 gap-6 ">
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition flex items-center justify-center"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition flex items-center justify-center"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <div className="text-white mt-6 flex justify-center cursor-pointer">
              Forgot password?
            </div>
            <div className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'New to Netflix?'
                : 'Alrady have an accaunt?'}
              <span
                onClick={toggleVariant}
                className="text-white m-2 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Sign up now.' : 'Sign In'}
              </span>
            </div>
            <div className="mt-6 text-neutral-500 text-xs">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.
              <span className="text-blue-600"> Learn more.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
