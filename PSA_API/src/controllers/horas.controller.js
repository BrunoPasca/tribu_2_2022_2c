import { pool } from "../db.js";

export const getHoras = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM tbl_horas");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getHora = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM tbl_horas WHERE id = ?", [
        id,
      ]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Hora not found" });
      }
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteHora = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("DELETE FROM tbl_horas WHERE id = ?", [id]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Hora not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const createHora = async (req, res) => {
    try {
        const { legajo, id_tarea, cant, fecha, extra } = req.body;

        const [rows] = await pool.query(
          "INSERT INTO tbl_horas (legajo_empleado, id_tarea, cant_horas, fecha, estado, extra) VALUES (?, ?, ?, ?, ?, ?)",
          [legajo, id_tarea, cant, fecha, "abierto" ,extra]
        );
        res.status(201).json({ id: rows.insertId, legajo, id_tarea, cant, fecha, estado: "abierto", extra });
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
};