import create from 'zustand'

type Data = {
  username: string
  password: string
  code: string
}

interface Login {
  data: Data
  setData: (data: Partial<Data>) => void
}

export const useLoginStore = create<Login>((set, get) => ({
  data: {
    username: '',
    password: '',
    code: '',
  },
  setData: (data: Partial<Data>) => {
    set((state) => ({
      ...state,
      data: {
        ...state.data,
        ...data,
      },
    }))
  },
}))
