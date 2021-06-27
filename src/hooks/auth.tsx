import React,
{   createContext,
    useContext,
    useState,
    ReactNode}
 from 'react';

 type User= {
    id:string;
    username:string;
    firstName:string;
    avatar:string;
    email:string;
    token:string;
 }

 type AuthContext ={
     user:User;
 }

 type AuthProviderProps ={
    children:ReactNode;
 }

export const AuthContext = createContext({} as AuthContext);

function AuthProvider({children}:AuthProviderProps){
    const [user,setUser]=useState<User>({
        id:'1',
        username:'allanwalker23',
        firstName:'Allan',
        avatar:'allan.png',
        email:'allanhipolito66@gmail.com',
        token:'#52662172617127',
    });
    
    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider> 
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export{AuthProvider,useAuth}

