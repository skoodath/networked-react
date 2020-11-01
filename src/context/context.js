import React , {useState, createContext} from 'react';


export const MyMenucontext = createContext();

export const MyMenuAction = props => {
    const [open, setOpen] = useState(false);

    return (
        <MyMenucontext.Provider value={[open, setOpen]} >
            {props.children}
        </MyMenucontext.Provider>
    )
};

export const MyNetAppContext = createContext();

export const MyNetApplication = props => {
    const [app, showApp] = useState(false);

    return (
        <MyNetAppContext.Provider value={[app, showApp]}>
            {props.children}
        </MyNetAppContext.Provider>
    )
}
