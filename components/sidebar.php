<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/sidebar.css">
    <script type="module" src="../components/sidebar.js"></script>
    <title>Side-Bar</title>
</head>
<body>
<nav id="sidebar">

<div id="sidebar-content">
    <div id="user">
        <p id="user-info">
            <span class="item-description">
                <label for="Usuario">Usuario</label>
            </span>
            <span class="item-description">
                Professor de Web
            </span>
        </p>
    </div>

    <ul id="side-items">
        <li class="side-item active">
            <a href="../PHP/index.php">
                <i class="fas fa-chart-line fa-xl"></i>
                <span class="item-description">
                    Dashboard
                </span>
            </a>
        </li>
        <li class="side-item">
            <a href="../PHP/Financeiro.php">
                <i class="fa-solid fa-dollar-sign fa-xl"></i>
                <span class="item-description">
                    Financeiro
                </span>
            </a>
        </li>
        <li class="side-item">
            <a href="../PHP/Quadras.php">
                <i class="fas fa-person-walking-luggage fa-xl"></i>
                <span class="item-description">
                    Quadras
                </span>
            </a>
        </li>
        <li class="side-item">
            <a href="../PHP/Vendas.php">
                <i class="fas fa-bag-shopping fa-xl"></i>
                <span class="item-description">
                    Vendas
                </span>
            </a>
        </li>
        <li class="side-item">
            <a href="../PHP/Clientes.php">
                <i class="fas fa-user fa-xl"></i>
                <span class="item-description">
                    Clientes
                </span>
            </a>
        </li>
    </ul>

    <button id="open-btn">
        <i id="open-btn-icon" class="fa-solid fa-chevron-right"></i>
    </button>
</div>

<div id="logout">
    <a href="../PHP/logout.php" style="text-decoration:none">
        <button id="logout-btn">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span class="item-description">
                Logout
            </span>
        </button>
    </a>
</div>

</nav>
</body>
</html>