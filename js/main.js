//elements
const descriptionSpan = document.querySelector('#description');
const menuUl = document.querySelector('#menu-list');
const pageTitleH1 = document.querySelector('#page-title');
const pageTextDiv = document.querySelector('#page-text');
const footerTitleH2 = document.querySelector('#footer-title');
const footerDescriptionSpan = document.querySelector('#footer-description');
const usaFlagLink = document.querySelector('#usa-flag');
const brasilianFlagLink = document.querySelector('#brasilian-flag');
const skillContentText = document.querySelector('#skill');
const contactContentText = document.querySelector('#contact-text');

let curUrl = window.location.href;
curUrl = curUrl.split('/')[curUrl.split('/').length -1].split('.')[0];

//Portuguese / English texts

const description = {
    english: `What I've learned so far`,
    portuguese: `O que aprendi até agora`
}

const menu = {
    english: ['About me', 'Projects', 'Skills', 'Contact'],
    portuguese: ['Sobre', 'Projetos', 'Habilidades', 'Contato'],
    links: ['index.html', 'projects.html', 'skills.html', 'contact.html']
};

const indexPageContent = {
    english: {
        pageTitle: 'About me',
        pageContent: `<p>Hello! My name is Rodrigo Duque. Welcome to my Codecademy Portfolio site! On this site, I've tried to include everything I've learned during my Full Stack Developer course. This is my second project, and according to our task, I was supposed to create a portfolio site to present the projects I've created on the platform! The site was supposed to be a static site with at least one interaction in JavaScript.</p>

        <p>Well then! I decided to create a site that is visually simple but a bit more complex than it seems. If you look to the left, we have 2 small flags. Each of them will trigger a series of events that will translate the site either to English (USA flag) or Portuguese (Brazil flag).</p>

        <p>To do this, I created objects containing the text values I wanted to swap. It was a bit of work, but it served to test what I learned using various JavaScript tools. I hope you like it! Be sure to check out the other projects in the PROJECTS tab, and if you want to get in touch, my social networks are available in the CONTACT tab! Thank you for visiting!</p>`,
        footerTitle: `Some skills that I learned so far!`,
        footerDescription: `(This is a work in progress list)`
    },
    portuguese: {
        pageTitle: 'Sobre',
        pageContent: `<p>Olá! Meu nome é Rodrigo Duque. Seja muito bem vindo ao meu site de Portfólio do Codecademy! Nesse site eu procurei colocar tudo que tenho aprendido durante meu curso de Full Stack Developer. Esse é meu segundo projeto e de acordo com nossa tarefa eu deveria criar um site portfólio para apresentar os projetos que criei na plataforma! O site deveria ser um site estático com pelo menos uma interação em Javascript.</p>

        <p>Pois bem! Resolvi então criar um site visualmente simples mas um pouco mais complexo do que parece. Se observarem a esquerda nós temos 2 bandeirinhas. Cada uma delas vai ativar uma série de eventos que vai traduzir o site ou para o inglês (bandeira EUA) ou português (bandeira do Brasil).</p>

        <p>Para fazer isso eu criei objetos contendo os valores de texto que gostaria de trocar. Deu um pouco de trabalho mas serviu para eu testar o que aprendi utilizando várias ferramentas do Javascript. Espero que gostem! Não deixem de olhar os outros projetos na aba PROJETOS e caso queiram entrar em contato minhas redes sociais estão disponíveis na aba CONTATO! Obrigado pela visita!</p>`,
        footerTitle: `Algumas habilidades que aprendi até o momento`,
        footerDescription: `(Essa é uma lista em atualização)`
    }
}

