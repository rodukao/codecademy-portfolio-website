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
        pageContent: `<p>Hey there! I'm Rodrigo, a Brazilian creative soul with a passion for blending art and technology. I started my academic path at Universidade Federal de Juiz de Fora, focusing on Arts and Design. My curiosity for learning didn't end there, though. I'm now expanding my knowledge in Systems Analysis and Development at Estácio de Sá and enhancing my tech expertise through a Full-Stack Developer course at Codecademy.</p>

        <p>During the day, I work as a Web Designer at <a target="_blank" href="https://www.museudeartemurilomendes.com.br">Museu de Arte Murilo Mendes</a>, where I'm responsible for creating websites that are both engaging and easy to use. But after work, I switch gears. I spend quality time with my son, often playing video games or enjoying the great outdoors together. I'm also known to spend hours on my computer, working on various personal projects that spark my creativity.</p>

        <p>That's a quick glimpse into who I am: a mix of an artist, a tech enthusiast, and a devoted dad. Here's to embracing the fun, the inventive, and the unplanned moments in life!</p>`,
        footerTitle: `Some skills that I learned so far!`,
        footerDescription: `(This is a work in progress list)`
    },
    portuguese: {
        pageTitle: 'Sobre',
        pageContent: `<p>Olá! Eu sou Rodrigo, uma alma criativa brasileira com paixão por combinar arte e tecnologia. Comecei meu caminho acadêmico na Universidade Federal de Juiz de Fora, focando em Artes e Design. Minha curiosidade por aprender não parou por aí, no entanto. Agora estou expandindo meu conhecimento em Análise e Desenvolvimento de Sistemas na Estácio de Sá e aprimorando minha expertise tecnológica através de um curso de Desenvolvedor Full-Stack na Codecademy.</p>

        <p>Durante o dia, trabalho como Web Designer no <a target="_blank" href="https://www.museudeartemurilomendes.com.br">Museu de Arte Murilo Mendes</a>, onde sou responsável por criar sites que são tanto envolventes quanto fáceis de usar. Mas depois do trabalho, mudo de marcha. Passo momentos de qualidade com meu filho, muitas vezes jogando videogames ou aproveitando o ar livre juntos. Também sou conhecido por passar horas no meu computador, trabalhando em vários projetos pessoais que despertam minha criatividade.</p>

        <p>Esse é um vislumbre rápido de quem eu sou: uma mistura de artista, entusiasta da tecnologia e pai dedicado. Um brinde aos momentos divertidos, inventivos e não planejados da vida!</p>`,
        footerTitle: `Algumas habilidades que aprendi até o momento`,
        footerDescription: `(Essa é uma lista em atualização)`
    }
}

const projectsPageContent = {
    english: {
        pageTitle: 'Projects',
        pageContent: `<p>Welcome to my Projects page! Here you'll find a collection of the work I've created, inspired by the challenges and courses at Codecademy. Each project represents a step in my journey to master full-stack development, showcasing the skills and creativity I've honed along the way. From front-end designs to complex back-end systems, these projects reflect my passion for blending the art of design with the science of programming. Dive in and explore the fruits of my learning and experimentation!</p>
        <h3>List of projects</h3>
        <div class="projects">
            <div class="project">
                <h4>Random sentence generator</h4>
                <p>A simple project that group some semi random words to create a sentence.</p>
                <a href="#">Visit project github page</a><a href="#">Live view</a>
            </div>
            <div class="project">
                <h4>Portfolio website</h4>
                <p>This very own website that I created for the portfolio website project.</p>
                <a href="#">Visit project github page</a><a href="#">Live view</a>
            </div>
        </div>`
    },
    portuguese: {
        pageTitle: 'Projetos',
        pageContent: `<p>Bem-vindo à minha página de Projetos! Aqui você encontrará uma coleção dos trabalhos que criei, inspirados pelos desafios e cursos da Codecademy. Cada projeto representa um passo na minha jornada para dominar o desenvolvimento full-stack, mostrando as habilidades e criatividade que aprimorei ao longo do caminho. Desde designs de front-end até sistemas complexos de back-end, esses projetos refletem minha paixão por combinar a arte do design com a ciência da programação. Mergulhe e explore os frutos do meu aprendizado e experimentação!</p>
        <h3>Lista de projetos</h3>
        <div class="projects">
            <div class="project">
                <h4>Random sentence generator</h4>
                <p>Um projetinho simples que agrupa um conjunto de palavras para formar uma frase aleatória</p>
                <a href="#">Visite a página do projeto no GitHub</a><a href="#">Live view</a>
            </div>
            <div class="project">
                <h4>Portfolio website</h4>
                <p>Esse mesmo site que vocês estão navegando! Um site simples mas exageradamente complexo.</p>
                <a href="#">Visit project github page</a><a href="#">Live view</a>
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

