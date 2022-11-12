const ROUTE_CHANGE_EVENT = 'ROUTE_CHAGE'

export const init = (onRouteChange) => {
    window.addEventListener(ROUTE_CHANGE_EVENT, () => {
        onRouteChange()
    })
}

export const routeChage = (url, params) => {
    history.pushState(null, null, url)
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params))
}