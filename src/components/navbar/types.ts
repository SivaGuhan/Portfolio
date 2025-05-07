export type MenuOption = {
    id: string,
    label: string,
}

export type NavBarProps = {
    onClickMenuItem: (value: string) => void,
    sections: Array<MenuOption>
}