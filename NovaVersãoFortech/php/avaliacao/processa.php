<?php
    include '../conexao.php';

    session_start();

    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] != true){
        echo 
            "<script type='text/javascript'>
            alert('Por favor, faça login para acessar essa avaliar');
            open.window = '../PaginaPerfil.php';
            </script>";
            header("Location: ../../PaginaPerfil.php");
            exit;
        }

    date_default_timezone_set('America/Sao_Paulo');

    if (!empty($_POST['estrela'])) {

        $conexao= mysqli_connect ($host, $user, $pass, $banco) or die ("Erro na conexão.");

        $resultId = $_SESSION['id_usuario'];
        $idDispositivo = $_POST['id_dispositivos'] ?? null;

        if ($idDispositivo) {
            echo "ID do dispositivo: " . htmlspecialchars($idDispositivo);
            echo "ID do usuário: " . htmlspecialchars($resultId) . "<br>";
        } else {
            echo "ID não foi pego";
        }

        $resultId = $_SESSION['id_usuario'] ?? null;
        $idDispositivo = mysqli_real_escape_string($conexao, $_POST['id_dispositivos']);
        $estrela = mysqli_real_escape_string($conexao, $_POST['estrela']);
        $mensagem = mysqli_real_escape_string($conexao, $_POST['mensagem']);
        $created = date("Y-m-d H:i:s");

        if (!empty($_POST['estrela']) && isset($_POST['id_dispositivos'], $_POST['mensagem'])){
            $query_avaliacao = "INSERT INTO avaliacoes (qtd_estrela, mensagem, created, id_dispositivos, id_usuario) VALUES (?, ?, ?, ?, ?)";
            $stmt = $conexao->prepare($query_avaliacao);
        }
        else{
            echo "Não Inseriu";
        }

        if ($stmt) {

            $stmt->bind_param("issii", $estrela, $mensagem, $created, $idDispositivo, $resultId);

            if ($stmt->execute()) {
                $_SESSION['msg'] = "<p style='color: green;'>Avaliação cadastrada com sucesso.</p>";
            }
            else {
                echo "<p style='color: red;'>Erro ao cadastrar avaliação: " . $stmt->error . "</p>";
            }
                header("Location: ../../PaginaAvaliacao.php");
        } 
        else {
            $_SESSION['msg'] = "<p style='color: #f00;'>Erro: Avaliação não foi cadastrada.</p>";
            header("Location:  ../../PaginaVerMais.php");
        }
            $stmt->close();

    } 
    else {
        $_SESSION['msg'] = "<p style='color: #f00;'>Erro: Não foi possível preparar a consulta.</p>";
        header("Location:  ../../PaginaVerMais.php");
    }

    $conexao->close();
?>
