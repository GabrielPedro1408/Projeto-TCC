<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/style.css">
    <script type="module" src="../components/sidebar.js"></script>
    <script type="module" src="../components/header.js"></script>
    <link rel="shortcut icon" href="../images/financeiro.png" type="image/x-icon">
    <title>NPL Quadras</title>

</head>
<body>
    
    <header-componente></header-componente>
    <sidebar-componente></sidebar-componente>

    <!-- start main -->
    <main>
        <div class="titulo">
            <h1>SEJA BEM VINDO </h1>
        </div>
    </main>
    <!-- end main -->

    <!-- start footer -->
    <footer>

    </footer>
    <!-- end footer -->
</body>
</html>

<?php 
session_start();
if(!isset($_SESSION['nome'])){
    header('Location: index.php');
    exit();
}
?>