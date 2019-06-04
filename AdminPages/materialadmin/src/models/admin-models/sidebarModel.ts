
class SideBar{
    icon :string;
    value:string;
    element: string;
    htmlElements:HTMLElement[];
    constructor(icon:string, value:string, element: string, htmlElements:HTMLElement[]){

        this.icon = icon;
        this.value = value;
        this.element = element;
        this.htmlElements= htmlElements;
    }
}
export {SideBar};