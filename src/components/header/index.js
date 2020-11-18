import * as React from 'react';
import history from '../../utils/history'

const Header = ({ isShowHeader, path}) => {
    const showHeader = path.toString() === "HOME"

    return (
        <React.Fragment>
            <div className={`flex flex-row bg-custom-custom7 w-full ${showHeader ? 'h-16 justify-center' : 'h-16'} shadow-md`}>
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
        </React.Fragment>
    )
}


export default Header