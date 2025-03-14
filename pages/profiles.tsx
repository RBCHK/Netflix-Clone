/* eslint-disable @next/next/no-img-element */
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import useCurrentUser from '@/hooks/useCurrentUser';

//Routes protecting function
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const { data: user } = useCurrentUser();
  const router = useRouter();

  return (
    <div className="flex h-full items-center justify-center ">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Who is watching?
        </h1>
        <div className="flex justify-center items-center gap-8 mt-10">
          <div onClick={() => router.push('/home')}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
                  w-44
                  h-44
                  rounded-md
                  flex
                  justify-center
                  items-center
                  border-2
                  border-transparent
                  group-hover:cursor-pointer
                  group-hover:border-white
                  overflow-hidden
                "
              >
                <img src="/images/default-green.png" alt="avatar" />
              </div>

              <div className="text-gray-400 text-2xl text-center group-hover:text-white mt-4 ">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
