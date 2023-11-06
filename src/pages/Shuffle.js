import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react";
import siyoung from "../images/siyoung.png";
import "./shuffle.css";

export default function Shuffle() {
    const [data, setData] = useState([[]]);
    const [isLoading, setIsLoading] = useState(false);

    // 데이터를 가져오는 요청을 보낼 URL을 지정합니다.
    const apiUrl = 'http://192.168.0.18:8080/api/v1/restaurants/random?size=1';
    useEffect(() => {    
        axios.get(apiUrl)
        .then(response => {
          setData(response.data);
        })    
      }, []);

    const fetchData = () => {
        setIsLoading(true);
    
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
            <Link to="/" className = "backButtonStyled">&lt; 처음으로</Link>
            <div className = "alignCenter">
                <img className="placeImageStyled" src={siyoung} />
            </div>
            <h2 className ="placeNameStyled">
                {isLoading ? '로딩 중...' : data[0].name}
            </h2>
            <button onClick={fetchData} disabled={isLoading} className ="shuffleButtonStyled">다시하기</button>
        </main>
    );
}