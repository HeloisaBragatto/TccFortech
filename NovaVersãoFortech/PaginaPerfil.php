<?php

    include './php/conexao.php';

    session_start();

    if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
        echo "<script type='text/javascript'>
            window.location.href = 'PaginaAvaliacao.php';
        </script>";
        exit();
    }

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PaginaPerfil.css">
    <link rel="shortcut icon" type="imagex/png" href="./img/cobra.png">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <title>Fortech</title>
</head>
<body>

    <nav>
        <a href="PrimeiraPagina.html"><img src="./img/logoo.png" alt=""></a>
        <a href="PaginaDispositivo.html">Catálogo de Dispositivos</a>
        <a href="PaginaLixoEletronico.html">Pontos de Coleta</a>
        <a href="PaginaPerfil.php">Perfil</a>
    </nav>
    
    <main>
        <div class="box">
            <p>Cadastra-se e veja suas avaliações</p>
            <div class="box_btn">
                <input type="button" value="Login" onclick="window.location.href='PaginaLogin.html'">
                <input type="button" value="Cadastro" onclick="window.location.href='PaginaCadastro.html'">
            </div>
        </div>
    </main>

    <footer>
        <p>Copyright © 2024 - Direitos Reservados - Fortech</p>
    </footer>

</body>
</html>