import * as React from 'react';
import history from '../../utils/history'

const Header = ({ isShowHeader, path, onChange, dispatch }) => {
    console.log('IS', path)
    const showHeader = path.toString() === "HOME"

    return (
        <React.Fragment>
            <div className={`flex flex-row bg-custom-custom7 w-full ${showHeader ? 'h-8 justify-center' : 'h-16'} shadow-md`}>
                {
                    showHeader &&
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">MOVIELIST</p>
                    </div>
                }
                {
                    !showHeader &&
                    <>
                        <div className="cursor-pointer flex flex-col justify-center items-center px-6">
                            <button onClick={() => history.push}>Back</button>
                            {/* <img src={image.back} width={20} alt="icon"></img> */}
                        </div>
                        <span className="font-bold flex flex-col justify-center">{path}</span>
                    </>
                }
            </div>
            {
                showHeader &&
                <div className="flex flex-row bg-custom-custom7 w-full justify-center h-12 shadow-md">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="flex flex-row space-x-2 mb-2">
                            <input onChange={onChange} name="searchbar" placeholder="Search Movie ex. Batman" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"></input>
                            <button onClick={dispatch} className="font-bold">Search</button>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}


export default Header