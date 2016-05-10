body,html{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background-color: #252839;
	font-family: 'Montserrat', sans-serif;
}
/*header style*/
h1{
	color: white;
	text-align: center;
	margin:auto;
}
/*sets the style of the main body of calculator*/
.body{
	margin: auto;
	height: 400px;
	background-color: white;
	margin-top: 5%;
}
/*top section styles for clear button and display section*/
.top{
	text-align: right;
	width: 100%;
	height: 90px;
}
.top p {
	margin: 0;
	width: 75%;
	float: right;
	height: 100%;
	font-size: 2em;
}
/*clear button styles*/
.clear{
	width: 25%;
	float: left;
	height: 90px;
	padding: 0;
	border:none;
	margin: 0;
	background-color: #667467;
	color: white;
	font-size: 1.5em;
}
.clear:hover{
	background-color: #c7ad88;
}
.clear:focus{
	outline: none;
}
/*Calculator row styles and buttons*/
.row,.row-container{
	width: 100%;
	text-align: center;
}
.row{
	padding-bottom: 7px;
}
.row button{
	width: 25%;
	height: 90px;
	padding: 0;
	margin: 0;
	float: left;
	font-size: 1.5em;
	color: white;
	padding: 0;
	border: none;
}
.row button:hover{
	background-color: #c7ad88;
}
.row button:focus{
	outline: none;
}

/*sets the color of number buttons*/
.numbers{
	background-color: #963019;
}
/*sets the color of operation buttons*/
.operators{
	background-color: #16174f;
}
/*Footer*/
footer {
	clear: both;
	margin: auto;
	margin-top: 5%;
	text-align: center;
	color: white;
}
footer a:link{
	text-decoration: none;
	color: blue;
	font-size: 1.3em;
	font-weight: bolder;
}
footer a:visited{
	color: blue;
	text-decoration: none;
	font-weight: bolder;
}

/*Responsive Design*/
@media only screen and (min-width: 450px){
  .body{
  	width: 85%;
  }
}
@media only screen and (min-width: 500px){
  .body{
  	width: 65%;
  }
}
@media only screen and (min-width: 750px){
  .body{
  	width: 55%;
  }
}
@media only screen and (min-width: 800px){
  .body{
  	width: 42%;
  }
}
@media only screen and (min-width: 850px){
  .body{
  	width: 35%;
  }
}
@media only screen and (min-width: 950px){
  .body{
  	width: 30%;
  }
}


