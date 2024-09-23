import { create } from 'zustand';

const useSparkles = create((set) => ({
  sparks: [],
  addSpark: (spark) => set((state) => ({ sparks: [...state.sparks, spark] })),
  removeSpark: (id) => set((state) => ({
    sparks: state.sparks.filter(spark => spark.id !== id)
  }))
}));

export default useSparkles;