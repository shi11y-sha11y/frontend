import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import siyoung from "../images/siyoung.png";

const alignCenter = {
    display: "flex",
}
const backButtonStyled = {
    textDecoration : "none",
    fontSize : "21px",
    color: "black",
    fontWeight: "700",
}
const placeImageStyled = {
    width: "50vw",
    height: "40vh",
    border: "3px solid black",
    margin: "0 auto",
};
const placeNameStyled = {
    textAlign: "center",
};
const shuffleButtonStyled = {
    display: "grid", 
    margin: "auto",
    borderRadius : "30px",
    width: "150px",
    height: "40px",
    alignItems : "center",
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "#FFCD4E",
    border:"none",
    cursor: "pointer",
};

export default function Shuffle() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
    
        // 데이터를 가져오는 요청을 보낼 URL을 지정합니다.
        const apiUrl = 'http://192.168.0.18:8080/api/v1/restaurant';
    
        // Axios를 사용하여 GET 요청을 보냅니다.
        axios.get(apiUrl)
          .then((response) => {
            // 요청이 성공하면 데이터를 상태로 설정하고 로딩 상태를 해제합니다.
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            // 오류 처리
            console.error('데이터를 가져오는 중 오류 발생:', error);
            setIsLoading(false);
          });
      };
    return (
        <main>
            <Link to="/" style = {backButtonStyled}>&lt;돌아가기</Link>
            <div style = {alignCenter}>
                <img style = {placeImageStyled} src={siyoung} />
            </div>
            <h2 style = {placeNameStyled}>
                {isLoading ? '로딩 중...' : data.restaurant}
            </h2>
            <button onClick={fetchData} disabled={isLoading} style = {shuffleButtonStyled}>다시하기</button>
        </main>
    );
}