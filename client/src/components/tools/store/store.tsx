import create from "zustand";
import { persist } from "zustand/middleware";



export const DEFAULT_BAG = {
  id: 0,
  price: 5.0,
  designName: "",
  designId: 0,
  designColorName: "",
  designColorId: 0,
  bagColorName: "",
  bagColorId: 0,
};

type BagType = {
  id: number;
  price: number;
  designName: string;
  designId: number;
  designColorName: string;
  designColorId: number;
  bagColorName: string;
  bagColorId: number;
};

// Or `interface`
interface BagStoreState {
  bags: BagType[];
  price: number;
  addBag: (newBag: BagType) => void;
  selectedDesign: DesignType | null;
  setSelectedDesign: (next: DesignType | null) => void;
  selectedBagColor: BagColorType | null;
  setSelectedBagColor: (next: BagColorType | null) => void;
  selectedDesignColor: DesignColorType | null;
  setSelectedDesignColor: (next: DesignColorType | null) => void;
  deleteBag: (id: number) => void;
}
export type DesignType = { id: number; name: string };
export type BagColorType = { id: number; name: string };
export type DesignColorType = { id: number; color: string };

/** this contains created bag values */
export const useBagStore = create<BagStoreState>(
  persist(
    (set, get, del) => ({
      bags: [] as BagType[],
      price: 5.0,
      addBag: (newBag) =>
        set((state) => {
          return { bags: [...state.bags, newBag] };
        }),
      selectedDesign: null,
      setSelectedDesign: (next) => set(() => ({ selectedDesign: next })),
      selectedBagColor: null,
      setSelectedBagColor: (next) => set(() => ({ selectedBagColor: next })),
      selectedDesignColor: null,
      setSelectedDesignColor: (next) =>
        set(() => ({ selectedDesignColor: next })),
        

        

        deleteBag: (bag) =>
        del((state: { bags: any }) => {
          return { bags: [...state.bags, bag] };
        }),
    }),

    {
      name: "bag-storage",
      serialize: (state) => JSON.stringify(state),
    }
  )
);

/**to store count of items in cart/basket to return them to db orders table*/
interface basketStoreState {
  basketCount: number;
  increaseCount: (number: any, newNumber: any) => void;
  decreaseCount: (number: any, newNumber: any) => void;
  removeAllCount: (number: any, newNumber: 0) => void;
}

export const useBasketStore = create<basketStoreState>(
  persist(
    (set, get, del) => ({
      basketCount: 0,
      increaseCount: () =>
        set((state) => ({ basketCount: state.basketCount + 1 })),
      decreaseCount: () =>
        set((state) => ({ basketCount: state.basketCount - 1 })),
      removeAllCount: () => set({ basketCount: 0 }),
    }),
    {
      name: "basketCount-storage",
    }
  )
);

export const DEFAULT_CREATEDBAG = {
  color_id: 0,
  designcolors_id: 0,
  designs_id: 0,
  bagid: 0,
  quantity: 0,
  itemtype_id: 0,
};

type createdBagType = {
  color_id: number;
  designcolors_id: number;
  designs_id: number;
  bagid: number;
  quantity: number;
  itemtype_id: number;
};

interface createdBagStoreState {
  createdBag: createdBagType[];
  addCreatedBag:(newCreatedBag:createdBagType) => void;
  color_id: number | null;
  designcolors_id: number | null;
  designs_id: number | null;
  bagid: number | null;
  quantity: number | null;
  itemtype_id: number | null;
}

export const useCreatedBagStore = create<createdBagStoreState>(
  persist(
    (set, get, del) => ({
      createdBag: [] as createdBagType[],
      itemtype_id: 1,
      bagid: 0,
      quantity: 0,
      addCreatedBag: (newCreatedBag) =>
        set((state) => {
          return { createdBag: [...state.createdBag, newCreatedBag] };
        }),

      color_id: null,
      setColor_id: (next) => set(() => ({ color_id: next })),
      designcolors_id: null,
      setDesigncolors_id: (next) => set(() => ({ designcolors_id: next })),
      designs_id: null,
      setDesigns_id: (next) => set(() => ({ designs_id: next })),

      deleteCreatedBag: (id) => {
        
       
      }
       
    }),
    {
      name: "createBag-storage ",
      serialize: (state) => JSON.stringify(state),
    }
  )
);
