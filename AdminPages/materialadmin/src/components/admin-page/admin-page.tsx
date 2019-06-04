import { Component, h, Prop } from "@stencil/core";
import { SideBar } from "../../models/admin-models/sidebarModel";
import "../UI_elemetns/icon-page/icon-page";
import { IconPage } from "../UI_elemetns/icon-page/icon-page";

@Component({
  tag: "admin-page", //NOTE 
  styleUrl: "admin-page.css"
})
export class AdminPage {
  @Prop() nav_items: SideBar[] = [
    new SideBar("dashboard", "Dashboard","icon-page",(new IconPage()).render()),
    new SideBar("content_paste", "Table List","icon-page",(new IconPage()).render()),
    new SideBar("library_books", "Typography","icon-page",(new IconPage()).render()),
    new SideBar("bubble_chart", "Icons","icon-page",(new IconPage()).render()),
    new SideBar("location_ons", "Maps","icon-page",(new IconPage()).render()),
    new SideBar("notifications", "Notifications","icon-page",(new IconPage()).render())
  ];
  @Prop() current_item: number = 0;

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
                    "nav-item " + (this.current_item == index ? "active" : "")
                  }
                >
                  <a class="nav-link" onClick={()=>this.changeCurrentItem(index)}>
                    <i class="material-icons">{nav_item.icon}</i>
                    <p>{nav_item.value}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>      
        </div>
        <slot name= "icon-page">

        </slot>
        
        {this.nav_items[this.current_item].htmlElements}
                  
      </div>
      /*
      <div class="fixed-plugin">
        <div class="dropdown show-dropdown">
          <a href="#" data-toggle="dropdown">
            <i class="fa fa-cog fa-2x"> </i>
          </a>
          <ul class="dropdown-menu">
            <li class="header-title">Sidebar Filters</li>
            <li class="adjustments-line">
              <a class="switch-trigger active-color">
                <div class="badge-colors ml-auto mr-auto">
                  <span class="badge filter badge-purple" data-color="purple" />
                  <span class="badge filter badge-azure" data-color="azure" />
                  <span class="badge filter badge-green" data-color="green" />
                  <span
                    class="badge filter badge-warning"
                    data-color="orange"
                  />
                  <span class="badge filter badge-danger" data-color="danger" />
                  <span
                    class="badge filter badge-rose active"
                    data-color="rose"
                  />
                </div>
                <div class="clearfix" />
              </a>
            </li>
            <li class="header-title">Images</li>
            <li class="active">
              <a class="img-holder switch-trigger">
                <img src="../assets/img/sidebar-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a class="img-holder switch-trigger">
                <img src="../assets/img/sidebar-2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a class="img-holder switch-trigger">
                <img src="../assets/img/sidebar-3.jpg" alt="" />
              </a>
            </li>
            <li>
              <a class="img-holder switch-trigger">
                <img src="../assets/img/sidebar-4.jpg" alt="" />
              </a>
            </li>
            <li class="button-container">
              <a
                href="https://www.creative-tim.com/product/material-dashboard"
                target="_blank"
                class="btn btn-primary btn-block"
              >
                Free Download
              </a>
            </li>

            <li class="button-container">
              <a
                href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html"
                target="_blank"
                class="btn btn-default btn-block"
              >
                View Documentation
              </a>
            </li>
            <li class="button-container github-star">
              <a
                class="github-button"
                href="https://github.com/creativetimofficial/material-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star ntkme/github-buttons on GitHub"
              >
                Star
              </a>
            </li>
            <li class="header-title">Thank you for 95 shares!</li>
            <li class="button-container text-center">
              <button id="twitter" class="btn btn-round btn-twitter">
                <i class="fa fa-twitter" /> &middot; 45
              </button>
              <button id="facebook" class="btn btn-round btn-facebook">
                <i class="fa fa-facebook-f" /> &middot; 50
              </button>
              <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
      /* */
    ];
  }
}

