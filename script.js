class Page {
    links = {
        about: document.querySelector("#aboutLink"),
        services: document.querySelector("#servicesLink"),
        contact: document.querySelector("#contactLink")
    };
    sections = {
        services: document.querySelector("#services"),
        contact: document.querySelector("#contact")
    };
    logo = document.querySelector('#logo');
    pageHeader = document.querySelector('#pageHeader');
    inputs = document.querySelectorAll('.input__field');

    constructor() {
        this.initMenu()
        this.initOnScroll();
        this.initInputEffect();
    }

    initMenu() {
        this.initMenuItem(this.links.about, () => window.scrollTo(0, 0));
        this.initMenuItem(this.links.services, () => this.sections.services.scrollIntoView());
        this.initMenuItem(this.links.contact, () => this.sections.contact.scrollIntoView());
    }

    initMenuItem(item, action) {
        const acition = event => {
            this.removeSelectedClass();
            item.classList.add('navigation--selected');
            action();
        };
        item.onclick = acition;
        item.ontouchstart = acition;
    }

    initOnScroll() {
        window.onscroll = () => {
            this.logo.classList.toggle('logo-image__small', window.scrollY > 0);
            this.pageHeader.classList.toggle('page-header--small', window.scrollY > 0);
        }
    }

    initInputEffect() {
        this.inputs.forEach(input => input.onblur = event => 
            input.parentElement.classList.toggle("input--filled", event.target.value));
    }

    removeSelectedClass() {
        Object.values(this.links).forEach(link => link.classList.remove('navigation--selected'));
    }
        
}
window.onload = function () {
    new Page();
};