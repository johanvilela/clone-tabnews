import database from "infra/database.js";

console.log(database);

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Esse é o teste do pão de açúcar!" });
}

export default status;
