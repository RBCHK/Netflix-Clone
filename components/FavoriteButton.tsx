import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    try {
      let response;

      if (isFavorite) {
        //console.log('Удаление', movieId);
        response = await axios.delete('/api/favorite', { data: { movieId } });
      } else {
        console.log('Отправка POST запроса', movieId);
        response = await axios.post(
          '/api/favorite',
          { movieId },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }

      if (response?.data?.favoriteIds) {
        console.log('Обновленные favoriteIds:', response.data.favoriteIds);
        const updatedFavoriteIds = response.data.favoriteIds;

        mutate({
          ...currentUser,
          favoriteIds: updatedFavoriteIds,
        });

        mutateFavorites();
      } else {
        throw new Error('Ответ не содержит favoriteIds');
      }
    } catch (error) {
      console.error('Error toggling favorites:', error);
    }
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      className="
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-2
        border-white
        rounded-full
        flex
        justify-center
        items-center
        hover:border-neutral-300
        transition
        cursor-pointer
      "
      onClick={toggleFavorites}
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
