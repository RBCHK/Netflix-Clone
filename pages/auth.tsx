import Input from '@/components/Input'
import { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [variant, setVariant] = useState("login")

    const toggleVariant = () => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login' )
    }

    return (
        <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='h-12' />
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === 'register' && (
                                <Input
                                id='name'
                                label='Username'
                                onChange={(e: any) => setName(e.target.value)}
                                value={name}
                                type='name'
                            />
                            )}
                            <Input
                                id='email'
                                label='Email'
                                onChange={(e: any) => setEmail(e.target.value)}
                                value={email}
                                type='email'
                            />
                             <Input
                                id='password'
                                label='Password'
                                onChange={(e: any) => setPassword(e.target.value)}
                                value={password}
                                type='password'
                            />
                        </div>
                        <button className='bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'login' ? 'Login' : 'Sigh up'}
                        </button>
                        <p className='text-neutral-500 mt-12'>
                            {variant === 'login' ? 'New to Netflix?' : 'Alrady have an accaunt?'}
                            <span onClick={toggleVariant} className='text-white m-2 hover:underline cursor-pointer'>
                            {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth