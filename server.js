const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;