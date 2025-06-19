<?php
require 'vendor/autoload.php';
use SendGrid\Mail\Mail;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $assunto = $_POST['subject'] ?? '';
    $mensagem = $_POST['message'] ?? '';

    $emailSend = new Mail();
    $emailSend->setFrom("bilitardomatheus@gmail.com", "Portal Místico");
    $emailSend->setSubject("🔮 " . $assunto);
    $emailSend->addTo("bilitardomatheus@gmail.com", $nome);
    
    // Conteúdo HTML místico
    $htmlContent = <<<HTML
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color:rgb(204, 195, 224);
            color:rgb(0, 0, 0);
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color:rgb(204, 195, 224);
            border: 1px solid rgba(74, 42, 138, 0.5);
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 0 20px rgba(105, 69, 255, 0.3);
        }
        .header {
            text-align: center;
            border-bottom: 1px solid #4a2a8a;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        h1 {
            color: #9969ff;
            font-size: 24px;
            margin: 10px 0;
        }
        .symbol {
            font-size: 40px;
            margin: 10px 0;
        }
        .message-box {
            background: rgba(172, 145, 199, 0.9);
            border-left: 4px solid #9969ff;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color:rgb(0, 0, 0);
            border-top: 1px solid #4a2a8a;
            padding-top: 15px;
        }
        .label {
            color:rgb(0, 0, 0);
            font-weight: bold;
            margin-top: 15px;
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="symbol">🌙✨</div>
            <h1>Nova Mensagem do Portal</h1>
        </div>
        
        <div class="label">De:</div>
        <div>$nome &lt;$email&gt;</div>
        
        <div class="label">Assunto:</div>
        <div>$assunto</div>
        
        <div class="label">Mensagem:</div>
        <div class="message-box">$mensagem</div>
        
        <div class="footer">
            <p>Esta mensagem foi enviada através do seu Portal Místico</p>
            <p>🔮 As estrelas guiam, mas você decide o caminho 🔮</p>
        </div>
    </div>
</body>
</html>
HTML;

    // Versão alternativa em texto simples
    $textContent = "🔮 Nova Mensagem do Portal Místico 🔮\n\n";
    $textContent .= "De: $nome <$email>\n";
    $textContent .= "Assunto: $assunto\n\n";
    $textContent .= "Mensagem:\n";
    $textContent .= str_repeat("=", 30) . "\n";
    $textContent .= "$mensagem\n";
    $textContent .= str_repeat("=", 30) . "\n\n";
    $textContent .= "✨ As estrelas guiam, mas você decide o caminho ✨";

    $emailSend->addContent("text/plain", $textContent);
    $emailSend->addContent("text/html", $htmlContent);

    // Usa a variável de ambiente
   $apiKey = getenv('SENDGRID_API_KEY');
    $sendgrid = new \SendGrid($apiKey);

    try {
    $response = $sendgrid->send($emailSend);
    
    if ($response->statusCode() >= 200 && $response->statusCode() < 300) {
        echo '<div class="mensagem-sucesso">✨ Mensagem enviada com sucesso! ✨</div>';
    } else {
        echo '<div class="mensagem-erro">';
        echo '🌌 O portal encontrou resistência...<br>';
        echo '<strong>Erro ' . $response->statusCode() . ':</strong> ';
        
        // Parse da resposta JSON para mensagem mais clara
        $errorBody = json_decode($response->body());
        if (isset($errorBody->errors[0]->message)) {
            echo $errorBody->errors[0]->message;
        } else {
            echo "Problema na autenticação com o serviço de e-mails";
        }
        
        echo '<br>Por favor, tente novamente mais tarde ou contate-me diretamente em <strong>bilitardomatheus@gmail.com</strong>';
        echo '</div>';
    }
} catch (Exception $e) {
    error_log("Erro SendGrid: " . $e->getMessage()); // Log para debug
    echo '<div class="mensagem-erro">';
    echo '🔮 O oráculo está confuso...<br>';
    echo 'Sistema de e-mails temporariamente indisponível.<br>';
    echo 'Por favor, envie diretamente para: <strong>bilitardomatheus@gmail.com</strong>';
    echo '</div>';
}

}

?>