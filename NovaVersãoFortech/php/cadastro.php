<?php

    session_start();

    include 'conexao.php';

    $conexao= mysqli_connect ($host, $user, $pass, $banco) or die ("Erro na conexão.");

    $nome = mysqli_real_escape_string($conexao, $_POST['nome']);
    $sobrenome = mysqli_real_escape_string($conexao, $_POST['sobrenome']);
    $email = mysqli_real_escape_string($conexao, $_POST['email']);
    $senha = mysqli_real_escape_string($conexao, $_POST['senha']);

    //Verificação do email
    $sql_email = "SELECT * FROM banco WHERE email = '$email'";
    $resultado_email = mysqli_query($conexao, $sql_email);

    if (mysqli_num_rows($resultado_email) > 0) {
        echo "<script type='text/javascript'>alert('Email já cadastrado'); window.location.href='../PaginaLogin.html';</script>";
        exit;
    }

    //Verificação de variável vazias
    if (empty($nome)){
        echo "<script type='text/javascript'> alert ('Escreva o nome'); window.location.href='../PaginaCadastro.html'; </script>";
        exit;
    }
    elseif (empty($sobrenome)){
        echo "<script type='text/javascript'> alert ('Escreva o sobrenome'); window.location.href='../PaginaCadastro.html'; </script>";
        exit;
    }
    elseif (empty($email)){
        echo "<script type='text/javascript'> alert ('Escreva o email'); window.location.href='../PaginaCadastro.html'; </script>";
        exit;
    }
    elseif (empty($senha)){
        echo "<script type='text/javascript'> alert ('Escreva a senha'); window.location.href='../PaginaCadastro.html'; </script>";
        exit;
    }

    //Inserção dos dados no banco
    $sqlinsert = "insert into banco (nome, sobrenome, email, senha) values ('$nome','$sobrenome','$email', '$senha')";
    $query = mysqli_query($conexao,$sqlinsert);

    if ($query) {

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
            echo "Erro: ID do usuário não encontrado.";
            exit;
        }

        if(mysqli_num_rows($resultEmail) > 0 && mysqli_num_rows($resultSenha) > 0){
            $_SESSION['loggedin'] = true;
            $_SESSION['email'] = $email;
            $_SESSION['id'] = $idUsuario;
        }

        echo "<script type='text/javascript'>alert('Cadastro Realizado'); window.location.href='../PaginaLogin.html';</script>";
    } 
    else {
        echo "<script type='text/javascript'>alert('Erro ao cadastrar, tente novamente'); window.location.href='../PaginaCadastro.php';</script>";
    }

    mysqli_close ($conexao);
?>
