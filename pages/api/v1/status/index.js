function status(request, response) {
  response.status(200).json({ chave: "Esse é o teste do pão de açúcar!" });
}

export default status;
