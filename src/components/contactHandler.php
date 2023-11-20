<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $firstName = $data["firstName"];
    $lastName = $data["lastName"];
    $email = $data["email"];
    $phone = $data["phone"];
    $message = $data["message"];

    $to = "dhullsaurabh3111@gmail.com";
    $subject = "New Contact Form Submission";

    $messageBody = "First Name: $firstName\n";
    $messageBody .= "Last Name: $lastName\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone: $phone\n\n";
    $messageBody .= "Message:\n$message";

    $headers = "From: $email";

    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        http_response_code(200);
        echo json_encode(["code" => 200, "message" => "Message sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["code" => 500, "message" => "Error sending message"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["code" => 400, "message" => "Bad Request"]);
}
?>
