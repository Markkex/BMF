import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
const Menu: FC = () => {
  return (
    <div className="Menu">
      <List component="nav">
        <ListItem>
          <Link to="/">
            <img
              src="https://www.bmf.pt/wp-content/uploads/2018/06/cropped-BMF-e1528127361864.jpg"
              alt="logo"
            />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link to="/novoprocesso">
            <ListItemText primary="Novo Processo" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link to="/processosconcluidos">
            <ListItemText primary="Processos Concluidos" />
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default Menu;
