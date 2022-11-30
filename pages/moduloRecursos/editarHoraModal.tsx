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

export default function EditarHoraModal(props: any) {
  var open = props.isOpen
  var setOpen = props.setOpen
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const tareaId = props.tareaId
    const reporteId = props.reporteId
    const [cantHoras, setCantHoras] = React.useState(props.cantHoras)

  function handleEditar() {
    /* LLAMAR A ENDPOINT */
    // updateHora()
    setOpen(false)

    // Hay que hacer reload para que se actualice la tabla, pero vuelve al home
    document.location.reload()
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
            TareaId: {tareaId}
          </Typography>
          <div style={{display:"flex", justifyContent:"center", padding:"2rem"}}>
            <label style={{marginRight:"1rem"}}>Horas:</label>
            <input value={cantHoras} onChange={(e) => setCantHoras(e.target.value)}></input>
          </div>
          
          <Button style={{backgroundColor: "#134074", color:"white", float:"left"}} onClick={handleCancelar}>Cancelar</Button>
          <Button style={{backgroundColor: "#134074", color:"white", float:"right"}} onClick={handleEditar}>Editar</Button>
        </Box>
      </Modal>
    </div>
  );
}