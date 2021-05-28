import React, { Children } from 'react'
import ExampleLayoutNavBar from './ExampleLayoutNavBar'
import ExampleLayoutFooter from './ExampleLayoutFooter'
export default function ExampleLayout(props: any) {
    return (<div className="index-page">
        <ExampleLayoutNavBar></ExampleLayoutNavBar>
        {props.children}
        <ExampleLayoutFooter></ExampleLayoutFooter>
    </div>);
}
