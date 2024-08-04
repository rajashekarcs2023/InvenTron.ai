'use client';
import React, { useState, useEffect } from "react";
import { 
  collection, 
  addDoc,
  getDoc,
  querySnapshot, 
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore"; 
import { db } from './firebase';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Paper,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
  CssBaseline,
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';



export default function Home() {
    return (
        <Box>
            {item.map((item) => {
                return <h1>{item}</h1>
            })}
        </Box>
    )
}