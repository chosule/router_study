import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video() {
    const [text, setText] = useState();
    const handleChange = (e) => {
        setText(e.target.value);
    }
    // 코드 상에서 동적으로 링크 이동을 하고 싶다면 useNavigate 훅을 사용
    // 일단 밑에 코드처럼 네비게이트 훅을 받아와서
    const navigate = useNavigate();
    const goNavigate = () => navigate('/video/')

    useEffect(() => {
        const handleSubmit = (e) => {
            e.preventDefalut();
            setText('');
            //네비게이터 훅을 써야하는곳에 알려주면 됨
            //video경로로 갈건데 상세 url은 입력된 곳으로 가줘 라고 지정한 것 
            navigate(`/video?q=${text}`);
        }

    })
    // console.log(text);
    return (
        <div>video
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='video id :'
                    value={text || ""}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
