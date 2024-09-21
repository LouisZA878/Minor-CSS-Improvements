import { create } from 'zustand'

const useStatus = create((set) => ({
  status: true,
  statusSwap: () => set((state) => ({ status: !state.status })),

}))

export default useStatus