const projectsPageContent = {
    english: {
        pageTitle: 'Projects',
        pageContent: `<p>Welcome to my Projects page! Here you will find a collection of the work I have created, inspired by the challenges and courses at Codecademy. Each project represents a step in my journey to master full-stack development, showcasing the skills and creativity I have honed along the way. Each one has a link to the live project and a link to the GitHub repository for you to see how it was done! I hope you enjoy it!</p>
        <h3>List of projects</h3>
        <div class="projects">
            <div class="project">
                <h4>Random sentence generator</h4>
                <p>A simple project that group some semi random words to create a sentence.</p>
                <a target="_blank" href="https://github.com/rodukao/random-sentence-generator">Visit project github page</a><a target="_blank" href="https://rodukao.github.io/random-sentence-generator/">Live view</a>
            </div>
            <div class="project">
                <h4>Portfolio website</h4>
                <p>This very own website that I created for the portfolio website project.</p>
                <a target="_blank" href="https://github.com/rodukao/codecademy-portfolio-website">Visit project github page</a><a target="_blank" href="https://rodukao.github.io/codecademy-portfolio-website/">Live view</a>
            </div>
        </div>`
    },
    portuguese: {
        pageTitle: 'Projetos',
        pageContent: `<p>Bem-vindo à minha página de Projetos! Aqui você encontrará uma coleção dos trabalhos que criei, inspirados pelos desafios e cursos da Codecademy. Cada projeto representa um passo na minha jornada para dominar o desenvolvimento full-stack, mostrando as habilidades e criatividade que aprimorei ao longo do caminho. Cada um deles possui um link para o projeto em funcionamento e um link para o repositório do GitHub para vocês verem como foi feito! Espero que gostem!</p>
        <h3>Lista de projetos</h3>
        <div class="projects">
            <div class="project">
                <h4>Random sentence generator</h4>
                <p>Um projetinho simples que agrupa um conjunto de palavras para formar uma frase aleatória</p>
                <a target="_blank" href="https://github.com/rodukao/random-sentence-generator">Visite a página do projeto no GitHub</a><a target="_blank" href="https://rodukao.github.io/random-sentence-generator/">Live view</a>
            </div>
            <div class="project">
                <h4>Portfolio website</h4>
                <p>Esse mesmo site que vocês estão navegando! Um site simples mas exageradamente complexo.</p>
                <a target="_blank" href="https://github.com/rodukao/codecademy-portfolio-website">Visit project github page</a><a target="_blank" href="https://rodukao.github.io/codecademy-portfolio-website/">Live view</a>
            </div>
        </div>`
    }
}

const skillsPageContent = {
    english: {
        pageTitle: 'Skills',
        skill: {
            html: `<h3>Html 5</h3><p>In learning HTML, I really got to grips with how websites are built from the ground up. I focused a lot on semantic elements, which help organize web content and make it more accessible to both users and search engines. It's all about using the right tags like header, nav, section, and footer to structure a page properly.</p>
                
            <p>I've also worked with tables and forms, which are key for presenting data and interacting with users. Understanding the basics, like how to structure a document, add images, create links, and embed videos, has been essential. Every project I do lets me practice and get better at these skills, making my web pages more effective and user-friendly</p>`
        } 
    },
    portuguese: {
        pageTitle: 'Habilidades',
        skill: {
            html: `<h3>Html 5</h3>
            <p>Ao aprender HTML, eu realmente entendi como os sites são construídos desde a base. Foquei muito em elementos semânticos, que ajudam a organizar o conteúdo da web e torná-lo mais acessível tanto para os usuários quanto para os motores de busca. É tudo sobre usar as tags certas como header, nav, section e footer para estruturar uma página corretamente.</p>
                
            <p>Também trabalhei com tabelas e formulários, que são fundamentais para apresentar dados e interagir com os usuários. Entender os conceitos básicos, como estruturar um documento, adicionar imagens, criar links e incorporar vídeos, tem sido essencial. Cada projeto que faço me permite praticar e melhorar nessas habilidades, tornando minhas páginas web mais eficazes e amigáveis para o usuário.</p>`
        }
    }
}

const contactPageContent = {
    english: {
        pageTitle: 'Contact',
        pageContent: `<p>Thanks for making it to my Contact page! I hope you've enjoyed exploring my site and getting a glimpse into the projects and skills I'm passionate about. If you'd like to reach out, share some thoughts, or just say hi, I'd love to hear from you. You can find me on the social media platforms listed below. Drop me a message anytime, and let's connect!</p>`
    },
    portuguese: {
        pageTitle: 'Contato',
        pageContent: `<p>Obrigado por visitar a minha página de Contato! Espero que tenha gostado de explorar meu site e de ter uma ideia dos projetos e habilidades pelos quais sou apaixonado. Se quiser entrar em contato, compartilhar algumas ideias ou apenas dizer oi, adoraria ouvir de você. Você pode me encontrar nas plataformas de mídia social listadas abaixo. Envie-me uma mensagem a qualquer momento, e vamos nos conectar!</p>`
    }
}

