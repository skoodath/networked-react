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

export const MyBenefitContext = createContext();

export const MyBenefits = props => {
    const [showDesc, setShowDesc] = useState(false);

    return (
        <MyBenefitContext.Provider value={[showDesc, setShowDesc]}>
            {props.children}
        </MyBenefitContext.Provider>
    )
}
