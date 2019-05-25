import styled from 'styled-components';

export default styled.button`
width:150px;
height:50px;
border: 1px solid grey;
border-radius:8px;
background-color:${props=>(props.secondary ? "#96C5B0":"#ADF1D2")};
:hover{
    background-color: #553555;
    color:black;
}
padding:10px;
margin:10px;


`