//Populating texts

const populateDescription = language => {
    return language === 'english' ? descriptionSpan.innerHTML = description.english : descriptionSpan.innerHTML = description.portuguese;
}

const populateMenu = language => {
    menuUl.innerHTML = '';

    if(language === 'english'){
        menu.english.forEach((element, i) => {
            const li = document.createElement('li');
            menuUl.appendChild(li);
            li.innerHTML = `<a href=${menu.links[i]}>${element}</a>`
        })
    } else {
        menu.portuguese.forEach((element, i) => {
            const li = document.createElement('li');
            menuUl.appendChild(li);
            li.innerHTML = `<a href=${menu.links[i]}>${element}</a>`
        })
    }
}

const populatePageContent = (page, language) => {
    switch (page){
        case 'index':
            populateIndexPage(language);
            break; 

        case 'projects':
            populateProjectsPage(language)
            break;
        
        case 'skills':
            populateSkillsPage(language)
            break;

        case 'contact':
            populateContactPage(language)
            break;

        default:
            return;
    }
}

const populateIndexPage = language => {
    if(language === 'english'){
        pageTitleH1.innerHTML = indexPageContent.english.pageTitle;
        pageTextDiv.innerHTML = indexPageContent.english.pageContent;
        footerTitleH2.innerHTML = indexPageContent.english.footerTitle;
        footerDescriptionSpan.innerHTML = indexPageContent.english.footerDescription;
    } else {
        pageTitleH1.innerHTML = indexPageContent.portuguese.pageTitle;
        pageTextDiv.innerHTML = indexPageContent.portuguese.pageContent;
        footerTitleH2.innerHTML = indexPageContent.portuguese.footerTitle;
        footerDescriptionSpan.innerHTML = indexPageContent.portuguese.footerDescription;
    }
}

const populateProjectsPage = language => {
    if(language === 'english'){
        pageTitleH1.innerHTML = projectsPageContent.english.pageTitle;
        pageTextDiv.innerHTML = projectsPageContent.english.pageContent;
    } else {
        pageTitleH1.innerHTML = projectsPageContent.portuguese.pageTitle;
        pageTextDiv.innerHTML = projectsPageContent.portuguese.pageContent;
    }
}

const populateSkillsPage = language => {
    if(language === 'english'){
        pageTitleH1.innerHTML = skillsPageContent.english.pageTitle;
        skillContentText.innerHTML = skillsPageContent.english.skill.html;
    } else {
        pageTitleH1.innerHTML = skillsPageContent.portuguese.pageTitle;
        skillContentText.innerHTML = skillsPageContent.portuguese.skill.html;
    }
}

const populateContactPage = language => {
    if(language === 'english'){
        pageTitleH1.innerHTML = contactPageContent.english.pageTitle;
        contactContentText.innerHTML = contactPageContent.english.pageContent;
    } else {
        pageTitleH1.innerHTML = contactPageContent.portuguese.pageTitle;
        contactContentText.innerHTML = contactPageContent.portuguese.pageContent;
    }
}

const populateSite = (language, url) => {
    populateDescription(language);
    populateMenu(language);
    populatePageContent(url, language)
}

usaFlagLink.addEventListener('click', () => {
    document.cookie = 'language=english;path=/';
    populateSite("english", curUrl)
});

brasilianFlagLink.addEventListener('click', () => {
    document.cookie = 'language=portuguese;path=/';
    populateSite("portuguese", curUrl)
});

const checaCookie = () => {
    if(document.cookie.split('=')[1] === 'english'){
        populateSite('english', curUrl)
    } else {
        populateSite('portuguese', curUrl)
    }
}

checaCookie();

