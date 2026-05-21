import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>{
    return ({
        //state
        newCounter: 0,
        newCounter1: 100,
        //add user state (name,age,email)
        user:{name:"lalli",email:"lalli@mail.com",age:18},
        //function to change email
        changeEmail:()=>set({...user,email:"test@mail.com"}),
        //function to change name and age
        changeNameAndAge:()=>set({...user}),
        //functions to modify the state
        incrementCounter: () => set(state => ({ newCounter: state.newCounter + 1 })),
        decrementCounter: () => set(state => ({ newCounter: state.newCounter - 1 })),
        reset: () => set({ newCounter: 0 }),
         //function to change newCounter to 500
        reset: () => set({ newCounter1: 500 }),
        //function to decrement newCounter1 by 20
        decrementCounter: () => set(state => ({ newCounter1: state.newCounter1 - 20 })),

    })
})