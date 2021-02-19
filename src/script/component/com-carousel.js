import Handwash from './image/handwash.jpg';
import Co from './image/co.jpg';
import Lockd from './image/lockdown.jpg'


class ComCarousel extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML=`   
        <div  class="carousel-slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
          <img  src=${Handwash}
            class="d-block w-100" alt="..." width="100%" height="400px">
          </div>
          <div class="carousel-item" data-interval="2000">
          <img src=${Co} class="d-block w-100" alt="..." width="100%" height="400px">

          </div>
          <div class="carousel-item">
          <img src=${Lockd} class="d-block w-100" alt="..." width="100%" height="400px">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>      
      `
    }
}
customElements.define("com-carousel", ComCarousel);




     
