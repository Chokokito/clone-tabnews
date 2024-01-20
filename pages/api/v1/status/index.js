function status(request, response) {
  response.status(200).json({ nome: "Oi linda." });
}

export default status;
