import {useState} from 'react';
import Layout from '../common/Layout';

/* //숫자 버튼 데이터 처리
export default function Youtube() {
	const [Num, setNum] = useState(0);
	const minusNum = () => {
		setNum(Num-1);
	};
	return (
		<Layout title={'YOUTUBE'}>
			<h2>{Num}</h2>
			<button onClick={minusNum}>minus</button>
			<button onClick={() => setNum(Num+1)}>plus</button>
		</Layout>
	);
}
*/


export default function Youtube() {
	const [Colors, setColors] = useState(['red','green','blue']);
		return (
		<Layout title={'YOUTUBE'}>
		<ul>
			{Colors.map((color, idx) => {
				return (
					<li style={{color: color}} key={idx}>
						{color}
					</li>
				);
			})}	
		</ul>
		</Layout>
	);
}

// 속성과 속성명이 같을 경우 1번만 써줘도 됨 {{color:color}} == {{color}}
