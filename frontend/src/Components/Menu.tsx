import { List, ListItem, ListItemText } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
const Menu: FC = () => {
  return (
    <div className="Menu">
      <List component="nav">
        <ListItem>
          <Link to="/">
            <ListItemText primary="Novo Processo" />
          </Link>
        </ListItem>
      </List>
      <Link to="/">
        <img
          src="https://bmf.pt/wp-content/uploads/2018/06/cropped-BMF-e1528127361864.jpg"
          alt="logo"
        />
      </Link>
      <Link to="/novoprocesso">Novo Processo</Link>
    </div>
  );
};

export default Menu;
