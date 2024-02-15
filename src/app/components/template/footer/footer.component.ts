import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    window.onscroll = () => this.scrollFunction();
  }

  scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
  }

  scrollFunction() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn') as HTMLElement; // Convertendo para HTMLElement
    if (scrollToTopBtn) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    }
  }

  redirectToContactScreen(){
    console.log('redirectToContactScreen')
  }

}
