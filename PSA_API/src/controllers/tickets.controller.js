import { pooldb } from "../db.js";


export const getTickets = async (req, res) => {
	const [rows] = await pooldb.query('select * from tickets');
	res.json(rows);
};


export const getTicket = async (req, res) => {
	// req.params -> guarda todos los parametros enviados
	const [rows] = await pooldb.query('select * from tickets where id = ?', [req.params.id]);

	if(rows.length <= 0) return res.status(404).json({
		message: "Ticket not found"
	})

	res.json(rows[0]);
};


export const createTickets = async (req, res) => {
  let today = new Date();

  let day = today.getDate(); // `getDate()` devuelve el día del mes (del 1 al 31)
  let month = today.getMonth() + 1; // `getMonth()` devuelve el mes (de 0 a 11)
  let year = today.getFullYear(); // `getFullYear()` devuelve el año completo

  let fechaDeEmision = `${year}-${month}-${day}`;
  let { name, descripcion } = req.body;

  const [rows] = await pooldb.query(
    "insert into tickets (name, descripcion, fechaDeEmision) values (?, ?, ?)",
    [name, descripcion, fechaDeEmision]
  );

  res.send({
    id: rows.insertId,
    name,
    descripcion,
    fechaDeEmision,
  });
};


export const updateTickets = (req, res) => res.send("Actualizando ticket");

export const deteleTickets = (req, res) => res.send("Eliminando ticket");
