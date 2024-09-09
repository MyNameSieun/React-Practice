import create from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  discrease: () => set((state) => ({ count: state.count - 1 }))
}));

export default useCounterStore;
