import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h1{
		margin-bottom: 20px;
		font-weight: 400;
		color: #fff;
	}
`;
export const ToDoList = styled.div`
	background-color: #fff;
	padding: 30px 20px;
	border-radius: 3px;
`;
export const BtnAdd = styled.button`
	height: 50px;
	border: none;
	border-bottom: 1px solid crimson;
	border-right: 1px solid crimson;
	border-top: 1px solid crimson;
	width: 20vw;
	background-color: transparent;
	color: crimson;
	text-transform: uppercase;
	font-size: 18px;
	font-weight: 400;

    &:hover{
        cursor: pointer;
        opacity: .9;
    }
`;
export const InputArea = styled.input`
	border: none;
	border-bottom: 1px solid crimson;
	border-left: 1px solid crimson;
	border-top: 1px solid crimson;
	height: 50px;
	width: 50vw;
	padding-left: 20px;
	background-color: transparent;
	color: black;
	font-size: 18px;
	margin-bottom: 15px;
    &::placeholder{
        text-transform: uppercase;
        color: #ccc;
        letter-spacing: 2px;
        font-weight: 100;
    }
    &:focus{
        outline: none;
    }
`;
export const List = styled.li`
	width: 100%;
	font-weight: 500;
	text-align: center;
	color: crimson;
	letter-spacing: 1px;
	list-style-type: none;
`;
export const UlList = styled.div`
	width: 100%;
	font-weight: 500;
	padding: 15px;
	margin-top: 10px;
	text-align: center;
	color: crimson;
	border: 1px solid crimson;
	letter-spacing: 1px;
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	background: ${(props) => (props.isFinished ? "#32de84" : "#fff")};
	text-decoration: ${(props) => (props.isFinished ? "line-through" : "none")};
`;
export const Trash = styled(FaTrash)`
	cursor: pointer;
	color: darkred;
`;
export const Rocket = styled(VscRocket)`
	cursor: pointer;
	color: darkgreen;
`;
export const Heading3 = styled.h3`
	font-weight: 400;
	text-align: center;
	margin-top: 25px;
`;
