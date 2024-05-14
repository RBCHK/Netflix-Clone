import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import useMoviesList from '@/hooks/useMovieList';

//Routes protecting function
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    } 

    return {
        props: {}
    }
}

export default function Home() {    
    const { data: movies = [] } = useMoviesList()

    return (
        <>
            <Navbar />
            <Billboard />
            <div>
                <MovieList title='Trending now' data={ movies } />
            </div>
        </>
    )
}
