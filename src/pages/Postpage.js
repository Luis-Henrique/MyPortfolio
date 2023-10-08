import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Importe os ícones de marcas

import '../components/css/Postpage.css'

import bgimg1 from '../assets/img/myportifolio.PNG'
import bgimg2 from '../assets/img/juridical.PNG'
import bgimg3 from '../assets/img/ops.jpg'
import bgimg4 from '../assets/img/docmanager.PNG'
import bgimg5 from '../assets/img/uploadai.PNG'
import bgimg6 from '../assets/img/easy.jpg'

import profile1 from '../assets/img/profile-pic.svg'
import profile2 from '../assets/img/dotz.png'
import profile3 from '../assets/img/if.png'
import profile4 from '../assets/img/rocketseat.jpg'

const filteredPosts = [
    {
      id: 0,
      imgSrc: bgimg1,      
      postTitle: 'MyPortifiolio',
      postDescription: `<p>O projeto "Meu Portfólio" é um espaço virtual onde compartilho minha jornada no mundo do desenvolvimento de software, destacando meus projetos pessoais, habilidades e experiência profissional.</p> <br> <p>Este portfólio foi construído utilizando as tecnologias React e JavaScript. Essas ferramentas versáteis e poderosas permitiram a criação de uma interface moderna e interativa, tornando a navegação pelo meu portfólio uma experiência agradável e informativa.</p> <br> <p>No "Meu Portfólio", você encontrará uma visão geral dos seguintes elementos:</p> <br> <ul> <li>- Projetos Pessoais: Aqui, destaco alguns dos projetos que desenvolvi por conta própria.</li> <br> <li>- Habilidades Técnicas: Descrevo as habilidades que adquiri ao longo da minha jornada como desenvolvedor. Desde linguagens de programação até frameworks e ferramentas, meu objetivo é manter minhas habilidades atualizadas e relevantes.</li> <br> <li>- Experiência Profissional: Compartilho um resumo da minha experiência profissional, destacando os projetos em que trabalhei, as empresas onde colaborei e as contribuições que fiz para equipes de desenvolvimento.</li> <br> <li>- Contato: Se você deseja entrar em contato comigo para discutir oportunidades de colaboração, tirar dúvidas ou simplesmente trocar ideias sobre tecnologia, fique à vontade para utilizar as informações de contato fornecidas.</li> </ul> <br> <p>Este projeto pessoal reflete meu compromisso com a transparência, a qualidade e a evolução constante. É um espaço onde posso demonstrar minha paixão pelo desenvolvimento de software e compartilhar minhas realizações com a comunidade de tecnologia.</p> <br> <p>Se você está interessado em saber mais sobre meu trabalho, projetos ou contribuições, convido-o a explorar este portfólio. Espero que ele forneça uma visão clara do meu percurso como desenvolvedor.</p> <br>`,      
      github: 'https://github.com/Luis-Henrique/MyPortifolio',
      link: null,
    },
    {
      id: 1,
      imgSrc: bgimg2,
      postTitle: 'Juridical Compliance',
      postDescription: `<p>O processo de desenvolvimento dessa aplicação para o setor jurídico da Dotz foi uma jornada desafiadora, porém incrivelmente enriquecedora. Nesse processo fui o principal responsável pelas entregas com o apoio do tech lead do projeto. Durante o período de desenvolvimento, aprendi muitas lições valiosas que contribuíram para o meu crescimento profissional.</p><br><p>A aplicação para gestão de processos judiciais na Dotz foi concebida como uma solução completa para otimizar a administração de casos judiciais e fornecer análises valiosas por meio de dashboards e relatórios. Ela foi construída com as seguintes tecnologias-chave:</p><br><ul><li>- API Restful com .NET Core e C#: A base do sistema, responsável por gerenciar os dados e a lógica de negócios. O uso do .NET Core e C# proporcionou um ambiente de desenvolvimento robusto e escalável.</li><br><li>- Interface Angular e TypeScript: Uma interface de usuário moderna e responsiva foi criada usando Angular e TypeScript. Isso permitiu uma experiência de usuário intuitiva e eficiente.</li><br><li>- Banco de dados MySql: Banco de dados escolhido para o projeto.</li><br><li>- Testes Unitários: A aplicação foi rigorosamente testada por meio de testes unitários, garantindo a estabilidade e a confiabilidade do código.</li><br><li>- Versionamento de Código na Azure DevOps: O controle de versão foi gerenciado usando a Azure DevOps.</li><br><li>- Testes de Requisições com Postman: Testes de requisições usando o Postman foram realizados para verificar a integridade das APIs e garantir que elas funcionassem corretamente.</li><br><li>- Entrega Contínua com Jenkins: A entrega contínua da aplicação foi implementada com Jenkins, garantindo que as atualizações e melhorias fossem implantadas de forma rápida e eficiente.</li><br><li>- Integração com Fornecedor por meio de API Default: Para uma gestão de processos eficaz, a aplicação integrou-se com o fornecedor do jurídico por meio de API.</li></ul><br><p>Em resumo, o desenvolvimento dessa aplicação para o setor jurídico da Dotz foi uma experiência desafiadora, mas altamente gratificante. Aprendi a importância de escolher as tecnologias certas, realizar testes de forma rigorosa, colaborar efetivamente com a equipe e entender as necessidades dos usuários finais. Essas lições serão valiosas para o meu crescimento como desenvolvedor e para a melhoria contínua do software que desenvolvemos. Estou orgulhoso de ter contribuído para o sucesso dessa iniciativa e ansioso para enfrentar novos desafios no futuro.</p><br>`,
      github: null,
      link: null,
    },
    {
      id: 2,
      imgSrc: bgimg3,
      postTitle: 'Ops Catalog',
      postDescription: `
      <p>O projeto "Ops-Catalog" é uma aplicação back-end em python que coleta e organiza informações de diversos ambientes dentro da Dotz, que posteriormente são utilizadas em diversas no Redash. Como parte deste projeto, tive a oportunidade de contribuir com uma nova implementação: a catalogação de informações das instâncias de banco de dados da AWS e do GCP.</p><br><p>Neste contexto, uma função Lambda programada desempenha um papel central. Esta função é encarregada de coletar informações detalhadas das instâncias de bancos de dados presentes na AWS e GCP, seguindo um cronograma estabelecido. A integração deste código com o "Ops Catalog" envolve a execução de uma função Lambda agendada que consulta esses detalhes das instâncias, os enfileira e, posteriormente, outra função Lambda é responsável por armazenar essas informações em um banco de dados PostgreSQL.</p><br><p>A infraestrutura subjacente é construída seguindo a abordagem "infraestrutura como código" (IaaC), fazendo uso do CloudFormation no framework SAM da AWS. Isso nos permite criar e gerenciar a infraestrutura de forma automatizada e escalável, garantindo a confiabilidade das operações.</p><br><p>A estrutura da tabela de banco de dados é projetada de acordo com os dados extraídos das instâncias, garantindo que as informações estejam organizadas de forma eficiente e acessíveis para análises futuras. Esses dados, armazenados no PostgreSQL, representam um ativo valioso para a empresa, permitindo insights e tomadas de decisão informadas.</p><br>`,      
      github: null,
      link: null,
    },
    {
      id: 3,
      imgSrc: bgimg4,
      postTitle: 'Doc Manager',
      postDescription: '<p>Como líder da equipe no desenvolvimento do projeto "DocManager", tive a oportunidade de desempenhar um papel central na condução do projeto e na coordenação das atividades da equipe. Foi uma experiência enriquecedora que me permitiu aprender a gerenciar prazos, tomar decisões assertivas e promover a colaboração eficaz entre os membros da equipe.</p> <br> <p>Aqui estão detalhes mais específicos sobre as tecnologias utilizadas neste projeto:</p> <br> <ul> <li>- Back-End: Desenvolvemos uma API REST robusta e escalável no back-end, utilizando .NET Core e C#. Essa API é o coração do "DocManager" e gerencia a lógica de negócios, a autenticação de usuários e a comunicação com o banco de dados.</li> <br> <li>- Front-End: A interface da aplicação foi criada com Angular e TypeScript, proporcionando uma experiência de usuário moderna e responsiva. Isso permitiu aos usuários acessar e gerenciar documentos de forma intuitiva.</li> <br> <li>- Banco de Dados: Utilizamos o MySQL como banco de dados para armazenar e gerenciar os documentos e informações relacionadas. O MySQL é conhecido por sua confiabilidade e desempenho, garantindo que nossos dados estejam seguros e acessíveis.</li> </ul> <br> <p>Este projeto é também o meu Trabalho de Conclusão de Curso (TCC) realizado no Instituto Federal de São Paulo (IFSP). Além da liderança e do trabalho com essas tecnologias, enfrentamos desafios significativos, como a modelagem do projeto, a distribuição eficiente de tarefas e a gestão do tempo. A metodologia Scrum foi nossa aliada na organização e na garantia de que estávamos no caminho certo.</p> <br> <p>Essa jornada de desenvolvimento me proporcionou não apenas conhecimento técnico, mas também um crescimento pessoal notável. Sem dúvidas esse é um dos projetos que mais me orgulho de ter trabalhado!</p><br>',      
      github: 'https://github.com/Luis-Henrique/DocManager',
      link: 'https://mango-plant-0ce961a0f.3.azurestaticapps.net/#/login',
    },
    {
      id: 4,
      imgSrc: bgimg5,
      postTitle: 'Project Ai',
      postDescription: '<p>Um dos projetos mais empolgantes em que participei foi o desenvolvimento de uma aplicação durante um workshop na renomada escola de programação Rocketseat. Nesse projeto, combinei várias tecnologias inovadoras, incluindo a API da OpenAi, para criar títulos e descrições automaticamente a partir de vídeos.</p> <br> <p>No núcleo dessa aplicação, utilizei o FFmpeg, uma biblioteca para processamento de áudio e vídeo, para converter os vídeos em áudio e, posteriormente, transcrever seu conteúdo. Isso foi fundamental para extrair o material bruto que seria processado e refinado na criação dos títulos e descrições.</p> <br> <p>Para construir o back-end da aplicação, optei pela tecnologia Fastify. Além disso, usei o Prisma, um ORM (Object-Relational Mapping), para simplificar a interação com o banco de dados, armazenando metadados dos vídeos e informações relacionadas ao conteúdo gerado.</p> <br> <p>No front-end, escolhi o React, permitindo uma experiência de usuário fluida e responsiva. Além disso, implementei a biblioteca Radix para aprimorar componentes e interações na interface.</p> <br> <p>Esse projeto é um excelente exemplo de como a combinação de diversas tecnologias pode resultar em uma aplicação inovadora e funcional.</p> <br> <p>Participar desse workshop e contribuir para a construção dessa aplicação foi uma experiência enriquecedora que me permitiu explorar novas tecnologias e técnicas de desenvolvimento.</p><br>',
      github: 'https://github.com/Luis-Henrique/upload-ai-front',
      link: null,
    },
    {
      id: 5,
      imgSrc: bgimg6,
      postTitle: 'Easy Menu',
      postDescription: '<p>O "Easy Menu" é uma API para gerenciar cardápios online de restaurantes, proporcionando uma solução eficiente para organizar e atualizar menus. A aplicação permite o cadastro de vários cardápios e sua associação com diferentes refeições, simplificando a gestão de pratos e opções oferecidas.</p> <br> <p>As tecnologias escolhidas para construir esta aplicação foram o .NET Core e o C#, proporcionando uma base sólida e eficaz. Além disso, o banco de dados SQL Server foi utilizado para armazenar as informações dos cardápios.</p> <br> <p>Essa aplicação desempenhou um papel importante no meu aprendizado, permitindo-me explorar e aplicar conceitos de desenvolvimento de API, bancos de dados e gestão de informações.</p> <br>',      
      github: 'https://github.com/Luis-Henrique/EasyMenu',
      link: null,
    },
];

const PostPage = () => {
    const { id } = useParams();
    const postId = id ? Number.parseInt(id, 10) : null;
    let post = null;
  
    filteredPosts.forEach(element => {
      if (element.id === postId) {
        post = element;
      }
    });
  
    if (post === null) {
      return <div>Postagem não encontrada</div>;
    }

  return (
    <div className='postpage'>

      <section className="post-header">
        <div className="header-content post-container">
          <Link to="/projects" className="back-home">Voltar página</Link>
          <h1 className="header-title">{post.postTitle}</h1>
          <img src={post.imgSrc} alt="" className="header-img" />
        </div>
      </section>

      <section className="post-content post-container">
        <h2 className="sub-heading">Sobre o Projeto:</h2>
        <p className="post-text" dangerouslySetInnerHTML={{ __html: post.postDescription }}></p>
      </section>

      <div className="share post-container">
        {post.github === null ? null : (
            <a href={post.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='share-icon' icon={faGithub} /> Acesse o código da aplicação
            </a>
        )}
        {post.link === null ? null : (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='share-icon' icon={faGoogle} /> Acesse a aplicação
            </a>
        )}
      </div>
    </div>
  );
};

export default PostPage;