{
  /*/*
<!--   Core JS Files   -->
  <script src="../assets/js/core/jquery.min.js"></script>
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap-material-design.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <!-- Plugin for the momentJs  -->
  <script src="../assets/js/plugins/moment.min.js"></script>
  <!--  Plugin for Sweet Alert -->
  <script src="../assets/js/plugins/sweetalert2.js"></script>
  <!-- Forms Validations Plugin -->
  <script src="../assets/js/plugins/jquery.validate.min.js"></script>
  <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
  <script src="../assets/js/plugins/jquery.bootstrap-wizard.js"></script>
  <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
  <script src="../assets/js/plugins/bootstrap-selectpicker.js"></script>
  <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
  <script src="../assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
  <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
  <script src="../assets/js/plugins/jquery.dataTables.min.js"></script>
  <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
  <script src="../assets/js/plugins/bootstrap-tagsinput.js"></script>
  <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
  <script src="../assets/js/plugins/jasny-bootstrap.min.js"></script>
  <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
  <script src="../assets/js/plugins/fullcalendar.min.js"></script>
  <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
  <script src="../assets/js/plugins/jquery-jvectormap.js"></script>
  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="../assets/js/plugins/nouislider.min.js"></script>
  <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
  <!-- Library for adding dinamically elements -->
  <script src="../assets/js/plugins/arrive.min.js"></script>
  <!--  Google Maps Plugin    -->
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
  <!-- Chartist JS -->
  <script src="../assets/js/plugins/chartist.min.js"></script>
  <!--  Notifications Plugin    -->
  <script src="../assets/js/plugins/bootstrap-notify.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/material-dashboard.js?v=2.1.1" type="text/javascript"></script>
  <!-- Material Dashboard DEMO methods, don't include it in your project! -->
  <script src="../assets/demo/demo.js"></script>
  <script>
    $(document).ready(function() {
      $().ready(function() {
        $sidebar = $('.sidebar');

        $sidebar_img_container = $sidebar.find('.sidebar-background');

        $full_page = $('.full-page');

        $sidebar_responsive = $('body > .navbar-collapse');

        window_width = $(window).width();

        fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

        if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
          if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
            $('.fixed-plugin .dropdown').addClass('open');
          }

        }

        $('.fixed-plugin a').click(function(event) {
          // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
          if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (window.event) {
              window.event.cancelBubble = true;
            }
          }
        });

        $('.fixed-plugin .active-color span').click(function() {
          $full_page_background = $('.full-page-background');

          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data-color', new_color);
          }

          if ($full_page.length != 0) {
            $full_page.attr('filter-color', new_color);
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.attr('data-color', new_color);
          }
        });

        $('.fixed-plugin .background-color .badge').click(function() {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('background-color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data-background-color', new_color);
          }
        });

        $('.fixed-plugin .img-holder').click(function() {
          $full_page_background = $('.full-page-background');

          $(this).parent('li').siblings().removeClass('active');
          $(this).parent('li').addClass('active');


          var new_image = $(this).find("img").attr('src');

          if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            $sidebar_img_container.fadeOut('fast', function() {
              $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
              $sidebar_img_container.fadeIn('fast');
            });
          }

          if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $full_page_background.fadeOut('fast', function() {
              $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
              $full_page_background.fadeIn('fast');
            });
          }

          if ($('.switch-sidebar-image input:checked').length == 0) {
            var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
            $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
          }
        });

        $('.switch-sidebar-image input').change(function() {
          $full_page_background = $('.full-page-background');

          $input = $(this);

          if ($input.is(':checked')) {
            if ($sidebar_img_container.length != 0) {
              $sidebar_img_container.fadeIn('fast');
              $sidebar.attr('data-image', '#');
            }

            if ($full_page_background.length != 0) {
              $full_page_background.fadeIn('fast');
              $full_page.attr('data-image', '#');
            }

            background_image = true;
          } else {
            if ($sidebar_img_container.length != 0) {
              $sidebar.removeAttr('data-image');
              $sidebar_img_container.fadeOut('fast');
            }

            if ($full_page_background.length != 0) {
              $full_page.removeAttr('data-image', '#');
              $full_page_background.fadeOut('fast');
            }

            background_image = false;
          }
        });

        $('.switch-sidebar-mini input').change(function() {
          $body = $('body');

          $input = $(this);

          if (md.misc.sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            md.misc.sidebar_mini_active = false;

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

          } else {

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

            setTimeout(function() {
              $('body').addClass('sidebar-mini');

              md.misc.sidebar_mini_active = true;
            }, 300);
          }

          // we simulate the window Resize so the charts will get updated in realtime.
          var simulateWindowResize = setInterval(function() {
            window.dispatchEvent(new Event('resize'));
          }, 180);

          // we stop the simulation of Window Resize after the animations are completed
          setTimeout(function() {
            clearInterval(simulateWindowResize);
          }, 1000);

        });
      });
    });
  </script>
*/
}
