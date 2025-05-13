<?php
session_start();
include './php/conexao.php';

$idDispositivo = $_GET['id'] ?? null;

if ($idDispositivo) {
    // echo "ID recebido: " . htmlspecialchars($idDispositivo);

    $queryAvaliacoes = "SELECT qtd_estrela, mensagem FROM avaliacoes WHERE id_dispositivos = $idDispositivo ORDER BY qtd_estrela DESC";
    $resultadoAvaliacoes = mysqli_query($conexao, $queryAvaliacoes);

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="PaginaTodasAvaliacao.css">
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
        <div class="avaliacao">
            <div class="perfil">
                <?php
    
                    $sqlnome = "SELECT nome FROM dispositivos WHERE id = $idDispositivo ;"; 
                    $resultNome = @mysqli_query($conexao, $sqlnome);

                    if ($resultNome->num_rows > 0){
                        $nome = $resultNome->fetch_assoc()['nome'];
                        echo "<h1>$nome</h1>";
                    }
                ?>
            </div>

                <?php 
                    if ($resultadoAvaliacoes->num_rows > 0) {

                        while ($row = $resultadoAvaliacoes->fetch_assoc()) {
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
                            echo "<p>Mensagem: " . htmlspecialchars($row["mensagem"]) . "</p>";
                            echo "</div>";
                            echo "</div>";
                        }
                    } 
                    else {
                        echo "<div class='frase'>";
                        echo "<p>Esse dispositivo não possui avaliações.</p>";
                        echo "</div>";
                    } 
                ?>
            <div class="btnVoltar">
                <button onclick="document.location='PaginaDispositivo.html'">Voltar para a lista de dispositivos</button> 
            </div>
        </div>
    </main>

    <footer>
        <p>Copyright © 2024 - Direitos Reservados - Fortech</p>
    </footer>

</body>
</html>
<?php
} else {
    echo "<p>Dispositivo não encontrado.</p>";
    exit;
}
?>

