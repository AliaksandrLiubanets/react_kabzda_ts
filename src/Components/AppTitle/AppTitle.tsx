import React from "react";

type AppTitleProps = {
    title: string
}

function AppTitle(props: AppTitleProps) {
    console.log('AppTitle is rendering')
    return <h1>{ props.title }</h1>
}

export default AppTitle