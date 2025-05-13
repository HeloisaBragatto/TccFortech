<?php

    include 'conexao.php';

    session_start();

    $email = mysqli_real_escape_string($conexao, $_POST['email']);
    $senha = mysqli_real_escape_string($conexao, $_POST['senha']);

    //Verificação de variáveis vazias
    if (empty($email)){
        echo "<script type='text/javascript'> alert ('Escreva o email'); window.location.href='../PaginaLogin.html'; </script>";
        exit;
    }
    elseif (empty($senha)){
        echo "<script type='text/javascript'> alert ('Escreva a senha'); window.location.href='../PaginaLogin.html'; </script>";
        exit;
    }

    //Consulta ao banco de dados para verificar email e senha
    $sqlsearching = "SELECT * FROM banco WHERE email = '$email' AND senha = '$senha'";
    $query = mysqli_query($conexao, $sqlsearching);

    if (mysqli_num_rows($query) > 0) {

        $sqlVerificarEmail = "select email from banco where email = '$email'";
        $sqlVerificarSenha = "select senha from banco where senha = '$senha'";

        $resultEmail = @mysqli_query($conexao, $sqlVerificarEmail);
        $resultSenha = @mysqli_query($conexao, $sqlVerificarSenha);

        $EscapeEmail = mysqli_real_escape_string($conexao, $email);
        $SelectId = "SELECT id FROM banco WHERE email = '$EscapeEmail'";
        $resultId = mysqli_query($conexao, $SelectId);

        if ($resultId && mysqli_num_rows($resultId) > 0) {
            $row = mysqli_fetch_assoc($resultId); 
            $_SESSION['id_usuario'] = $row['id']; 
        } else {
            echo "<script type='text/javascript'> alert ('Erro ao capturar o Id'); window.location.href='../PaginaLogin.html'; </script>";
            exit;
        }

        if(mysqli_num_rows($resultEmail) > 0 && mysqli_num_rows($resultSenha) > 0){
            $_SESSION['loggedin'] = true;
            $_SESSION['email'] = $email;
            $_SESSION['id'] = $idUsuario;

        }
    
        echo "<script type='text/javascript'>alert('Login realizado com sucesso'); window.location.href='../PaginaAvaliacao.php';</script>";
        $resultado = mysql_fetch_assoc($query);

    } 
    else {
        echo "<script type='text/javascript'>alert('Email ou senha incorretos'); window.location.href='../PaginaLogin.html';</script>";
    }

    mysqli_close ($conexao);
?>
