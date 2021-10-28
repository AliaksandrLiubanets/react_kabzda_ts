import React from "react";

type AppTitleProps = {
    title: string
}

function AppTitle(props: AppTitleProps) {
    return <h1>{ props.title }</h1>
}

export default AppTitle