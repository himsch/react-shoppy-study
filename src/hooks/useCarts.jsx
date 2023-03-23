import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase.js';
import { useAuthContext } from '../context/AuthContext.jsx';

export default function useCarts() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(['carts', uid || ''], async () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateCart = useMutation(
    product => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
    }
  );

  const removeCart = useMutation(id => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
  });

  return { cartsQuery, addOrUpdateCart, removeCart };
}
