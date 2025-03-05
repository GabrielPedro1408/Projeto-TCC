class MeuComponente extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estilo do componente
      const style = document.createElement('style');
      style.textContent = `
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
 
   /* Estilos do componente */
      #sidebar {
        width: 80px;
        height: calc(100vh - 80px); 
        background-color: #042940;
        position: fixed;
        top: 80px;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: width 1s; /* Transição suave para a largura */
      }
      #sidebar.expanded {
        width: 140px; /* Largura expandida do sidebar */
      }
      #sidebar-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden; /* Esconde o conteúdo que não cabe */
      }
      .side-item {
        list-style: none;
        width: 100%;
        text-align: center;
        margin: 10px 0;
        margin-bottom: 100px; /* Espaçamento adicional de 50px entre os itens */
      }
      .side-item a {
        text-decoration: none;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        transition: opacity 1s; /* Transição suave para a opacidade */
      }
      .side-item a .item-description {
        display: none; /* Esconde o texto inicialmente */
        opacity: 0; /* Torna o texto invisível inicialmente */
        margin-left: 10px;
      }
     .side-item a button .item-description  {
        display: none; /* Esconde o texto inicialmente */
        opacity: 0; /* Torna o texto invisível inicialmente */
        margin-left: 10px;
      }
      #sidebar.expanded .side-item a .item-description {
        display: inline; /* Mostra o texto quando expandido */
        opacity: 1; /* Torna o texto visível quando expandido */
      }
      #logout {
        margin-top: auto;
        width: 100%;
        text-align: center;
      }
      #logout-btn {
        width: 100%;
        background: none;
        border: none;
        color: #ffffff;
        padding: 10px 0;
        cursor: pointer;
        margin-bottom: 10px;
      }
      #open-btn {
        background: none;
        border: none;
        color: #ffffff;
        cursor: pointer;
      }
      #sidebar-content > * {
        padding: 0px 0;
      }
    `;

    // Estrutura do componente
    const aside = document.createElement('aside');
    aside.innerHTML = `
      <nav id="sidebar">
        <div id="sidebar-content">
          <ul id="side-items">
            <div class="menu-image">
              <li class="side-item active">
                <div id="menu-image">
                  <a href="#"><i class="fas fa-bars fa-2xl"></i></a>
                </div>
              </li>
            </div>
            <li class="side-item active">
              <a href="Dashboard.php">
                <i class="fas fa-chart-line"></i>
                <span class="item-description">
                  Dashboard
                </span>
              </a>
            </li>
            <li class="side-item">
              <a href="Financeiro.php">
                <i class="fas fa-person-walking-luggage"></i>
                <span class="item-description">
                  Financeiro
                </span>
              </a>
            </li>
            <li class="side-item">
              <a href="Serviço.php">
                <i class="fas fa-person-walking-luggage"></i>
                <span class="item-description">
                  Serviços
                </span>
              </a>
            </li>
            <li class="side-item">
              <a href="Vendas.php">
                <i class="fas fa-bag-shopping"></i>
                <span class="item-description">
                  Vendas
                </span>
              </a>
            </li>
            <li class="side-item">
              <a href="Clientes.php">
                <i class="fas fa-user"></i>
                <span class="item-description">
                  Clientes
                </span>
              </a>
            </li>
          </ul>

          <button id="open-btn">
            <i id="open-btn-icon" class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div id="logout">
          <a href="logout.php" style="text-decoration:none">
            <button class="side-item" id="logout-btn">
              <i class="fas fa-arrow-right-from-bracket"></i>
              <span class="item-description">
                Logout
              </span>
            </button>
          </a>
        </div>
      </nav>
    `;

    shadow.appendChild(style);
    shadow.appendChild(aside);

    // Adiciona o evento de clique para expandir/colapsar o sidebar
    const sidebar = shadow.getElementById('sidebar');
    const openBtn = shadow.getElementById('open-btn');
    openBtn.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  }
}

// Definir o novo elemento
customElements.define('meu-componente', MeuComponente);