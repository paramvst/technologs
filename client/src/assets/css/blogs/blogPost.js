import styled from "styled-components";
const Wrapper = styled.div`
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

h2 {
  background-color: black;
  color:orange;
  padding: 20px;
  margin: 0;
  font-size: 36px;
}

h3 {
  margin-top: 30px;
  font-size: 24px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}

ol {
  margin-left: 30px;
}

li {
  font-size: 18px;
  line-height: 1.5;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #c8bbbb;
  color: #090000;
}

.button-container {
  display: flex;
  justify-content: center;
}
`

export default Wrapper