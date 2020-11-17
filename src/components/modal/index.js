import React from 'react'

export const ModalInfo = ({ src, onClick }) => {
    return (
        <>
            <button onClick={onClick}>
                <div className="max-w-md m-auto">
                    <div className="justify-center items-center flex absolute inset-0 z-50">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="bg-white rounded-md shadow m-4  max-w-xs max-h-full text-left ">
                                <img alt="imageProps" src={src}></img>
                            </div>
                            <span className="text-white text-md font-thin">Tap Everywhere For Close</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-40 bg-black opacity-25"></div>
                </div>
            </button>
        </>
    );
};