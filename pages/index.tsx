import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import useFavorites from '@/hooks/useFavorites';
import useMoviesList from '@/hooks/useMovieList';

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

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div>
        <MovieList title="Trending now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
