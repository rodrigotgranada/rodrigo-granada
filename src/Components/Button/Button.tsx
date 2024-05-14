import React from 'react'

type Types = 'geral' | 'nav'

interface Props {
    types?: Types;

    children?: React.ReactNode;
    onClick?: () => void;
    classname?: string;
}


function getType(types: string) {
    let handleClass = '';
    types === 'geral' ?
        handleClass = `border-solid border-textColor border-4 text-textColor px-2 py-2 md:ml-8 text-lg uppercase tracking-widest duration-500 hover:bg-white hover:border-darkBlue hover:text-darkBlue`
        : handleClass = `xs:my-5 sm:my-4 md:ml-8 md:my-7 font-semibold text-textColor hover:text-darkBlue`
    return handleClass
}
const Button: React.FC<Props> = ({
    types = 'geral',
    children,
    onClick,
    classname
}) => {
    return (
        <>
            {types === 'geral' ? (

                <button
                    onClick={onClick}
                    className={`${getType(types)} ${classname ? classname : ""}`}
                >
                    {children}
                </button>

            ) : (
                <li onClick={onClick}
                    className={`${getType(types)} ${classname ? classname : ""}`}>
                    {children}
                </li>
            )}
        </>
    )
}

export default Button