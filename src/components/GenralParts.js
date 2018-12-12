import styled from 'styled-components';


export const Button = styled.button`
  background: ${props => props.primary ? "#4265ff" : "white"};
  color: ${props => props.primary ? "white" : "#4265ff"};
  
  height: 50px;
  width: 120px;
 font-size: 15px;
  font-weight : bold ;
  border: 2px solid #4265ff;
  border-radius: 14px;
  margin:15px;
   ;
`;
export const Text = styled.input`

position :relative;
vertical-align:middle;
box-sizing:border-box

  border: none;
  font-size: 15px;
  
  outline: none;
  background-color: white;
  border-bottom: 1px solid grey ;


      width:300px;
      padding:0px 10px;
      &:focus {
border-bottom: 2px solid #4265ff ;
}
&:focus ~ label {top:-50px; font-size:12px;  transition: 0.4s ease all; color:#4265ff; }
&:not([value=""]) ~ label {top:-50px; font-size:12px;  transition: 0.4s ease all; }

  `;
export const Label=styled.label`  color:grey; position:relative; top:-27px; font-size:15px; `;
export const Card=styled.div `
 margin : 35px;
 background-color: white;
 border: none;
 text-align:center;
 border-radius: 14px;

`;
export const Err = styled.div `font-size: 12px; color: red ; margin-top: -15px;`
