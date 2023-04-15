export interface Menu {
  name: string,
  key: string,
  icon: string
}
export interface Menus {
  name: string,
  menus: Menu[],
}