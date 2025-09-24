<?php
// Petite passerelle d’envoi d’emails (UTF‑8) — sans framework
// À adapter selon votre hébergeur (sendmail / SMTP authentifié)


header('Content-Type: application/json; charset=utf-8');
header('Referrer-Policy: no-referrer');


// 1) Anti‑robots (champ honeypot)
if (!empty($_POST['website'] ?? '')) {
http_response_code(200);
echo json_encode(['ok' => true]);
exit;
}


function clean($v){ return trim(filter_var($v, FILTER_SANITIZE_FULL_SPECIAL_CHARS)); }


$name = clean($_POST['name'] ?? '');
$email = clean($_POST['email'] ?? '');
$phone = clean($_POST['phone'] ?? '');
$subject = clean($_POST['subject'] ?? '');
$msg = trim($_POST['message'] ?? '');


if ($name === '' || $email === '' || $msg === '') {
http_response_code(400);
echo json_encode(['ok'=>false,'error'=>'Champs requis manquants.']);
exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
http_response_code(400);
echo json_encode(['ok'=>false,'error'=>'Adresse email invalide.']);
exit;
}


$to = 'contact@sourcesdupestrin.fr'; // ⚠️ vérifiez cette adresse
$sub = ($subject !== '' ? $subject.' — ' : '') . 'Contact site — Sources du Pestrin';


$body = "Bonjour,\n\n".
"Nouveau message depuis le site :\n\n".
"Nom : $name\n".
"Email : $email\n".
($phone !== '' ? "Téléphone : $phone\n" : '').
"Sujet : ".($subject !== '' ? $subject : '—')."\n\n".
"Message :\n$msg\n\n".
"—\nCe message provient du formulaire de contact du site sourcesdupestrin.fr";


$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Sources du Pestrin <no-reply@sourcesdupestrin.fr>';
$headers[] = 'Reply-To: '. $name .' <'. $email .'>';
$headers[] = 'X-Mailer: PHP/' . phpversion();


$ok = @mail($to, '=?UTF-8?B?'.base64_encode($sub).'?=', $body, implode("\r\n", $headers));


if ($ok){
echo json_encode(['ok'=>true]);
} else {
http_response_code(500);
echo json_encode(['ok'=>false,'error'=>'Échec de l’envoi (configuration serveur).']);
}
?>

