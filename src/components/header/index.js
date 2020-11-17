import * as React from 'react';
import history from '../../utils/browserHistory'

const Header = ({ isShowHeader, path }) => {
    console.log('IS', path)
    const showHeader = path.toString() === "HOME"
    return (
        <React.Fragment>
            <div className={`flex flex-row bg-custom-custom7 w-full ${showHeader ? 'h-8 justify-center' : 'h-16'} shadow-md`}>
                {
                    showHeader &&
                    <div className="flex flex-col justify-center items-center">
                        <p>MovieList</p>
                    </div>
                }
                {
                    !showHeader &&
                    <>
                        <div className="cursor-pointer flex flex-col justify-center items-center px-6">
                            <button>Back</button>
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
                        <div className="flex flex-row space-x-2">
                            <input></input>
                            <button>search</button>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}


export default Header