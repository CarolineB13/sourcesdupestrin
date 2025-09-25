<?php
declare(strict_types=1);

// Autoriser le front Vite en dev
$allowedOrigins = ['http://localhost:5173'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405); echo json_encode(['ok'=>false,'error'=>'Méthode non autorisée']); exit;
}

// Lire le JSON
$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Payload invalide']); exit; }

// Honeypot anti-bot (champ caché "website")
if (trim($data['website'] ?? '') !== '') { echo json_encode(['ok'=>true]); exit; }

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$message = trim($data['message'] ?? '');

if ($name==='' || $email==='' || $message==='') { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Champs requis manquants']); exit; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Email invalide']); exit; }
if (mb_strlen($message) < 10) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Message trop court']); exit; }

// Anti-flood 60s/IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir().'/pestrin_contact_'.md5($ip);
if (file_exists($rateFile) && (time()-filemtime($rateFile) < 60)) { http_response_code(429); echo json_encode(['ok'=>false,'error'=>'Trop de tentatives, réessaie dans 1 minute.']); exit; }
@touch($rateFile);

// PHPMailer
require __DIR__.'/phpmailer/src/PHPMailer.php';
require __DIR__.'/phpmailer/src/SMTP.php';
require __DIR__.'/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();

  // —————— PARAMÈTRES SMTP ——————
  $mail->Host       = 'smtp.planet-work.com';     
  $mail->SMTPAuth   = true;
  $mail->Username   = 'contact@sourcesdupestrin.fr';  
  $mail->Password   = 'Cont@ct2025!';              
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;
  // ————————————————————————————————————————————————

  // From = la boîte du domaine (délivrabilité)
  $mail->setFrom('contact@sourcesdupestrin.fr', 'Site — Les Sources du Pestrin');
  // To = où tu reçois
  $mail->addAddress('contact@sourcesdupestrin.fr', 'Compagnie des Eaux d’Ardèche');
  // Reply-To = l’expéditeur
  $mail->addReplyTo($email, $name);

  $mail->Subject = '📩 Nouveau message du site — '.$name;

  $safe = fn(string $s) => htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
  $mail->isHTML(true);
  $mail->Body = '
    <h2>Message du formulaire de contact</h2>
    <p><strong>Nom:</strong> '.$safe($name).'</p>
    <p><strong>Email:</strong> '.$safe($email).'</p>'.
    ($phone!=='' ? '<p><strong>Téléphone:</strong> '.$safe($phone).'</p>' : '').
    '<p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;">'.$safe($message).'</pre>
    <hr><p style="color:#777">IP: '.$safe($ip).' · '.date('Y-m-d H:i:s').'</p>';
  $mail->AltBody = "Nom: $name\nEmail: $email\n".($phone!==''?"Téléphone: $phone\n":'')."\n$message\n";

  $mail->send();
  echo json_encode(['ok'=>true]);
} catch (Exception $e) {
  error_log('[contact] Mailer Error: '.$e->getMessage());
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>"Impossible d'envoyer le message pour le moment."]);
}
