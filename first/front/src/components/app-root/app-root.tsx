import { Component, h } from "@stencil/core";
import { product_card } from "../../global/class/ionCard";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
        </ion-router>
        <ion-nav />
      </ion-app>
      // */
    );
  }
}
