<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    if (empty($name) || empty($email)) {
        echo "Please fill out all fields.";
        exit();
    }

    $to = "yic075@ucsd.edu";
    $subject = "github website message: $subject";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Oops! Something went wrong.";
    }

    // Redirect back to the form page
    header("Location: contact.html");
    exit();

} else {
    echo "Form submission error.";
}
?>
