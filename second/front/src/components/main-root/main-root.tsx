import { Component, h } from "@stencil/core";

@Component({ tag: "main-root", styleUrl: "main-root.css" })
export class MainRoot {
  render() {
    return [
      <header class="s-header">
        <nav class="header-nav">
          <a href="#0" class="header-nav__close" title="close">
            <span>Close</span>
          </a>

          <div class="header-nav__content">
            <h3>Navigation</h3>

            <ul class="header-nav__list">
              <li class="current">
                <a class="smoothscroll" href="#home" title="home">
                  Home
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#services" title="services">
                  Services
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#works" title="works">
                  Works
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#clients" title="clients">
                  Clients
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#contact" title="contact">
                  Contact
                </a>
              </li>
            </ul>

            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum
              <a href="#0">voluptatem</a> porro iusto sequi veritatis libero
              enim. Iusto id suscipit veritatis neque reprehenderit.
            </p>

            <ul class="header-nav__social">
              <li>
                <a href="#">
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <a class="header-menu-toggle" href="#0">
          <span class="header-menu-text">Menu</span>
          <span class="header-menu-icon" />
        </a>
      </header>,
      <section
        id="home"
        class="s-home target-section"
        data-parallax="scroll"
       
        data-natural-width="3000"
        data-natural-height="2000"
        data-position-y="center"
      >
        <div class="overlay" />
        <div class="shadow-overlay" />

        <div class="home-content">
          <div class="row home-content__main">
            <h1>
              Обеспечения безопсаности <br />
              самое главное что <br />
              мы должны реализовать <br />
              Для современной молодежи
            </h1>
            <h3>Мы помогаем людям</h3>
            <div class="home-content__buttons">
              <a class="smoothscroll btn btn--stroke">О нас</a>
            </div>
          </div>
        </div>

        <ul class="home-social">
          <li>
            <a>
              <i class="fa fa-facebook" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-twitter" />
              <span>Twiiter</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-instagram" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-behance" />
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-dribbble" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
      </section>,
      <section id="about" class="s-about">
        <div class="row section-header has-bottom-sep" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead subhead--dark">Hello There</h3>
            <h1 class="display-1 display-1--light">We Are Glint</h1>
          </div>
        </div>

        <div class="row about-desc" data-aos="fade-up">
          <div class="col-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt.
            </p>
          </div>
        </div>

        <div
          class="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
          data-aos="fade-up"
        >
          <div class="col-block stats__col ">
            <div class="stats__count">127</div>
            <h5>Awards Received</h5>
          </div>
          <div class="col-block stats__col">
            <div class="stats__count">1505</div>
            <h5>Cups of Coffee</h5>
          </div>
          <div class="col-block stats__col">
            <div class="stats__count">109</div>
            <h5>Projects Completed</h5>
          </div>
          <div class="col-block stats__col">
            <div class="stats__count">102</div>
            <h5>Happy Clients</h5>
          </div>
        </div>

        <div class="about__line" />
      </section>,
      <section id="services" class="s-services">
        <div class="row section-header has-bottom-sep" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead">What We Do</h3>
            <h1 class="display-2">
              We’ve got everything you need to launch and grow your business
            </h1>
          </div>
        </div>

        <div class="row services-list block-1-2 block-tab-full">
          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-paint-brush" />
            </div>
            <div class="service-text">
              <h3 class="h2">Brand Identity</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-group" />
            </div>
            <div class="service-text">
              <h3 class="h2">Illustration</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-megaphone" />
            </div>
            <div class="service-text">
              <h3 class="h2">Marketing</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-earth" />
            </div>
            <div class="service-text">
              <h3 class="h2">Web Design</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-cube" />
            </div>
            <div class="service-text">
              <h3 class="h2">Packaging Design</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <i class="icon-lego-block" />
            </div>
            <div class="service-text">
              <h3 class="h2">Web Development</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
        </div>
      </section>,
      <section id="works" class="s-works">
        <div class="intro-wrap">
          <div
            class="row section-header has-bottom-sep light-sep"
            data-aos="fade-up"
          >
            <div class="col-full">
              <h3 class="subhead">Recent Works</h3>
              <h1 class="display-2 display-2--light">
                We love what we do, check out some of our latest works
              </h1>
            </div>
          </div>
        </div>

        <div class="row works-content">
          <div class="col-full masonry-wrap">
            <div class="masonry">
              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                    <a
                     
                      class="thumb-link"
                      title="Shutterbug"
                      data-size="1050x700"
                    >
                      
                    </a>
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">Shutterbug</h3>
                    <p class="item-folio__cat">Branding</p>
                  </div>

                  <a
                   
                    class="item-folio__project-link"
                    title="Project link"
                  >
                    <i class="icon-link" />
                  </a>

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                   
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">Woodcraft</h3>
                    <p class="item-folio__cat">Web Design</p>
                  </div>

                 

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                    
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">The Beetle</h3>
                    <p class="item-folio__cat">Web Development</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    class="item-folio__project-link"
                    title="Project link"
                  >
                    <i class="icon-link" />
                  </a>

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                   
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">Grow Green</h3>
                    <p class="item-folio__cat">Branding</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    class="item-folio__project-link"
                    title="Project link"
                  >
                    <i class="icon-link" />
                  </a>

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                    
                    
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">Guitarist</h3>
                    <p class="item-folio__cat">Web Design</p>
                  </div>

                  

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="masonry__brick" data-aos="fade-up">
                <div class="item-folio">
                  <div class="item-folio__thumb">
                   
                  </div>

                  <div class="item-folio__text">
                    <h3 class="item-folio__title">Palmeira</h3>
                    <p class="item-folio__cat">Web Design</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    class="item-folio__project-link"
                    title="Project link"
                  >
                    <i class="icon-link" />
                  </a>

                  <div class="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora
                      numquam. Temporibus iusto quo.Unde dolorem corrupti neque
                      nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ,
      <section id="clients" class="s-clients">
        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead">Our Clients</h3>
            <h1 class="display-2">
              Glint has been honored to partner up with these clients
            </h1>
          </div>
        </div>
        <div class="row clients-testimonials" data-aos="fade-up">
          <div class="col-full">
            <div class="testimonials">
              <div class="testimonials__slide">
                <p>
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque
                  distinctio nam accusantium ipsum. Laudantium quia consequatur
                  molestias delectus culpa facere hic dolores aperiam.
                  Accusantium quos qui praesentium corpori. Excepturi nam
                  cupiditate culpa doloremque deleniti repellat.
                </p>

                
                <div class="testimonials__info">
                  <span class="testimonials__name">Tim Cook</span>
                  <span class="testimonials__pos">CEO, Apple</span>
                </div>
              </div>

              <div class="testimonials__slide">
                <p>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                  Qui ipsam temporibus quisquam vel.
                </p>

                
                <div class="testimonials__info">
                  <span class="testimonials__name">Sundar Pichai</span>
                  <span class="testimonials__pos">CEO, Google</span>
                </div>
              </div>

              <div class="testimonials__slide">
                <p>
                  Repellat dignissimos libero. Qui sed at corrupti expedita
                  voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum
                  accusamus. Quasi voluptas eius distinctio.
                </p>

               
                <div class="testimonials__info">
                  <span class="testimonials__name">Satya Nadella</span>
                  <span class="testimonials__pos">CEO, Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ,
      <section id="contact" class="s-contact">
        <div class="overlay" />

        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead">Contact Us</h3>
            <h1 class="display-2 display-2--light">
              Reach out for a new project or just say hello
            </h1>
          </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">
          <div class="contact-primary">
            <h3 class="h6">Send Us A Message</h3>

            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              novalidate="novalidate"
            >
              <fieldset>
                <div class="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    value=""
                    minlength="2"
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    value=""
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    value=""
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <button class="full-width btn--primary">Submit</button>
                  <div class="submit-loader">
                    <div class="text-loader">Sending...</div>
                    <div class="s-loader">
                      <div class="bounce1" />
                      <div class="bounce2" />
                      <div class="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            <div class="message-warning">
              Something went wrong. Please try again.
            </div>

            <div class="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <div class="contact-secondary">
            <div class="contact-info">
              <h3 class="h6 hide-on-fullwidth">Contact Info</h3>

              <div class="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div class="cinfo">
                <h5>Email Us At</h5>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="c4a7abaab0a5a7b084a3a8adaab0b7adb0a1eaa7aba9"
                  >
                    [email&#160;protected]
                  </a>
                  <br />
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="3950575f56795e5550574d4a504d5c175a5654"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>

              <div class="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+63) 555 1212
                  <br />
                  Mobile: (+63) 555 0100
                  <br />
                  Fax: (+63) 555 0101
                </p>
              </div>

              <ul class="contact-social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-behance" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      ,
      <footer>
        <div class="row footer-main">
          <div class="col-six tab-full left footer-desc">
            <div class="footer-logo"></div>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </div>
  
          <div class="col-six tab-full right footer-subscribe">
            <h4>Get Notified</h4>
            <p>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
  
            <div class="subscribe-form">
              <form id="mc-form" class="group" novalidate="true">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="email"
                  id="mc-email"
                  placeholder="Email Address"
                  
                />
                <input type="submit" name="subscribe" value="Subscribe" />
                
              </form>
            </div>
          </div>
        </div>
        
  
        <div class="row footer-bottom">
          <div class="col-twelve">
            <div class="copyright">
              <span>© Copyright Glint 2017</span>
              <span
                >Site Template by
                <a href="https://www.colorlib.com/">Colorlib</a></span
              >
            </div>
  
            <div class="go-top">
              <a class="smoothscroll" title="Back to Top" href="#top"
                ><i class="icon-arrow-up" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        
      </footer>
      ,
      <div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>
  
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button
                class="pswp__button pswp__button--close"
                title="Close (Esc)"
              ></button>
              <button
                class="pswp__button pswp__button--share"
                title="Share"
              ></button>
              <button
                class="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              ></button>
              <button
                class="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              ></button>
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
            >
              <div class="pswp__share-tooltip"></div>
            </div>
            <button
              class="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>
            <button
              class="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>
            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>  
      ,
      
];
  }
}
