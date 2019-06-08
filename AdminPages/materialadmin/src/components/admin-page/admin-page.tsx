import { Component, h, Prop } from '@stencil/core';
import { SideBar } from '../../models/admin-models/sidebarModel';

@Component({
    tag: 'admin-page', //NOTE
    styleUrl: 'admin-page.css'
})
export class AdminPage {
    @Prop() nav_items: SideBar[] = [
        new SideBar('dashboard', 'Dashboard', 'icon-page', <card-page />),
        new SideBar('content_paste', 'Table List', 'icon-page', <add-post />),
        new SideBar('library_books', 'Typography', 'icon-page', <card-page />)
    ];
    @Prop() current_item: number = 1;

    changeCurrentItem(index: number) {
        this.current_item = index;
    }
    render() {
        return [
            <div class="wrapper ">
                <div
                    class="sidebar"
                    data-color="purple"
                    data-background-color="white"
                    data-image="../assets/img/sidebar-1.jpg"
                >
                    <div class="logo">
                        <a
                            href="http://www.creative-tim.com"
                            class="simple-text logo-normal"
                        >
                            Creative Tim
                        </a>
                    </div>
                    <div class="sidebar-wrapper">
                        <ul class="nav">
                            {this.nav_items.map((nav_item, index) => (
                                <li
                                    class={
                                        'nav-item ' +
                                        (this.current_item == index
                                            ? 'active'
                                            : '')
                                    }
                                >
                                    <a
                                        class="nav-link"
                                        onClick={() =>
                                            this.changeCurrentItem(index)
                                        }
                                    >
                                        <i class="material-icons">
                                            {nav_item.icon}
                                        </i>
                                        <p>{nav_item.value}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <slot name="icon-page" />

                {this.nav_items[this.current_item].htmlElements}
            </div>
        ];
    }
}
