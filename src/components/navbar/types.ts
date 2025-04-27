export type MenuOption = {
    label: string,
    value: string,
}

export type NavBarProps = {
    onClickMenuItem: (value: string) => void,
}