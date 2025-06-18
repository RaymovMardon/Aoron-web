import { create } from 'zustand';

export const CartStore = create((set) => ({
    cartItems: [],
    addToCart: (item) =>
        set((state) => {
            const exists = state.cartItems.find((i) => i.id === item.id);
            if (exists) {
                return {
                    cartItems: state.cartItems.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                    ),
                };
            } else {
                return {
                    cartItems: [...state.cartItems, item],
                };
            }
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
    clearCart: () => set({ cartItems: [] }),
}));
