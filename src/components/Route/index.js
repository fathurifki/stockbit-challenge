import * as React from 'react';
import { Router, Route } from "react-router-dom"
import history from '../../utils/history';
import Header from '../header';


const CustomRoute = ({ component: Component, ...rest }) => {
    const menu = ["/home", "/detail-page"]
    const isShowHeader = menu.includes(rest.path)

    const regexPath = new RegExp('\\w+', 'g')
    const newPath = regexPath.exec(rest.path)?.map((val) => val.toUpperCase().toString())

    return (
        <div className="h-full m-auto max-w-md bg-custom-custom7">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen">
                    <Header
                        isShowHeader={isShowHeader}
                        path={newPath}
                    />
                    <div id="scrollableDiv" className="w-full overflow-auto h-full">
                        <Router history={history}>
                            <Route {...rest} render={(props) => {
                                return <Component {...props} />
                            }}>
                            </Route>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomRoute