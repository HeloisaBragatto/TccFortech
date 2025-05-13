<?php

    include './php/conexao.php';

    session_start();

    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true){
        echo 
            "<script type='text/javascript'>
            alert('Por favor faça login ou cadastro para acessar essa área');
            window.location.href = '../PaginaLogin.html';
            </script>";
        } 


    $sqlVerificarEmail = "select email from banco where email = '".$_SESSION['email']."';";
    $resultEmail = @mysqli_query($conexao, $sqlVerificarEmail);

    $sqlnome = "select nome from banco where email = '".$_SESSION['email']."';"; 
    $resultNome = @mysqli_query($conexao, $sqlnome);

    $sqlsobrenome = "select sobrenome from banco where email = '".$_SESSION['email']."';"; 
    $resultSobrenome = @mysqli_query($conexao, $sqlsobrenome);

    if ($resultNome && $resultSobrenome->num_rows > 0){
        $nome = $resultNome->fetch_assoc()['nome'];
        $sobrenome = $resultSobrenome->fetch_assoc()['sobrenome'];
    }
    else {
        echo "Erro";
    }
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PaginaAvaliacao.css">
    <link rel="shortcut icon" type="imagex/png" href="./img/cobra.png">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

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
       <div class="container">
            <div class="perfil">
                <h1>Olá, <?php echo htmlspecialchars($nome); echo " "; echo htmlspecialchars($sobrenome); ?> </h1>
                <a href="./php/logout.php"><button type="submit">Sair</button></a>
            </div>
       </div>
       <div class="avaliacao">
            <h1>Suas Avaliações</h1>
                <?php
                    $conexao= mysqli_connect ($host, $user, $pass, $banco) or die ("Erro na conexão.");
                    
                    if ($conexao->connect_error) {
                        die("Erro de conexão: " . $conexao->connect_error);
                    }

                    $idUsuario = $_SESSION['id_usuario'] ?? null;
                    $SelectIdUsuario = "SELECT * FROM avaliacoes WHERE id_usuario = '$idUsuario';";

                    $query_avaliacoes = "SELECT a.qtd_estrela, a.mensagem, d.nome AS nome_dispositivo FROM avaliacoes a JOIN dispositivos d ON a.id_dispositivos = d.id WHERE a.id_usuario = '$idUsuario' ORDER BY a.id DESC";
                    $result  = $conexao->query($query_avaliacoes);

                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<div class='conteudo'>";
                            echo "<div class='conteudo-card'>";
                            echo "<div class='estrelas'>";
                            
                            for ($i = 1; $i <= 5; $i++) {
                                if ($i <= $row["qtd_estrela"]) {
                                    echo '<p><i class="estrela-preenchida fa-solid fa-star"></i></p>';
                                } else {
                                    echo '<p><i class="estrela-vazia fa-solid fa-star"></i></p>';
                                }
                            }
                            echo "</div>";
                            echo "<p>Avaliação: " . htmlspecialchars($row["nome_dispositivo"]) . "</p>";
                            echo "<p>Mensagem: " . htmlspecialchars($row["mensagem"]) . "</p>";
                            echo "</div>";
                            echo "</div>";
                        }
                    } 
                    else {
                        echo "<div class='frase'>";
                        echo "<p>Você não possui avaliações.</p>";
                        echo "</div>";
                    }            
                        $conexao->close();
                ?>
        </div>
    </main>

    <footer>
        <p>Copyright © 2024 - Direitos Reservados - Fortech</p>
    </footer>

</body>
</html>