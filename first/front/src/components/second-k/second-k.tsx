import { Component, h,Prop } from "@stencil/core";

import  {product_card} from "../../global/class/ionCard";


@Component({
  tag: "second-k",  
  //styleUrl: "app-home.css"
})
export class SecondK {
  @Prop() Cards : product_card;
  
  componentWillLoad() {}


  render() {
    //console.log(window.location.pathname)
    console.log(this.Cards);
    return [      
        
        <div class="hi">
          <ion-card class="cardes">
            <center>
              <p>dsa + {this.Cards.imgPath}</p>
            </center>
          </ion-card>
          <ion-card class="cardes">
            
            <center>
              <p>dsa</p>
            </center>
          </ion-card>
          <ion-card class="cardes">
            <center>
              <p>dsa</p>
            </center>
          </ion-card>
        </div>
        
    ];
  }
}
