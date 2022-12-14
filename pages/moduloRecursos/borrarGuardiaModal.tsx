import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 10,
  p: 4,
};

export default function BorrarGuardiaModal(props: any) {
  var open = props.isOpen
  var setOpen = props.setOpen
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleBorrar() {
    console.log(props.reporteId)

    await fetch("https://aninfo2c222back-production.up.railway.app/api/guardias/" + props.reporteId, {
      method: "DELETE",
    })
    .then(response => alert("Se eliminó correctamente"))
    .catch(error => alert(error))

    setOpen(false)
  }
  function handleCancelar() {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{style : {
            backgroundColor:"transparent"
        }
        }}
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center"}}>
            ¿Está seguro que quiere eliminar este reporte?
          </Typography>
          <Button style={{backgroundColor: "#134074", color:"white", float:"left"}} onClick={handleCancelar}>Cancelar</Button>
          <Button style={{backgroundColor: "#134074", color:"white", float:"right"}} onClick={handleBorrar}>Borrar</Button>
        </Box>
      </Modal>
    </div>
  );
}