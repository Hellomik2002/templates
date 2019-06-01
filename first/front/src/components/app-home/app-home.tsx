import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @Prop() Cards: any;

  componentWillLoad() {}

  render() {
    console.log(window.location.pathname);
    console.log(this.Cards);
    return [
      <ion-header class="header">
        <ion-toolbar class="headerMain">
          <div id="logoHead">
            <img
                
              src="../../assets/logos/logo_transparent1.png"
              alt=""
            />
          </div>
          <div class="topor"> Home</div>
          <div class="topor"> Contancs</div>
          <div class="topor"> About</div>
          <div class="topor"> Description</div>
        </ion-toolbar>
        <div id="catalog1">&#x2631;</div>
      </ion-header>,
      <ion-content color="light" class="ion-padding">
        <div id="mainContainer">
          <div class="hi">
            <div>
              <h1>Хотите узнать как продать товар ?</h1>
              <p>Мы научим вас достигать высот, и быть лучшем в своем деле</p>
              <br />
              <br />
              <ion-list id="MainContainerBoxList">
                <ion-item class="MainContainItem">
                  <p class="pInClouds">
                    Вы узнаете как говорить с людми &#10004;
                  </p>
                </ion-item>
                <ion-item class="MainContainItem">
                  <p class="pInClouds">
                    Вы сможете успешно продавать свой товар &#10004;
                  </p>
                </ion-item>
                <ion-item class="MainContainItem">
                  <p class="pInClouds">Знание рынка &#10004;</p>
                </ion-item>
                <ion-item class="MainContainItem">
                  <p class="pInClouds">
                    Ходячия магия черт его побери &#10004;
                  </p>
                </ion-item>
              </ion-list>
            </div>
            <ion-card id="cardes">
              <center>
                <h2>Найди свой путь в Вершине !</h2>
              </center>
            </ion-card>
          </div>
        </div>
        <footer />
      </ion-content>
    ];
  }
}
